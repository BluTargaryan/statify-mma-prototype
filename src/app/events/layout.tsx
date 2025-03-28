import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "MMA Events | Statify-MMA",
  description: "Stay updated with the latest MMA events, fight cards, and upcoming bouts. Get comprehensive coverage of UFC and other major MMA events.",
  keywords: "MMA events, UFC events, fight cards, upcoming fights, MMA schedule, combat sports events",
  openGraph: {
    title: "MMA Events | Statify-MMA",
    description: "Stay updated with the latest MMA events, fight cards, and upcoming bouts. Get comprehensive coverage of UFC and other major MMA events.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Events | Statify-MMA",
    description: "Stay updated with the latest MMA events, fight cards, and upcoming bouts. Get comprehensive coverage of UFC and other major MMA events.",
  },
};

export default function EventsLayout({
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
