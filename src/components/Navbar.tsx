'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/vote', label: 'Vote' },
  { href: '/store', label: 'Store' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[var(--gold)] to-[var(--cyan)] rounded-lg flex items-center justify-center text-[#0a0a1a] font-bold text-xs sm:text-sm transform group-hover:rotate-12 transition-transform">
            L
          </div>
          <span className="font-[var(--font-pixel)] text-xs sm:text-sm text-[var(--gold)] tracking-wider">
            LootVote
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'text-[var(--gold)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/5 rounded-lg border border-[var(--gold)]/20"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <a
            href="https://mcstore.lootvote.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 btn-gold !py-2 !px-4 !text-[0.55rem] hidden lg:inline-block"
          >
            Play Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      {/* Mobile menu - Fixed overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-x-0 top-14 bg-[#0a0a1a]/98 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'text-[var(--gold)] bg-white/5 border border-[var(--gold)]/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://mcstore.lootvote.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !py-3 !text-[0.6rem] text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Play Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
