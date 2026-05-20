import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const ALLOWED_SERVICES = new Set(["ac-install", "ac-service", "electrical", "emergency", "other"]);
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Honeypot — bots fill this field, real browsers leave it empty
    const honeypot = (formData.get("website") as string) || "";
    if (honeypot) {
      // Silently return success so bots don't know they were blocked
      return NextResponse.json({ success: true });
    }

    const name = (formData.get("name") as string)?.trim().slice(0, 200) || "";
    const phone = (formData.get("phone") as string)?.trim().slice(0, 30) || "";
    const email = (formData.get("email") as string)?.trim().slice(0, 200) || "";
    const serviceRaw = (formData.get("service") as string) || "";
    const message = (formData.get("message") as string)?.trim().slice(0, 5000) || "";

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const service = ALLOWED_SERVICES.has(serviceRaw) ? serviceRaw : "other";
    const imageFiles = formData.getAll("images") as File[];

    const serviceLabels: Record<string, string> = {
      "ac-install": "Air Con Installation",
      "ac-service": "Air Con Servicing / Repairs",
      electrical: "Electrical Work",
      emergency: "Emergency Callout",
      other: "Other / Not Sure",
    };

    // Validate and convert image files to nodemailer attachments
    const attachments = await Promise.all(
      imageFiles
        .filter((f) => {
          if (f.size === 0) return false;
          if (f.size > MAX_IMAGE_SIZE) return false;
          if (!ALLOWED_IMAGE_TYPES.has(f.type)) return false;
          return true;
        })
        .slice(0, 5)
        .map(async (file) => ({
          filename: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        }))
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeServiceLabel = escapeHtml(serviceLabels[service] || service);

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0066CC; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Bluefin Air-Con &amp; Electrical</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${safeName}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${safePhone}</td>
            </tr>
            ${
              safeEmail
                ? `<tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${safeEmail}</td>
            </tr>`
                : ""
            }
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Service</td>
              <td style="padding: 8px 0;">
                <span style="background: #EFF6FF; color: #0066CC; padding: 2px 10px; border-radius: 100px; font-size: 13px; font-weight: 600;">
                  ${safeServiceLabel}
                </span>
              </td>
            </tr>
            ${
              safeMessage
                ? `<tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #374151; line-height: 1.6;">${safeMessage}</td>
            </tr>`
                : ""
            }
            ${
              attachments.length > 0
                ? `<tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Photos</td>
              <td style="padding: 8px 0; color: #111827;">${attachments.length} image${attachments.length !== 1 ? "s" : ""} attached</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
            <a href="tel:${safePhone}" style="display: inline-block; background: #FFD700; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
              Call ${safeName}
            </a>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Bluefin Website" <${process.env.SMTP_USER}>`,
      to: process.env.TOMMIE_EMAIL || "tommie@bluefinaircon.com.au",
      replyTo: email || undefined,
      subject: `New Quote Request from ${name} — ${serviceLabels[service] || service}`,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
