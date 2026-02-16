'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#060612] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-[var(--font-pixel)] text-lg text-[var(--gold)] mb-3">LootVote</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              A premium Minecraft Towny server with mcMMO, a player-driven economy, quests, and cross-play support for Java &amp; Bedrock.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Server Online</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm">Home</Link>
              <Link href="/vote" className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm">Vote</Link>
              <Link href="/store" className="text-gray-500 hover:text-[var(--gold)] transition-colors text-sm">Store</Link>
            </div>
          </div>

          {/* External */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Community</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-500 hover:text-[var(--cyan)] transition-colors text-sm">Discord</a>
              <a href="https://mcstore.lootvote.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--cyan)] transition-colors text-sm">Store</a>
              <a href="https://www.lootvote.com/server/67abef74-f665-4cac-925e-38c2fb4b0e98" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--cyan)] transition-colors text-sm">Vote</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} LootVote. Not affiliated with Mojang Studios.
          </p>
          <p className="text-gray-700 text-xs">
            play.lootvote.com
          </p>
        </div>
      </div>
    </footer>
  );
}
