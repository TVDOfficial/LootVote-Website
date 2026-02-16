'use client';

import { motion } from 'framer-motion';

const voteSites = [
  {
    name: 'LootVote.com',
    url: 'https://www.lootvote.com/server/67abef74-f665-4cac-925e-38c2fb4b0e98',
    icon: '⭐',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'hover:border-yellow-500/30',
  },
  {
    name: 'Minecraft-MP',
    url: '#',
    icon: '🎮',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'hover:border-green-500/30',
  },
  {
    name: 'PlanetMinecraft',
    url: '#',
    icon: '🌍',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/30',
  },
  {
    name: 'TopG',
    url: '#',
    icon: '🏆',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'hover:border-purple-500/30',
  },
  {
    name: 'MinecraftServers.org',
    url: '#',
    icon: '🖥️',
    color: 'from-red-500/20 to-orange-500/20',
    border: 'hover:border-red-500/30',
  },
];

const rewards = [
  { amount: '1 Vote', reward: 'Vote Key + $500 in-game' },
  { amount: '5 Votes', reward: 'Rare Vote Crate' },
  { amount: '30 Votes', reward: 'Epic Monthly Crate' },
  { amount: '100 Votes', reward: 'Legendary Rewards' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function VotePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-[var(--font-pixel)] text-3xl md:text-4xl text-white mb-4">
            Vote for <span className="neon-gold">LootVote</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Help us grow by voting daily! Each vote earns you in-game rewards including keys, money, and exclusive items.
          </p>
        </motion.div>

        {/* Vote Sites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {voteSites.map((site, i) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`glass-card p-6 flex flex-col items-center text-center gap-3 ${site.border}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${site.color} flex items-center justify-center text-3xl`}>
                {site.icon}
              </div>
              <h3 className="text-white font-semibold">{site.name}</h3>
              <span className="btn-gold !py-2 !px-6 !text-[0.55rem] inline-block">
                Vote Now
              </span>
            </motion.a>
          ))}
        </div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-[var(--font-pixel)] text-xl md:text-2xl text-white mb-4">
            Vote <span className="neon-cyan">Rewards</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10">
            The more you vote, the better the rewards. Vote on all sites daily to maximize your earnings!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rewards.map((r, i) => (
            <motion.div
              key={r.amount}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 text-center"
            >
              <div className="font-[var(--font-pixel)] text-[var(--gold)] text-xs mb-2">{r.amount}</div>
              <p className="text-gray-300 text-sm">{r.reward}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
