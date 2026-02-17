'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CopyIP from '@/components/CopyIP';
import ServerStatus from '@/components/ServerStatus';
import StatsSection from '@/components/StatsSection';

function PlayNowButton() {
  const handleClick = () => {
    navigator.clipboard.writeText('lootvote.com');
  };
  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#FFD700]/20"
    >
      Play Now
    </button>
  );
}

const features = [
  {
    icon: '🏛️',
    title: 'Civilization Building',
    subtext: 'Create towns, form nations, manage economies. 8 town levels from Settlement to Metropolis.',
  },
  {
    icon: '💰',
    title: 'Player-Driven Market',
    subtext: '12 professions, player auctions, daily quests, and a thriving marketplace.',
  },
  {
    icon: '⚔️',
    title: '500+ RPG Quests',
    subtext: 'Progress through blacksmithing, building, hunting, and mining chains.',
  },
  {
    icon: '✨',
    title: 'Customize Your Style',
    subtext: '71+ furniture pieces, pets, mounts, gadgets, and exclusive tool skins.',
  },
];

const townLevels = [
  'Settlement',
  'Hamlet',
  'Village',
  'Town',
  'Large Town',
  'City',
  'Large City',
  'Metropolis',
];

const crates = [
  { name: 'Common Crate', votes: 1, icon: '📦', color: 'from-zinc-500' },
  { name: 'Rare Crate', votes: 3, icon: '🎁', color: 'from-blue-500' },
  { name: 'Epic Crate', votes: 5, icon: '💎', color: 'from-purple-500' },
  { name: 'Superior Crate', votes: 7, icon: '👑', color: 'from-[#FFD700]' },
];

const ranks = [
  { name: 'Noble', price: '$4.99', color: 'White' },
  { name: 'Knight', price: '$9.99', color: 'Gray' },
  { name: 'Baron', price: '$19.99', color: 'Blue' },
  { name: 'Count', price: '$39.99', color: 'Green' },
  { name: 'Duke', price: '$69.99', color: 'Gold' },
  { name: 'King', price: '$99.99', color: 'Red' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0d1a24] to-[#1A1A1A]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00BFFF]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crossword.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
              <span className="text-zinc-400 text-sm font-medium">Public BETA</span>
            </div>

            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center text-[#1A1A1A] font-minecraft text-2xl shadow-xl shadow-[#FFD700]/20">
              LV
            </div>

            <h1 className="font-minecraft text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-wide">
              Welcome to LootVote
            </h1>
            <p className="text-xl md:text-2xl text-[#00BFFF] font-bold mb-2">
              A Premium Towny RPG Experience
            </p>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Build. Trade. Conquer.
            </p>

            <div className="flex flex-col items-center gap-6 mb-8">
              <CopyIP />
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-xl glass text-sm font-medium text-zinc-300">
                  Java 1.21.4
                </span>
                <span className="px-4 py-2 rounded-xl glass text-sm font-medium text-zinc-300">
                  Bedrock Supported
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <PlayNowButton />
                <a
                  href="#"
                  className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/10 glass-darker"
        >
          <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm">
            <ServerStatus />
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-500">Total Towns</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-500">Active Nations</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-500">Uptime</span>
          </div>
        </motion.div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why LootVote?
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Every feature is crafted for a balanced, engaging, and professional experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass border border-white/5 hover:border-[#FFD700]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#00BFFF]/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Towny Experience */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-minecraft">
              The Towny Experience
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Create towns, form nations, and build your empire from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            <div className="p-6 rounded-2xl glass border border-white/5">
              <h3 className="text-[#FFD700] font-bold mb-4">🏠 Town Creation</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>$5,000 to establish</li>
                <li>16 plots starting</li>
                <li>Up to 448 plots max</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl glass border border-white/5">
              <h3 className="text-[#00BFFF] font-bold mb-4">🌍 Nations</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>$250,000 to form</li>
                <li>Political ranks: Count → King → Emperor</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl glass border border-white/5">
              <h3 className="text-emerald-500 font-bold mb-4">💵 Economy</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>12 professions</li>
                <li>Auction House active</li>
                <li>Daily quest rewards</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass border border-white/5 overflow-x-auto"
          >
            <p className="text-zinc-500 text-sm mb-4 font-medium">Progression Path</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {townLevels.map((level, i) => (
                <span
                  key={level}
                  className="px-4 py-2 rounded-xl bg-white/5 text-zinc-400 text-sm font-medium"
                >
                  {level}
                  {i < townLevels.length - 1 && (
                    <span className="ml-2 text-[#FFD700]">→</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <StatsSection />

      {/* Vote & Rewards */}
      <section id="vote" className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vote & Earn Rewards
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-8">
              Vote for LootVote and unlock exclusive crates. The more you vote, the better the loot.
            </p>
            <Link
              href="/vote"
              className="inline-block px-8 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
            >
              Vote Now
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {crates.map((crate, i) => (
              <motion.div
                key={crate.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border border-white/5 text-center hover:border-[#FFD700]/30 transition-all"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${crate.color} to-black/30 flex items-center justify-center text-3xl`}
                >
                  {crate.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{crate.name}</h3>
                <p className="text-[#FFD700] text-sm font-medium">Vote {crate.votes}x</p>
                <p className="text-zinc-500 text-xs mt-2">Preview rewards</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Preview */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support the Server
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-8">
              Unlock exclusive ranks, perks, and cosmetics. All transactions are secure via Tebex.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl glass border border-white/5 p-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 min-w-[600px]">
              {ranks.map((rank) => (
                <div
                  key={rank.name}
                  className="p-4 rounded-xl bg-white/5 text-center border border-white/5 hover:border-[#FFD700]/30 transition-all"
                >
                  <p className="text-[#FFD700] font-bold text-sm mb-1">{rank.name}</p>
                  <p className="text-zinc-400 text-xs mb-2">{rank.color}</p>
                  <p className="text-white font-bold">{rank.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://lootvote.buycraft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
              >
                Visit Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden p-12 md:p-16 text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#00BFFF]/10 z-0" />
            <div className="absolute inset-0 glass z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Community
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                Connect on Discord, stay updated on events, and chat with fellow players.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold transition-all hover:scale-105"
                >
                  Join Discord
                </a>
                <a href="#" className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all">
                  Twitter / X
                </a>
                <a href="#" className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all">
                  YouTube
                </a>
                <a href="#" className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all">
                  TikTok
                </a>
              </div>
              <p className="text-zinc-500 text-sm mt-8">Recent announcements will appear here.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
