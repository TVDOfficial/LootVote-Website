'use client';

import { motion } from 'framer-motion';

const voteSites = [
  {
    name: 'LootVote.com',
    url: 'https://www.lootvote.com/server/67abef74-f665-4cac-925e-38c2fb4b0e98',
    icon: '⭐',
  },
  { name: 'Minecraft-MP', url: '#', icon: '🎮' },
  { name: 'PlanetMinecraft', url: '#', icon: '🌍' },
  { name: 'TopG', url: '#', icon: '🏆' },
  { name: 'MinecraftServers.org', url: '#', icon: '🖥️' },
];

const rewards = [
  { votes: '1 Vote', reward: 'Vote Key + $500' },
  { votes: '5 Votes', reward: 'Rare Vote Crate' },
  { votes: '30 Votes', reward: 'Epic Monthly Crate' },
  { votes: '100 Votes', reward: 'Legendary Rewards' },
];

export default function VotePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Vote for <span className="text-amber-500">LootVote</span>
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Help us grow by voting daily! Each vote earns you in-game rewards.
          </p>
        </motion.div>

        {/* Vote Sites */}
        <div className="space-y-3 mb-12">
          {voteSites.map((site, i) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-2xl flex-shrink-0">
                {site.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm">{site.name}</h3>
              </div>
              <span className="text-amber-500 text-sm font-medium group-hover:text-amber-400 transition-colors">
                Vote →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Vote <span className="text-emerald-500">Rewards</span>
          </h2>
          <p className="text-zinc-400 text-sm">The more you vote, the better the rewards!</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {rewards.map((r, i) => (
            <motion.div
              key={r.votes}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-center"
            >
              <div className="font-['Press_Start_2P'] text-amber-500 text-[10px] mb-2">{r.votes}</div>
              <p className="text-zinc-300 text-xs">{r.reward}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
