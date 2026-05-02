import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";
import { writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

async function isAdmin(req: NextRequest, res: NextResponse): Promise<boolean> {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  return !!session.isAdmin;
}

export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  if (!(await isAdmin(req, res))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
  if (!ALLOWED_TYPES.has(file.type)) return NextResponse.json({ error: "Only JPG, PNG, or WebP allowed" }, { status: 400 });
  if (file.size > MAX_SIZE) return NextResponse.json({ error: "File must be under 5MB" }, { status: 400 });

  const ext = file.type === "image/png" ? ".png" : file.type === "image/webp" ? ".webp" : ".jpg";
  const filename = `gallery-${Date.now()}${ext}`;
  const uploadPath = path.join(process.cwd(), "public", "uploads", filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(uploadPath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
