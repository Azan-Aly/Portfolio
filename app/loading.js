export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen bg-white dark:bg-[#11001F] overflow-hidden"
    >
      <span className="sr-only">Loading content, please wait...</span>

      {/* ── Skeleton Navbar ── */}
      <nav className="w-full px-5 lg:px-8 xl:px-[4%] py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="ml-6 h-9 w-24 rounded-lg skeleton" />

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-10 py-3 border border-slate-200/60 dark:border-slate-700/40">
          <div className="h-3 w-12 rounded-full skeleton" />
          <div className="h-3 w-16 rounded-full skeleton" />
          <div className="h-3 w-14 rounded-full skeleton" />
          <div className="h-3 w-16 rounded-full skeleton" />
          <div className="h-3 w-18 rounded-full skeleton" />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 lg:w-32 rounded-full skeleton" />
          <div className="h-9 w-9 rounded-full skeleton" />
        </div>
      </nav>

      {/* ── Skeleton Header / Hero ── */}
      <div className="w-11/12 max-w-3xl mx-auto pt-16 sm:pt-20 pb-8 flex flex-col items-center justify-center gap-4">
        {/* Profile photo */}
        <div className="h-36 w-36 rounded-full skeleton" />

        {/* Greeting line */}
        <div className="flex items-center gap-2 mt-2">
          <div className="h-5 w-56 sm:w-72 rounded-full skeleton" />
          <div className="h-5 w-5 rounded skeleton" />
        </div>

        {/* Big heading */}
        <div className="flex flex-col items-center gap-3 mt-1 w-full">
          <div className="h-8 sm:h-12 w-[90%] sm:w-[85%] rounded-xl skeleton" />
          <div className="h-8 sm:h-12 w-[70%] sm:w-[60%] rounded-xl skeleton" />
        </div>

        {/* Paragraph */}
        <div className="flex flex-col items-center gap-2 mt-2 w-full max-w-2xl">
          <div className="h-3.5 w-[95%] rounded-full skeleton" />
          <div className="h-3.5 w-[88%] rounded-full skeleton" />
          <div className="h-3.5 w-[70%] rounded-full skeleton" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <div className="h-11 w-40 rounded-full skeleton" />
          <div className="h-11 w-40 rounded-full skeleton-outline" />
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-5">
          <div className="h-8 w-8 rounded-full skeleton" />
          <div className="h-8 w-8 rounded-full skeleton" />
          <div className="h-8 w-8 rounded-full skeleton" />
          <div className="h-8 w-8 rounded-full skeleton" />
          <div className="h-8 w-8 rounded-full skeleton" />
        </div>
      </div>
    </div>
  );
}