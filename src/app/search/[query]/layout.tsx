import type { Metadata, Viewport } from "next";
import "../../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Search Results | Statify-MMA",
  description: "Search through our comprehensive MMA statistics database. Find detailed information about fighters, events, and fight statistics.",
  keywords: "MMA search, fighter search, MMA statistics search, fight data search, Statify-MMA search",
  openGraph: {
    title: "Search Results | Statify-MMA",
    description: "Search through our comprehensive MMA statistics database. Find detailed information about fighters, events, and fight statistics.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/search-og.jpg",
        width: 1200,
        height: 630,
        alt: "MMA Statistics Search"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Results | Statify-MMA",
    description: "Search through our comprehensive MMA statistics database. Find detailed information about fighters, events, and fight statistics.",
    images: ["/images/search-og.jpg"]
  },
};

export default function SearchLayout({
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
