'use client';

import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingBlocks from '@/components/FloatingBlocks';
import CopyIP from '@/components/CopyIP';
import PlayerCount from '@/components/PlayerCount';
import Link from 'next/link';

const features = [
  { icon: '⚔️', title: 'Towny', desc: 'Build towns, form nations, wage war. Claim land and protect your empire.' },
  { icon: '📈', title: 'mcMMO', desc: 'Level up RPG skills and unlock powerful abilities.' },
  { icon: '💰', title: 'Economy', desc: 'Jobs, player shops, auctions — build your fortune.' },
  { icon: '🌍', title: 'Cross-Play', desc: 'Java & Bedrock players unite. Play from any device.' },
  { icon: '🛡️', title: 'Anti-Cheat', desc: 'Protected by GrimAC. Fair gameplay guaranteed.' },
  { icon: '📜', title: 'Quests', desc: 'Daily & weekly challenges with epic rewards.' },
];

const steps = [
  { step: '01', title: 'Open Minecraft', desc: 'Launch Java (1.21+) or Bedrock' },
  { step: '02', title: 'Add Server', desc: 'Go to Multiplayer → Add Server' },
  { step: '03', title: 'Enter IP', desc: 'Type play.lootvote.com' },
  { step: '04', title: 'Play!', desc: 'Start your adventure' },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* BG layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]" />
        <ParticleBackground />
        <FloatingBlocks />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            {/* Mobile: stacked, Desktop: side by side */}
            <h1 className="font-[var(--font-pixel)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[var(--gold)] via-[#FFA500] to-[var(--gold)] bg-clip-text text-transparent animate-[glow-pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                Loot
              </span>
              <span className="bg-gradient-to-r from-[var(--cyan)] via-[#00B4D8] to-[var(--cyan)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                Vote
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              A premium <span className="text-white font-medium">Minecraft Towny</span> server with mcMMO, economy, quests & cross-play.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <CopyIP />
            <PlayerCount />

            {/* Buttons - Stack on mobile, side by side on larger */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-4 sm:px-0">
              <Link href="/vote" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="btn-gold w-full sm:w-auto"
                >
                  Vote Now
                </motion.button>
              </Link>
              <a href="https://mcstore.lootvote.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="btn-cyan w-full sm:w-auto"
                >
                  Store
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.03)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-[var(--font-pixel)] text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">
              Why <span className="neon-gold">LootVote</span>?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Everything you need for the ultimate Minecraft experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-5 sm:p-6 group cursor-default"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="font-[var(--font-pixel)] text-xs sm:text-sm text-[var(--gold)] mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="font-[var(--font-pixel)] text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">
              How to <span className="neon-cyan">Join</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--cyan)]/20 border border-white/10 flex items-center justify-center">
                  <span className="font-[var(--font-pixel)] text-[var(--gold)] text-xs sm:text-sm">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{s.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border"
          >
            <div className="gradient-border-inner text-center py-10 sm:py-16 px-4 sm:px-8">
              <h2 className="font-[var(--font-pixel)] text-base sm:text-lg md:text-xl text-white mb-3 sm:mb-4">
                Join Our Community
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base px-2 sm:px-0">
                Connect with fellow players, get updates, participate in events.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 LootVote. Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </footer>
    </>
  );
}
