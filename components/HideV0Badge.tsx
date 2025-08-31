"use client";
import { useEffect } from "react";

export default function HideV0Badge() {
  useEffect(() => {
    const remove = () => {
      document
        .querySelectorAll(
          'a[href*="v0.dev"], a[href*="v0.app"], .v0-badge, [data-v0-badge], a[title*="v0"]'
        )
        .forEach((el) => el instanceof HTMLElement && el.remove());
    };

    // remove now
    remove();

    // remove if injected later
    const mo = new MutationObserver(remove);
    mo.observe(document.documentElement, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  return null;
}
