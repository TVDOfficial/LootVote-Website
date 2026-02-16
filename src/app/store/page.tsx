'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Ranks',
    desc: 'Unlock perks, commands, and exclusive abilities with premium ranks.',
    icon: '👑',
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    name: 'Crates',
    desc: 'Mystery crates with rare items, gear, and special rewards.',
    icon: '📦',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Cosmetics',
    desc: 'Stand out with custom trails, particles, and chat colors.',
    icon: '✨',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function StorePage() {
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
            Server <span className="neon-gold">Store</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Support the server and unlock exclusive perks, ranks, and cosmetics. All purchases go directly towards server costs and improvements.
          </p>
          <motion.a
            href="https://mcstore.lootvote.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold inline-block !text-[0.65rem] !py-4 !px-10"
          >
            Open Store
          </motion.a>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card p-8 text-center group cursor-pointer"
            >
              <div className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="font-[var(--font-pixel)] text-sm text-[var(--gold)] mb-3">{cat.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Trust info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="gradient-border max-w-2xl mx-auto">
            <div className="gradient-border-inner text-center py-10">
              <p className="text-gray-400 text-sm leading-relaxed">
                🔒 All transactions are processed securely through <strong className="text-white">Tebex</strong>.
                <br />
                Your payment information is never stored on our servers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
