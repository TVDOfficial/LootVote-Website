'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
            Rules & Support
          </h1>
          <p className="text-zinc-500 text-lg">
            Community guidelines, terms of service, and support resources.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          <section className="p-6 rounded-2xl glass border border-white/5">
            <h2 className="text-xl font-bold text-[#FFD700] mb-4">Server Rules</h2>
            <p className="text-zinc-400 mb-4">
              By playing on LootVote, you agree to follow our community guidelines. Violations may result in warnings, mutes, or bans.
            </p>
            <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Respect all players and staff. No harassment, hate speech, or discrimination.</li>
              <li>No cheating, hacking, or exploitation of bugs for unfair advantage.</li>
              <li>No griefing, stealing, or destruction of others&apos; builds without permission.</li>
              <li>Follow all in-game rules and staff instructions.</li>
              <li>Keep chat appropriate and on-topic. No spam or advertising.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl glass border border-white/5">
            <h2 className="text-xl font-bold text-[#00BFFF] mb-4">Terms of Service</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              LootVote.com and its services are provided as-is. We are not affiliated with Mojang AB or Microsoft.
              Account security is your responsibility. Purchases are non-refundable except as required by law.
              We reserve the right to modify these terms at any time.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-white/5">
            <h2 className="text-xl font-bold text-[#00BFFF] mb-4">Privacy Policy</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We collect minimal data necessary to operate the server and provide support. Your Minecraft username,
              IP address (for connection purposes), and any information you provide when contacting support may be stored.
              We do not sell your data to third parties.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-white/5">
            <h2 className="text-xl font-bold text-[#00BFFF] mb-4">Refund Policy</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              All store purchases are generally non-refundable. Refunds may be considered on a case-by-case basis
              for technical issues or duplicate purchases. Contact support through Discord for assistance.
            </p>
          </section>

          <section className="p-6 rounded-2xl glass border border-white/5">
            <h2 className="text-xl font-bold text-[#FFD700] mb-4">Support</h2>
            <p className="text-zinc-400 mb-4">
              Need help? Join our Discord community for support, bug reports, and general questions.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm transition-all"
            >
              Join Discord
            </a>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="text-[#FFD700] hover:text-[#FFE44D] font-bold transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
