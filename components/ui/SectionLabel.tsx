import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#9f3c16] animate-pulse" />
      <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#9f3c16] font-sans">
        {children}
      </span>
    </div>
  );
}