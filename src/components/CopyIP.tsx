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
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-full px-5 py-2.5 hover:border-zinc-600 transition-colors"
      >
        <span className="text-zinc-500 text-xs uppercase tracking-wider">IP</span>
        <span className="font-medium text-emerald-400 text-sm">{ip}</span>
        <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs whitespace-nowrap"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
