import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0d1a24] to-[#1A1A1A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BFFF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        <div className="font-minecraft text-[120px] md:text-[160px] leading-none text-[#FFD700]/20 select-none">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 -mt-8">
          Block Not Found
        </h1>
        <p className="text-zinc-500 max-w-md mx-auto mb-8">
          This page seems to have been mined away. Return to spawn and try again.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold transition-all hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
