import React from 'react';
import SectionLabel from './SectionLabel';

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="flex flex-col items-start gap-2 bg-[#f6f3ed] p-6 rounded-xl border border-[#e5e2dc]">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1c18]">
        {title}
      </h1>
      {description && (
        <p className="text-sm sm:text-base text-[#57423b] max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}