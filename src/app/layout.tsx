import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LootVote - Premium Towny RPG | lootvote.com",
  description:
    "LootVote.com's Official Server. A premium Minecraft Towny RPG experience. Build. Trade. Conquer. Java 1.21.4 & Bedrock supported.",
  keywords: ["Minecraft", "Towny", "RPG", "LootVote", "SMP", "Economy"],
  openGraph: {
    title: "LootVote - Premium Towny RPG",
    description:
      "LootVote.com's Official Server. Build. Trade. Conquer. Java 1.21.4 & Bedrock supported.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#1A1A1A] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
