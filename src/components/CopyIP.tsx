'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CopyIP() {
  const [copied, setCopied] = useState(false);
  const ip = 'PLAY.LOOTVOTE.COM';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard fails
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCopy}
        className="flex items-center gap-0 overflow-hidden glass rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-2xl"
      >
        <div className="bg-primary/10 px-4 py-4 border-r border-white/10 group-hover:bg-primary/20 transition-colors">
          <span className="text-primary font-black text-xs tracking-widest uppercase">Server IP</span>
        </div>

        <div className="px-6 py-4 flex items-center gap-4">
          <span className="font-montserrat font-black text-white text-lg tracking-tight group-hover:text-primary transition-colors">
            {ip}
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
            <svg
              className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-primary text-black font-black px-4 py-1.5 rounded-full text-xs shadow-xl shadow-primary/20 whitespace-nowrap z-20"
          >
            Copied to Clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
