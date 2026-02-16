'use client';

import { motion } from 'framer-motion';

const blocks = [
  { color: '#4CAF50', x: '10%', y: '20%', delay: 0, size: 40 },      // Grass
  { color: '#8B4513', x: '85%', y: '15%', delay: 1, size: 35 },      // Dirt
  { color: '#607D8B', x: '75%', y: '70%', delay: 2, size: 45 },      // Stone
  { color: '#FFD700', x: '15%', y: '75%', delay: 0.5, size: 30 },    // Gold ore
  { color: '#00BCD4', x: '90%', y: '45%', delay: 1.5, size: 25 },    // Diamond
  { color: '#F44336', x: '5%', y: '50%', delay: 3, size: 28 },       // Redstone
];

export default function FloatingBlocks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: block.x, top: block.y }}
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, 360],
            rotateZ: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: block.delay,
            ease: 'easeInOut',
          }}
        >
          <div
            className="relative opacity-20"
            style={{
              width: block.size,
              height: block.size,
              transformStyle: 'preserve-3d',
              transform: 'rotateX(-25deg) rotateY(45deg)',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 border border-black/30"
              style={{
                background: block.color,
                transform: `translateZ(${block.size / 2}px)`,
                imageRendering: 'pixelated',
              }}
            />
            {/* Top */}
            <div
              className="absolute inset-0 border border-black/30"
              style={{
                background: block.color,
                filter: 'brightness(1.3)',
                transform: `rotateX(90deg) translateZ(${block.size / 2}px)`,
              }}
            />
            {/* Right */}
            <div
              className="absolute inset-0 border border-black/30"
              style={{
                background: block.color,
                filter: 'brightness(0.7)',
                transform: `rotateY(90deg) translateZ(${block.size / 2}px)`,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
