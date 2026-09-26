import React from 'react';

export default function TopInfoBar() {
  return (
    <div className="bg-[#ebe8e2] text-[#57423b] border-b border-[#e5e2dc]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider font-sans">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9f3c16] animate-pulse" />
          <span>OPEN DAILY: 10:00 AM – 1:00 AM • TALAGANG HWY, CHAKWAL</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[#57423b]">
          <span>CALL / WHATSAPP: 0318 5600123 • TALAGANG HWY ROUTE</span>
        </div>
      </div>
    </div>
  );
}