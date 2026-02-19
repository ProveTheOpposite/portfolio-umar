export default function Loading() {
  return (
    <div className="bg-background fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Logo / Initials */}
        <div className="relative">
          <span className="text-foreground font-serif text-4xl font-medium tracking-tight">
            UK
          </span>
          {/* Underline animation */}
          <div className="absolute -bottom-2 left-0 h-0.5 w-full overflow-hidden">
            <div className="bg-foreground h-full w-full origin-left animate-[loading-line_1.2s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Loading bar */}
        <div className="bg-border h-px w-48 overflow-hidden rounded-full">
          <div className="bg-foreground/60 h-full w-full origin-left animate-[loading-bar_1.4s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loading-line {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.01% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
