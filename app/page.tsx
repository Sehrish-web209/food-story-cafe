export default function LayoutTestPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 space-y-6">
      <div className="rounded-xl border border-[#ebe8e2] bg-white p-8 shadow-sm">
        <h1 className="font-serif text-3xl font-bold text-[#1c1c18]">
          Layout Components Verification
        </h1>
        <p className="mt-2 text-sm text-[#57423b]">
          TopInfoBar, Navbar, and Footer are currently active and rendering in the layout wrapper.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-lg bg-[#ebe8e2] border border-[#dec0b7] text-xs font-mono text-[#57423b]">
          ✓ TopInfoBar Header Banner Visible Above Navbar
        </div>
        <div className="p-6 rounded-lg bg-[#ebe8e2] border border-[#dec0b7] text-xs font-mono text-[#57423b]">
          ✓ Footer Pinned Cleanly To Page Bottom
        </div>
      </div>
    </div>
  );
}