
"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  MapPin,
  X,
  ArrowUpRight,
} from "lucide-react";

const EVENT_URL =
  "https://www.eventbrite.com/e/dallas-community-dna-pop-up-tickets-1997639475446";

const EVENT_END = new Date("2026-11-15T00:00:00-06:00").getTime();

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [eventHasPassed, setEventHasPassed] = useState(false);

  useEffect(() => {
    const passed = Date.now() >= EVENT_END;

    setEventHasPassed(passed);

    if (passed) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen || eventHasPassed) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, eventHasPassed]);

  if (!isOpen || eventHasPassed) return null;

  const closePopup = () => setIsOpen(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-[#493226]/60 p-3 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
    >
      <section
        aria-labelledby="agl-event-popup-title"
        aria-describedby="agl-event-popup-description"
        aria-modal="true"
        role="dialog"
        className="relative my-auto w-full max-w-2xl min-w-0 overflow-hidden rounded-2xl border border-[#c6a05b]/50 bg-[#fffdf8] text-[#38251f] shadow-2xl"
      >
        {/* Header */}
        <div className="relative bg-[#755846] px-5 pb-7 pt-16 text-white sm:px-8 sm:pb-8 sm:pt-10">
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close event announcement"
            title="Close announcement"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-[#493226] text-white shadow-md transition-colors duration-200 hover:bg-[#251813] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a05b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#755846] sm:right-5 sm:top-5"
          >
            <X size={21} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <p className="mb-3 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#e4c88f] sm:tracking-[0.2em]">
            AfriGenetry Link invites you
          </p>

          <h2
            id="agl-event-popup-title"
            className="max-w-xl break-words text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Dallas Community DNA Pop Up
          </h2>

          <p
            id="agl-event-popup-description"
            className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7"
          >
            Explore heritage, ancestry, genealogy, family health history,
            wellness, culture, and community connection through an
            interactive experience.
          </p>
        </div>

        {/* Event information */}
        <div className="px-5 py-6 sm:px-8 sm:py-7">
          <div className="grid min-w-0 gap-5 text-sm sm:grid-cols-2 sm:gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <CalendarDays
                className="mt-0.5 shrink-0 text-[#98743b]"
                size={20}
                aria-hidden="true"
              />

              <div className="min-w-0">
                <p className="break-words font-semibold leading-6">
                  Saturday, November 14, 2026
                </p>
                <p className="mt-1 leading-6 text-[#6f5b50]">
                  11:00 AM to 3:00 PM CST
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-start gap-3">
              <MapPin
                className="mt-0.5 shrink-0 text-[#98743b]"
                size={20}
                aria-hidden="true"
              />

              <div className="min-w-0">
                <p className="break-words font-semibold leading-6">
                  The DEC Network at RedBird
                </p>
                <p className="mt-1 break-words leading-6 text-[#6f5b50]">
                  3560 W. Camp Wisdom Rd., Dallas, TX 75237
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#c6a05b] px-5 py-3 text-center text-sm font-semibold leading-5 text-[#251813] transition-colors hover:bg-[#d8b875] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98743b] focus-visible:ring-offset-2 sm:w-auto sm:px-6"
            >
              <span>Event details and registration</span>
              <ArrowUpRight
                size={17}
                className="shrink-0"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={closePopup}
              className="inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-full border border-[#d8cfc3] px-5 py-3 text-center text-sm font-semibold leading-5 text-[#38251f] transition-colors hover:bg-[#f7f3eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98743b] focus-visible:ring-offset-2 sm:w-auto sm:px-6"
            >
              Continue to website
            </button>
          </div>

          <p className="mt-4 text-xs leading-5 text-[#6f5b50]">
            The announcement will appear again on your next visit until the
            event has passed.
          </p>
        </div>
      </section>
    </div>
  );
}
