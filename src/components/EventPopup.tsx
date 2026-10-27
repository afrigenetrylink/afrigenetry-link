"use client";

import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Clock, X, ArrowUpRight } from "lucide-react";

const EVENT_URL = "https://www.eventbrite.com/e/dallas-community-dna-pop-up-tickets-1997639475446";
const EVENT_END = new Date("2026-11-15T00:00:00-06:00").getTime();

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [eventHasPassed, setEventHasPassed] = useState(false);

  useEffect(() => {
    // Show on each fresh page load until the event has passed. Dismissal is not persisted.
    const passed = Date.now() >= EVENT_END;
    setEventHasPassed(passed);
    if (passed) setIsOpen(false);
  }, []);

  if (!isOpen || eventHasPassed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#493226]/60 p-3 backdrop-blur-sm sm:p-6" role="presentation">
      <section
        aria-labelledby="agl-event-popup-title"
        aria-describedby="agl-event-popup-description"
        aria-modal="true"
        role="dialog"
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[#c6a05b]/50 bg-[#fffdf8] text-[#38251f] shadow-2xl"
      >

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close event announcement"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-[#493226] text-white shadow-md transition-colors duration-200 hover:bg-[#251813] focus:outline-none focus:ring-2 focus:ring-[#c6a05b] focus:ring-offset-2"
        >
          <X
            size={20}
            color="#FFFFFF"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </button>


        <div className="bg-[#755846] px-5 pb-7 pt-8 text-white sm:px-8 sm:pb-8 sm:pt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#e4c88f]">AfriGenetry Link invites you</p>
          <h2 id="agl-event-popup-title" className="max-w-xl pr-8 text-3xl font-semibold leading-tight sm:text-4xl">
            Dallas Community DNA Pop Up
          </h2>
          <p id="agl-event-popup-description" className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Explore heritage, ancestry, genealogy, family health history, wellness, culture, and community connection through an interactive experience.
          </p>
        </div>

        <div className="px-5 py-6 sm:px-8 sm:py-7">
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 shrink-0 text-[#98743b]" size={19} aria-hidden="true" />
              <div><p className="font-semibold">Saturday, November 14, 2026</p><p className="mt-1 text-[#6f5b50]">11:00 AM to 3:00 PM CST</p></div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-[#98743b]" size={19} aria-hidden="true" />
              <div><p className="font-semibold">The DEC Network at RedBird</p><p className="mt-1 leading-6 text-[#6f5b50]">3560 W. Camp Wisdom Rd., Dallas, TX 75237</p></div>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={EVENT_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c6a05b] px-6 py-3 text-center text-sm font-semibold text-[#251813] transition hover:bg-[#d8b875] focus:outline-none focus:ring-2 focus:ring-[#98743b] focus:ring-offset-2">
              Event details and registration <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <button type="button" onClick={() => setIsOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d8cfc3] px-6 py-3 text-sm font-semibold text-[#38251f] transition hover:bg-[#f7f3eb] focus:outline-none focus:ring-2 focus:ring-[#98743b] focus:ring-offset-2">
              Continue to website
            </button>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#6f5b50]">The announcement will appear again on your next visit until the event has passed.</p>
        </div>
      </section>
    </div>
  );
}
