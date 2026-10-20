
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUp size={22} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
