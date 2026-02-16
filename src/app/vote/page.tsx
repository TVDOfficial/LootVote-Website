'use client';

import { motion } from 'framer-motion';

const voteSites = [
  {
    name: 'LootVote.com',
    url: 'https://www.lootvote.com/server/67abef74-f665-4cac-925e-38c2fb4b0e98',
    icon: '⭐',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    name: 'Minecraft-MP',
    url: '#',
    icon: '🎮',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'PlanetMinecraft',
    url: '#',
    icon: '🌍',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'TopG',
    url: '#',
    icon: '🏆',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'MinecraftServers.org',
    url: '#',
    icon: '🖥️',
    color: 'from-red-500/20 to-orange-500/20',
  },
];

const rewards = [
  { amount: '1 Vote', reward: 'Vote Key + $500' },
  { amount: '5 Votes', reward: 'Rare Vote Crate' },
  { amount: '30 Votes', reward: 'Epic Monthly Crate' },
  { amount: '100 Votes', reward: 'Legendary Rewards' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function VotePage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="font-[var(--font-pixel)] text-lg sm:text-xl text-white mb-3">
            Vote for <span className="neon-gold">LootVote</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Help us grow by voting daily! Each vote earns you in-game rewards.
          </p>
        </motion.div>

        {/* Vote Sites */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
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
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${site.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {site.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm mb-1">{site.name}</h3>
                <span className="text-[var(--gold)] text-xs font-medium">Vote Now →</span>
              </div>
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
          <h2 className="font-[var(--font-pixel)] text-base text-white mb-2">
            Vote <span className="neon-cyan">Rewards</span>
          </h2>
          <p className="text-gray-500 text-sm">
            The more you vote, the better the rewards!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {rewards.map((r, i) => (
            <motion.div
              key={r.amount}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-4 text-center"
            >
              <div className="font-[var(--font-pixel)] text-[var(--gold)] text-[10px] mb-1">{r.amount}</div>
              <p className="text-gray-300 text-xs">{r.reward}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
