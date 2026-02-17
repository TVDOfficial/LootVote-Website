'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const voteSites = [
  {
    name: 'LootVote.com',
    url: 'https://www.lootvote.com/server/67abef74-f665-4cac-925e-38c2fb4b0e98',
    icon: '⭐',
  },
  { name: 'Minecraft-MP', url: 'https://minecraft-mp.com', icon: '🎮' },
  { name: 'PlanetMinecraft', url: 'https://www.planetminecraft.com', icon: '🌍' },
  { name: 'TopG', url: 'https://topg.org', icon: '🏆' },
  { name: 'MinecraftServers.org', url: 'https://minecraftservers.org', icon: '🖥️' },
];

const crates = [
  {
    name: 'Common Crate',
    votes: 1,
    icon: '📦',
    color: 'from-zinc-500 to-zinc-700',
    rewards: ['Vote Key', '$500 coins', 'Common loot'],
  },
  {
    name: 'Rare Crate',
    votes: 3,
    icon: '🎁',
    color: 'from-blue-500 to-blue-700',
    rewards: ['Rare items', 'Exclusive cosmetics', 'Boost tokens'],
  },
  {
    name: 'Epic Crate',
    votes: 5,
    icon: '💎',
    color: 'from-purple-500 to-purple-700',
    rewards: ['Epic gear', 'Pet skins', 'Premium keys'],
  },
  {
    name: 'Superior Crate',
    votes: 7,
    icon: '👑',
    color: 'from-[#FFD700] to-amber-600',
    rewards: ['Legendary rewards', 'Exclusive mounts', 'Rare titles'],
  },
];

export default function VotePage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
            Vote for LootVote
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Vote for your favorite Minecraft server and unlock exclusive in-game loot rewards.
            Compatible with Votifier, NuVotifier, HyVotifier, and SimpleVotifier.
          </p>
        </motion.div>

        {/* Vote Sites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Vote on These Sites</h2>
          <div className="space-y-3">
            {voteSites.map((site, i) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-[#FFD700]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
                  {site.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold">{site.name}</h3>
                </div>
                <span className="text-[#FFD700] text-sm font-bold group-hover:text-[#FFE44D] transition-colors">
                  Vote →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Crates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Vote Rewards by Tier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br ${crate.color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {crate.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{crate.name}</h3>
                <p className="text-[#FFD700] font-bold mb-4">Vote {crate.votes}x</p>
                <ul className="space-y-1 text-zinc-500 text-sm">
                  {crate.rewards.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass border border-white/5 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Top Voters</h2>
          <p className="text-zinc-500 mb-6">
            Monthly and all-time leaderboards. Vote daily to climb the ranks!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 rounded-xl bg-[#FFD700]/20 text-[#FFD700] font-bold text-sm">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-xl glass text-zinc-400 font-medium text-sm hover:text-white">
              All-time
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
