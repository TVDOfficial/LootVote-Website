'use client';

import { motion } from 'framer-motion';

export default function PlayerCount() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2 sm:gap-3"
    >
      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
      </span>
      <span className="text-gray-400 text-xs sm:text-sm">
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
