'use client';

import Link from 'next/link';

const footerLinks = [
  {
    title: 'Server',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Vote', href: '/vote' },
      { label: 'Store', href: 'https://lootvote.buycraft.net/' },
      { label: 'Rules', href: '/rules' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: '#' },
      { label: 'Forums', href: '#' },
      { label: 'Wiki', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Desk', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-black shadow-lg shadow-primary/20">
                <span className="font-pixel text-xs">L</span>
              </div>
              <span className="font-montserrat font-black text-white text-lg tracking-tight">
                Loot<span className="text-primary">Vote</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Experience the ultimate Minecraft adventure with LootVote. Join our growing community today!
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-medium">
            © 2026 LootVote. Not an official Minecraft product. We are not affiliated with Mojang AB.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">
              <span className="sr-only">Discord</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.682 4.37a.07.07 0 00-.032.027C.5 9.123-.32 13.755.19 18.29a.072.072 0 00.027.05c2.108 1.548 4.147 2.491 6.14 3.113a.077.077 0 00.082-.027c.47-.642.885-1.327 1.24-2.042a.076.076 0 00-.041-.106 13.097 13.097 0 01-1.93-1.02.077.077 0 01-.007-.127c.13-.097.26-.199.384-.303a.075.075 0 01.078-.01c4.017 1.835 8.364 1.835 12.33 0a.075.075 0 01.078.01c.124.104.254.206.385.304a.077.077 0 01-.007.127 12.983 12.983 0 01-1.93 1.02.076.076 0 00-.041.107c.355.715.77 1.4 1.24 2.042a.076.076 0 00.082.027c1.993-.622 4.032-1.565 6.14-3.113a.072.072 0 00.027-.05c.594-5.323-.974-9.92-4.147-13.893a.07.07 0 00-.032-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
