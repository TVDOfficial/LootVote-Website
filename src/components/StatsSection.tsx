'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const MCSTATUS_URL = 'https://api.mcstatus.io/v2/status/java/lootvote.com';

interface Stats {
  playersOnline: number;
  activeTowns: number | null;
  activeNations: number | null;
  questsCompleted: number | null;
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stats>({
    playersOnline: 0,
    activeTowns: null,
    activeNations: null,
    questsCompleted: null,
  });

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(MCSTATUS_URL);
        const json = await res.json();
        setStats((s) => ({
          ...s,
          playersOnline: json.players?.online ?? 0,
        }));
      } catch {
        // Keep 0
      }
    };
    fetchPlayers();
    const interval = setInterval(fetchPlayers, 60000);
    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      label: 'Players Online',
      value: stats.playersOnline,
      display: true,
    },
    {
      label: 'Active Towns',
      value: stats.activeTowns,
      display: stats.activeTowns !== null,
    },
    {
      label: 'Active Nations',
      value: stats.activeNations,
      display: stats.activeNations !== null,
    },
    {
      label: 'Quests Completed',
      value: stats.questsCompleted,
      display: stats.questsCompleted !== null,
    },
  ];

  return (
    <section className="py-24 px-4 border-y border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Server Statistics
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Live data from LootVote.com&apos;s Official Server
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/5 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">
                {stat.display ? (
                  <AnimatedCounter value={stat.value as number} />
                ) : (
                  <span className="text-zinc-600">—</span>
                )}
              </div>
              <div className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
