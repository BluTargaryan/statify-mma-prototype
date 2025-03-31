import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "MMA News | Statify-MMA",
  description: "Explore curated lists of MMA fighters, events, and statistics. Discover rankings, top performers, and historical data.",
  keywords: "MMA lists, fighter rankings, UFC lists, MMA statistics, combat sports rankings",
  openGraph: {
    title: "MMA News | Statify-MMA",
    description: "Explore curated lists of MMA fighters, events, and statistics. Discover rankings, top performers, and historical data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA News | Statify-MMA",
    description: "Explore curated lists of MMA fighters, events, and statistics. Discover rankings, top performers, and historical data.",
  },
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
}
