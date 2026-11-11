
"use client";

import { usePathname } from "next/navigation";
import EventPopup from "@/components/EventPopup";

export default function EventPopupGuard() {
  const pathname = usePathname();

  // Never display the website event popup inside Sanity Studio.
  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return <EventPopup />;
}
