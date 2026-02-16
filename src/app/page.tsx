'use client';

import { motion } from 'framer-motion';
import CopyIP from '@/components/CopyIP';
import Link from 'next/link';

const features = [
  { icon: '🏰', title: 'Towny', desc: 'Build thriving towns, form powerful nations, and conquer territory.' },
  { icon: '⚔️', title: 'mcMMO', desc: 'Level up skills, unlock abilities, and become a master.' },
  { icon: '💎', title: 'Economy', desc: 'Trade, sell, and build your wealth in a player-driven market.' },
  { icon: '🌐', title: 'Cross-Play', desc: 'Play with friends on Java, Bedrock, console, or mobile.' },
  { icon: '🛡️', title: 'Anti-Cheat', desc: 'Fair gameplay protected by advanced anti-cheat systems.' },
  { icon: '📜', title: 'Quests', desc: 'Complete daily challenges and earn epic rewards.' },
];

const steps = [
  { num: '01', title: 'Launch Minecraft', desc: 'Java 1.21+ or Bedrock Edition' },
  { num: '02', title: 'Add Server', desc: 'Go to Multiplayer → Add Server' },
  { num: '03', title: 'Enter IP', desc: 'Type: play.lootvote.com' },
  { num: '04', title: 'Start Playing', desc: 'Join and begin your adventure' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#09090b]">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-emerald-500/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <h1 className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                LootVote
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
              The Ultimate Towny SMP Experience
            </p>
            <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8">
              A premium Minecraft server featuring mcMMO, economy, quests, and seamless cross-play.
            </p>

            {/* Server IP */}
            <div className="mb-6">
              <CopyIP />
            </div>

            {/* Player Count */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400 text-sm">
                <span className="text-emerald-400 font-semibold">0</span> players online
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/vote" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wide transition-all">
                  Start Playing
                </button>
              </Link>
              <a href="#features" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border border-zinc-700 hover:border-zinc-500 text-white font-semibold py-3.5 px-8 rounded-xl text-sm uppercase tracking-wide transition-all">
                  Learn More
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Why Choose <span className="text-amber-500">LootVote</span>?
            </h2>
            <p className="text-zinc-400">Everything you need for the ultimate Minecraft experience.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How to <span className="text-emerald-500">Join</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-zinc-800 flex items-center justify-center">
                  <span className="font-['Press_Start_2P'] text-amber-500 text-xs">{s.num}</span>
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{s.title}</h3>
                <p className="text-zinc-500 text-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-[1px] bg-gradient-to-r from-amber-500 to-emerald-500"
          >
            <div className="bg-[#09090b] rounded-2xl p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Join Our Community
              </h2>
              <p className="text-zinc-400 mb-6 text-sm">
                Connect with fellow players, get updates, and participate in events.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="#"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition-all"
                >
                  Discord
                </a>
                <Link href="/vote">
                  <button className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-500 text-white font-semibold py-3 px-6 rounded-xl text-sm uppercase tracking-wide transition-all">
                    Vote for Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
