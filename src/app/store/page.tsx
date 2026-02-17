'use client';

import { motion } from 'framer-motion';

const categories = [
  { name: 'Ranks', desc: 'Unlock perks and exclusive abilities', icon: '👑' },
  { name: 'Crates', desc: 'Mystery crates with rare items', icon: '📦' },
  { name: 'Cosmetics', desc: 'Stand out with custom cosmetics', icon: '✨' },
];

export default function StorePage() {
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
            Server <span className="text-amber-500">Store</span>
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6">
            Support the server and unlock exclusive perks, ranks, and cosmetics.
          </p>
          <motion.a
            href="https://lootvote.buycraft.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wide transition-all"
          >
            Open Store
          </motion.a>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="https://lootvote.buycraft.net/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl">
                {cat.icon}
              </div>
              <h3 className="font-['Press_Start_2P'] text-amber-500 text-[10px] mb-2">{cat.name}</h3>
              <p className="text-zinc-400 text-xs">{cat.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-4">
            <p className="text-zinc-400 text-xs">
              🔒 All transactions processed securely via <span className="text-white font-medium">Tebex</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
