import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/lib/session";
import { getSettings, saveSettings, SiteSettings } from "@/lib/content";

export const runtime = "nodejs";

async function isAdmin(req: NextRequest, res: NextResponse): Promise<boolean> {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  return !!session.isAdmin;
}

export async function GET(req: NextRequest) {
  const res = NextResponse.next();
  if (!(await isAdmin(req, res))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(getSettings());
}

export async function PUT(req: NextRequest) {
  const res = NextResponse.next();
  if (!(await isAdmin(req, res))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const settings: SiteSettings = await req.json();
  saveSettings(settings);
  return NextResponse.json({ ok: true });
}
