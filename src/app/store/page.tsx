'use client';

import { motion } from 'framer-motion';

const ranks = [
  {
    name: 'Noble',
    prefixColor: 'White',
    kitAccess: 3,
    sethomeLimit: 3,
    townPlotsBonus: '+2',
    auctionSlots: 2,
    cosmetics: true,
    priorityQueue: false,
    price: '$4.99',
  },
  {
    name: 'Knight',
    prefixColor: 'Gray',
    kitAccess: 5,
    sethomeLimit: 5,
    townPlotsBonus: '+5',
    auctionSlots: 4,
    cosmetics: true,
    priorityQueue: false,
    price: '$9.99',
  },
  {
    name: 'Baron',
    prefixColor: 'Blue',
    kitAccess: 7,
    sethomeLimit: 7,
    townPlotsBonus: '+10',
    auctionSlots: 6,
    cosmetics: true,
    priorityQueue: false,
    price: '$19.99',
  },
  {
    name: 'Count',
    prefixColor: 'Green',
    kitAccess: 10,
    sethomeLimit: 10,
    townPlotsBonus: '+20',
    auctionSlots: 8,
    cosmetics: true,
    priorityQueue: false,
    price: '$39.99',
  },
  {
    name: 'Duke',
    prefixColor: 'Gold',
    kitAccess: 15,
    sethomeLimit: 15,
    townPlotsBonus: '+35',
    auctionSlots: 12,
    cosmetics: true,
    priorityQueue: true,
    price: '$69.99',
  },
  {
    name: 'King',
    prefixColor: 'Red',
    kitAccess: 25,
    sethomeLimit: 25,
    townPlotsBonus: '+50',
    auctionSlots: 20,
    cosmetics: true,
    priorityQueue: true,
    price: '$99.99',
  },
];

export default function StorePage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
            Support the Server
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-8">
            Unlock exclusive ranks, perks, and cosmetics. All transactions are secure via Tebex.
          </p>
          <motion.a
            href="https://lootvote.buycraft.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#FFD700]/20"
          >
            Visit Store
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto rounded-2xl glass border border-white/5"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-zinc-400 font-medium text-sm">Feature</th>
                {ranks.map((r) => (
                  <th key={r.name} className="text-center py-4 px-4 text-white font-bold">
                    {r.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">Prefix Color</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-zinc-300 text-sm">
                    {r.prefixColor}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">/Kit Access</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-white text-sm font-medium">
                    {r.kitAccess}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">/sethome Limit</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-white text-sm font-medium">
                    {r.sethomeLimit}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">Town Plots Bonus</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-[#00BFFF] text-sm font-medium">
                    {r.townPlotsBonus}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">Auction Slots</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-white text-sm font-medium">
                    {r.auctionSlots}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">Exclusive Cosmetics</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-emerald-500 text-sm">
                    ✓
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-zinc-400 text-sm">Priority Queue</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center text-sm">
                    {r.priorityQueue ? (
                      <span className="text-emerald-500">✓</span>
                    ) : (
                      <span className="text-zinc-600">—</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 text-zinc-400 text-sm font-medium">Price</td>
                {ranks.map((r) => (
                  <td key={r.name} className="py-4 px-4 text-center">
                    <span className="text-[#FFD700] font-bold">{r.price}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-zinc-500 text-sm mt-8"
        >
          🔒 All transactions processed securely via Tebex
        </motion.p>
      </div>
    </div>
  );
}
