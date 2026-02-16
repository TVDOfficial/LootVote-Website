'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingBlocks from '@/components/FloatingBlocks';
import CopyIP from '@/components/CopyIP';
import PlayerCount from '@/components/PlayerCount';
import Link from 'next/link';

const features = [
  { icon: '⚔️', title: 'Towny', desc: 'Build towns, form nations, wage war against rivals. Claim land and protect your empire.' },
  { icon: '📈', title: 'mcMMO', desc: 'Level up RPG skills like Mining, Swords, Acrobatics and unlock powerful abilities.' },
  { icon: '💰', title: 'Economy', desc: 'Jobs, player shops, auctions — build your fortune in a thriving player economy.' },
  { icon: '🌍', title: 'Cross-Play', desc: 'Java & Bedrock players unite. Play from PC, console, or mobile seamlessly.' },
  { icon: '🛡️', title: 'Anti-Cheat', desc: 'Protected by GrimAC. Fair gameplay guaranteed for everyone.' },
  { icon: '📜', title: 'Quests', desc: 'Daily & weekly challenges with epic rewards. Always something new to do.' },
];

const steps = [
  { step: '01', title: 'Open Minecraft', desc: 'Launch Minecraft Java Edition (1.21+) or Bedrock Edition' },
  { step: '02', title: 'Add Server', desc: 'Go to Multiplayer → Add Server' },
  { step: '03', title: 'Enter IP', desc: 'Type play.lootvote.com and click Join' },
  { step: '04', title: 'Play!', desc: 'Start your adventure on LootVote' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />
        <ParticleBackground />
        <FloatingBlocks />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            <h1 className="font-[var(--font-pixel)] text-5xl md:text-7xl lg:text-8xl mb-2 leading-tight">
              <span className="bg-gradient-to-r from-[var(--gold)] via-[#FFA500] to-[var(--gold)] bg-clip-text text-transparent animate-[glow-pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                Loot
              </span>
              <span className="bg-gradient-to-r from-[var(--cyan)] via-[#00B4D8] to-[var(--cyan)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                Vote
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              A premium <span className="text-white font-medium">Minecraft Towny</span> server with mcMMO, a thriving economy, epic quests, and seamless cross-play.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <CopyIP />
            <PlayerCount />

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link href="/vote">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-gold">
                  Vote Now
                </motion.button>
              </Link>
              <a href="https://mcstore.lootvote.com" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-cyan">
                  Store
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.03)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[var(--font-pixel)] text-2xl md:text-3xl text-white mb-4">
              Why <span className="neon-gold">LootVote</span>?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need for the ultimate Minecraft experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 group cursor-default"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="font-[var(--font-pixel)] text-sm text-[var(--gold)] mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[var(--font-pixel)] text-2xl md:text-3xl text-white mb-4">
              How to <span className="neon-cyan">Join</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--cyan)]/20 border border-white/10 flex items-center justify-center">
                  <span className="font-[var(--font-pixel)] text-[var(--gold)] text-sm">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border"
          >
            <div className="gradient-border-inner text-center py-16 px-8">
              <h2 className="font-[var(--font-pixel)] text-xl md:text-2xl text-white mb-4">
                Join Our Community
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Connect with fellow players, get server updates, participate in events, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gold inline-block"
                >
                  Discord
                </motion.a>
                <Link href="/vote">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-cyan"
                  >
                    Vote for Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
