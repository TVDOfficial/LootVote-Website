'use client';

import { motion } from 'framer-motion';

export default function PlayerCount() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-gray-400 text-sm">
        <motion.span
          className="text-green-400 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          0
        </motion.span>
        {' '}players online
      </span>
    </motion.div>
  );
}
