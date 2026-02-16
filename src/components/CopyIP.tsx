'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CopyIP() {
  const [copied, setCopied] = useState(false);
  const ip = 'play.lootvote.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = ip;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 sm:px-6 py-3 cursor-pointer transition-all hover:border-[var(--cyan)]/40 hover:bg-white/10"
      >
        <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">Server IP</span>
        <span className="font-[var(--font-pixel)] text-[var(--cyan)] text-[10px] sm:text-sm">{ip}</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 group-hover:text-[var(--cyan)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </motion.button>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 bg-green-500/20 border border-green-500/30 text-green-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-medium whitespace-nowrap backdrop-blur-sm"
          >
            ✓ Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
