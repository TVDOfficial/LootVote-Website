'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServerStatus from './ServerStatus';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/features#gamemodes', label: 'Game Modes' },
  { href: '/store', label: 'Store' },
  { href: '/vote', label: 'Vote' },
  { href: '/rules', label: 'Support' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoin = () => {
    navigator.clipboard.writeText('lootvote.com');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-14 lg:h-16 px-4 lg:px-6 rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass-darker shadow-xl shadow-black/20' : 'glass'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center text-[#1A1A1A] shadow-lg shadow-[#FFD700]/20 transition-transform group-hover:scale-105 font-minecraft text-[10px] lg:text-xs">
              LV
            </div>
            <span className="font-bold text-white text-lg lg:text-xl tracking-tight hidden sm:block">
              Loot<span className="text-[#FFD700]">Vote</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? 'text-[#FFD700] bg-[#FFD700]/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ServerStatus />
            <button
              onClick={handleJoin}
              className="px-5 py-2.5 rounded-xl bg-[#FFD700] hover:bg-[#FFE44D] text-[#1A1A1A] font-bold text-sm transition-all hover:scale-105 active:scale-95"
            >
              Join Server
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 glass-darker rounded-2xl border border-white/10 overflow-hidden shadow-2xl lg:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    pathname === link.href
                      ? 'text-[#FFD700] bg-[#FFD700]/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex items-center justify-between gap-3">
                <ServerStatus />
                <button
                  onClick={() => {
                    handleJoin();
                    setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-3 rounded-xl bg-[#FFD700] text-[#1A1A1A] font-bold text-sm"
                >
                  Join Server
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
