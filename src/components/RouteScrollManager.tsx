"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Corrects route scroll position after App Router transitions.
 * The navbar is sticky, so Next.js can treat that visible element as a reason
 * to preserve the previous scroll position. This manager makes page routes
 * start at the top, while preserving links that point to a section by hash.
 */
export default function RouteScrollManager() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    let firstFrame = 0;
    let secondFrame = 0;

    const resetDestinationScroll = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      const hash = window.location.hash;
      if (hash) {
        let targetId = hash.slice(1);
        try {
          targetId = decodeURIComponent(targetId);
        } catch {
          // Keep the original hash if the URL contains malformed encoding.
        }

        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        root.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      // Restore the stylesheet setting after the immediate scroll is applied.
      window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousBehavior;
      });
    };

    // Wait until the destination route has rendered and Next's own scroll
    // handling has completed, then apply the destination's intended position.
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(resetDestinationScroll);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  return null;
}
