import { SessionOptions } from "iron-session";

export interface SessionData {
  isAdmin?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.ADMIN_SESSION_SECRET || "change-this-to-a-long-random-secret-at-least-32-chars",
  cookieName: "bluefin-admin-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};
