import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";
import { getGallery, saveGallery, GalleryItem } from "@/lib/content";

export const runtime = "nodejs";

async function isAdmin(req: NextRequest, res: NextResponse): Promise<boolean> {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  return !!session.isAdmin;
}

export async function GET(req: NextRequest) {
  const res = NextResponse.json(getGallery());
  if (!(await isAdmin(req, res))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(getGallery());
}

export async function PUT(req: NextRequest) {
  const res = NextResponse.next();
  if (!(await isAdmin(req, res))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const items: GalleryItem[] = await req.json();
  saveGallery(items);
  return NextResponse.json({ ok: true });
}
