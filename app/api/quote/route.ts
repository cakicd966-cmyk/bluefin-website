import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = (formData.get("email") as string) || "";
    const service = (formData.get("service") as string) || "Not specified";
    const message = (formData.get("message") as string) || "";
    const imageFiles = formData.getAll("images") as File[];

    const serviceLabels: Record<string, string> = {
      "ac-install": "Air Con Installation",
      "ac-service": "Air Con Servicing / Repairs",
      electrical: "Electrical Work",
      emergency: "Emergency Callout",
      other: "Other / Not Sure",
    };

    // Convert image files to nodemailer attachments
    const attachments = await Promise.all(
      imageFiles
        .filter((f) => f.size > 0)
        .map(async (file) => ({
          filename: file.name,
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

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0066CC; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Bluefin Air-Con & Electrical</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${phone}</td>
            </tr>
            ${
              email
                ? `<tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${email}</td>
            </tr>`
                : ""
            }
            <tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Service</td>
              <td style="padding: 8px 0;">
                <span style="background: #EFF6FF; color: #0066CC; padding: 2px 10px; border-radius: 100px; font-size: 13px; font-weight: 600;">
                  ${serviceLabels[service] || service}
                </span>
              </td>
            </tr>
            ${
              message
                ? `<tr style="border-top: 1px solid #f3f4f6;">
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
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
            <a href="tel:${phone}" style="display: inline-block; background: #FFD700; color: #111827; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
              Call ${name}
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
