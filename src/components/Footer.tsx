'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold text-xs">
              L
            </div>
            <span className="font-['Press_Start_2P'] text-amber-500 text-[10px]">
              LootVote
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/vote" className="hover:text-white transition-colors">Vote</Link>
            <Link href="/store" className="hover:text-white transition-colors">Store</Link>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-xs">
            © 2025 LootVote
          </p>
        </div>
      </div>
    </footer>
  );
}
