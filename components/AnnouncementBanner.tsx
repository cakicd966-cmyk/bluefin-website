"use client";

import { useState, useEffect } from "react";
import { X, Megaphone } from "lucide-react";
import type { AnnouncementBanner } from "@/lib/content";

const BG_STYLES: Record<AnnouncementBanner["bgColor"], { bg: string; text: string; border: string; btn: string }> = {
  gold:     { bg: "#f5c518", text: "#1a0e00", border: "#d4a800", btn: "rgba(0,0,0,.15)" },
  electric: { bg: "#1e90ff", text: "#ffffff", border: "#0070e0", btn: "rgba(255,255,255,.2)" },
  red:      { bg: "#ef4444", text: "#ffffff", border: "#dc2626", btn: "rgba(255,255,255,.2)" },
  green:    { bg: "#22c55e", text: "#052e16", border: "#16a34a", btn: "rgba(0,0,0,.12)" },
};

const DISMISS_KEY = "bluefin_banner_dismissed";

export default function AnnouncementBanner({ banner }: { banner: AnnouncementBanner }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY) !== banner.message) {
      setVisible(true);
    }
  }, [banner.message]);

  if (!banner.enabled || !visible) return null;

  const styles = BG_STYLES[banner.bgColor] ?? BG_STYLES.gold;

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, banner.message);
  };

  return (
    <div
      style={{
        background: styles.bg,
        borderBottom: `1px solid ${styles.border}`,
        color: styles.text,
        padding: ".55rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: ".6rem",
        position: "relative",
        zIndex: 60,
      }}
    >
      <Megaphone size={15} style={{ flexShrink: 0, opacity: 0.75 }} />
      <p style={{ fontSize: ".82rem", fontWeight: 600, textAlign: "center", lineHeight: 1.4, fontFamily: "var(--font-outfit, sans-serif)" }}>
        {banner.message}
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: styles.btn,
          border: "none",
          borderRadius: ".35rem",
          padding: ".25rem",
          cursor: "pointer",
          color: styles.text,
          display: "flex",
          alignItems: "center",
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
