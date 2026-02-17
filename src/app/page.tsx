'use client';

import { motion } from 'framer-motion';
import CopyIP from '@/components/CopyIP';
import Link from 'next/link';

const features = [
  {
    icon: '🏰',
    title: 'Towny Adventure',
    desc: 'Build thriving towns, form powerful nations, and conquer territory in a living, breathing world.',
    color: 'from-amber-500/20 to-amber-600/20'
  },
  {
    icon: '⚔️',
    title: 'mcMMO System',
    desc: 'Level up your skills, unlock unique abilities, and become a master of your craft.',
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    icon: '💎',
    title: 'Player Economy',
    desc: 'Trade, sell, and build your wealth in a completely player-driven market environment.',
    color: 'from-sky-500/20 to-sky-600/20'
  },
  {
    icon: '🌐',
    title: 'Cross-Play',
    desc: 'Join from Java or Bedrock - play with friends on PC, console, or mobile seamlessly.',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: '🛡️',
    title: 'Fair Gameplay',
    desc: 'Advanced anti-cheat systems ensure a level playing field for every single adventurer.',
    color: 'from-red-500/20 to-red-600/20'
  },
  {
    icon: '📜',
    title: 'Daily Quests',
    desc: 'Complete exciting daily challenges and earn epic rewards to boost your progression.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
];

const stats = [
  { label: 'Unique Players', value: '12,458+', icon: '👥' },
  { label: 'Towns Created', value: '452', icon: '🏠' },
  { label: 'Days Online', value: '730+', icon: '🗓️' },
  { label: 'Server Version', value: '1.21.x', icon: '⚙️' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                The #1 Towny experience
              </span>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                Forge Your Own <br />
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">Legendary Kingdom</span>
              </h1>

              <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of players in a premium Minecraft SMP where your destiny is in your hands. Build, trade, and conquer.
              </p>

              <div className="flex flex-col items-center gap-8">
                <CopyIP />

                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/vote">
                    <button className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-black font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-primary/20 active:scale-95">
                      Start Your Journey
                    </button>
                  </Link>
                  <a href="#features">
                    <button className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all active:scale-95">
                      Explore Features
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-surface/50 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4 grayscale hover:grayscale-0 transition-all duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 font-montserrat">{stat.value}</div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Built for <span className="text-primary">Adventurers</span>
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Every detail of LootVote is crafted to provide a balanced, engaging, and professional Minecraft experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl glass-darker border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-primary/10 z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-accent/10 z-0" />
            <div className="absolute inset-0 glass z-0" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Join Our <span className="text-primary">Discord</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
                Connect with our massive community, stay updated on events, and chat with fellow adventurers.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="px-10 py-5 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-black uppercase tracking-widest transition-all shadow-xl shadow-[#5865F2]/20 active:scale-95">
                  Join Discord
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
