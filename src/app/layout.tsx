import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LootVote — Minecraft Towny Server",
  description: "Join LootVote, a premium Minecraft Towny server with mcMMO, Economy, Quests, and more. Java + Bedrock cross-play. play.lootvote.com",
  keywords: ["minecraft", "server", "towny", "mcmmo", "lootvote", "java", "bedrock"],
  openGraph: {
    title: "LootVote — Minecraft Towny Server",
    description: "Join the ultimate Minecraft Towny experience. play.lootvote.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[var(--font-body)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
