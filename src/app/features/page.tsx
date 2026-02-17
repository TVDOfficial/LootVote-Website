'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const townLevels = [
  { level: 'Settlement', plots: 16, cost: '$5,000' },
  { level: 'Hamlet', plots: 32, cost: '—' },
  { level: 'Village', plots: 64, cost: '—' },
  { level: 'Town', plots: 96, cost: '—' },
  { level: 'Large Town', plots: 128, cost: '—' },
  { level: 'City', plots: 256, cost: '—' },
  { level: 'Large City', plots: 320, cost: '—' },
  { level: 'Metropolis', plots: 448, cost: '—' },
];

const mechanics = [
  {
    icon: '🏠',
    title: 'Town Creation',
    items: [
      '$5,000 to establish your town',
      '16 plots to start',
      'Up to 448 plots at Metropolis',
      'Full mayor control over plots and residents',
    ],
  },
  {
    icon: '🌍',
    title: 'Nations',
    items: [
      '$250,000 to form a nation',
      'Political ranks: Count → King → Emperor',
      'Nation-wide bonuses and protections',
      'Diplomatic relations and alliances',
    ],
  },
  {
    icon: '💵',
    title: 'Economy',
    items: [
      '12 professions to master',
      'Player-run Auction House',
      'Daily quest rewards',
      'Thriving player marketplace',
    ],
  },
  {
    icon: '⚔️',
    title: 'Quests & Progression',
    items: [
      '500+ RPG quests',
      'Blacksmithing, building, hunting, mining chains',
      'Exclusive rewards and cosmetics',
      'Progressive difficulty scaling',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
            Features & Game Modes
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Discover everything LootVote has to offer. A detailed guide to our Towny experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="gamemodes"
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-minecraft">
            The Towny Experience
          </h2>
          <p className="text-zinc-400 mb-12 leading-relaxed">
            LootVote is built around the Towny plugin, offering a deep civilization-building experience.
            Create towns, form nations, and conquer territory in a living, breathing world. Every decision
            you make shapes your legacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanics.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border border-white/5"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#00BFFF]/20 flex items-center justify-center text-3xl mb-4">
                  {m.icon}
                </div>
                <h3 className="text-[#FFD700] font-bold text-lg mb-4">{m.title}</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#00BFFF]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-minecraft">
            Town Progression Path
          </h2>
          <div className="overflow-x-auto rounded-2xl glass border border-white/5">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-zinc-400 font-medium">Level</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-medium">Max Plots</th>
                  <th className="text-left py-4 px-6 text-zinc-400 font-medium">Upgrade Cost</th>
                </tr>
              </thead>
              <tbody>
                {townLevels.map((t) => (
                  <tr key={t.level} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-white font-medium">{t.level}</td>
                    <td className="py-4 px-6 text-zinc-400">{t.plots}</td>
                    <td className="py-4 px-6 text-zinc-400">{t.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Build Your Empire?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold transition-all hover:scale-105"
            >
              Join Server
            </Link>
            <Link
              href="/store"
              className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all"
            >
              Visit Store
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
