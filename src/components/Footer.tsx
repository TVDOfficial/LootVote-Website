'use client';

import Link from 'next/link';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Store', href: 'https://lootvote.buycraft.com' },
      { label: 'Vote', href: '/vote' },
      { label: 'Rules', href: '/rules' },
      { label: 'Support', href: '/rules' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/rules' },
      { label: 'Privacy Policy', href: '/rules' },
      { label: 'Refund Policy', href: '/rules' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center text-[#1A1A1A] font-minecraft text-xs shadow-lg shadow-[#FFD700]/20">
                LV
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Loot<span className="text-[#FFD700]">Vote</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              LootVote.com&apos;s Official Server. A premium Towny RPG experience.
              Join us at lootvote.com
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-[#FFD700] transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-6">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-zinc-500 hover:text-[#FFD700] transition-colors"
                aria-label="Discord"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.682 4.37a.07.07 0 00-.032.027C.5 9.123-.32 13.755.19 18.29a.072.072 0 00.027.05c2.108 1.548 4.147 2.491 6.14 3.113a.077.077 0 00.082-.027c.47-.642.885-1.327 1.24-2.042a.076.076 0 00-.041-.106 13.097 13.097 0 01-1.93-1.02.077.077 0 01-.007-.127c.13-.097.26-.199.384-.303a.075.075 0 01.078-.01c4.017 1.835 8.364 1.835 12.33 0a.075.075 0 01.078.01c.124.104.254.206.385.304a.077.077 0 01-.007.127 12.983 12.983 0 01-1.93 1.02.076.076 0 00-.041.107c.355.715.77 1.4 1.24 2.042a.076.076 0 00.082.027c1.993-.622 4.032-1.565 6.14-3.113a.072.072 0 00.027-.05c.594-5.323-.974-9.92-4.147-13.893a.07.07 0 00-.032-.027z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-[#FFD700] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-[#FFD700] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-xs font-medium">
            © 2026 LootVote.com | Not affiliated with Mojang/Microsoft
          </p>
        </div>
      </div>
    </footer>
  );
}
