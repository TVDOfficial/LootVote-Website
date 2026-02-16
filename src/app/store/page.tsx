'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Ranks',
    desc: 'Unlock perks, commands, and exclusive abilities.',
    icon: '👑',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    name: 'Crates',
    desc: 'Mystery crates with rare items and rewards.',
    icon: '📦',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Cosmetics',
    desc: 'Stand out with trails, particles, and more.',
    icon: '✨',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function StorePage() {
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
            Server <span className="neon-gold">Store</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed mb-6">
            Support the server and unlock exclusive perks, ranks, and cosmetics.
          </p>
          <motion.a
            href="https://mcstore.lootvote.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Open Store
          </motion.a>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="https://mcstore.lootvote.com"
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass-card p-5 text-center"
            >
              <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl`}>
                {cat.icon}
              </div>
              <h3 className="font-[var(--font-pixel)] text-xs text-[var(--gold)] mb-2">{cat.name}</h3>
              <p className="text-gray-400 text-xs">{cat.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Trust info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="rounded-xl p-[1px] bg-gradient-to-r from-[var(--gold)]/50 to-[var(--cyan)]/50">
            <div className="bg-[#0d0d2b] rounded-xl p-5">
              <p className="text-gray-400 text-xs leading-relaxed">
                🔒 All transactions are processed securely through <strong className="text-white">Tebex</strong>.
                <br />
                Your payment info is never stored on our servers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
