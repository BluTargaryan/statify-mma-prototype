import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
  

export const metadata: Metadata = {
  title: "About Us | Statify-MMA",
  description: "Learn about Statify-MMA's mission to transform MMA analysis through data-driven insights. Discover how we're revolutionizing the way fans understand and appreciate mixed martial arts.",
  keywords: "MMA analysis, fight statistics, MMA data, combat sports analysis, UFC statistics, MMA insights",
  openGraph: {
    title: "About Us | Statify-MMA",
    description: "Learn about Statify-MMA's mission to transform MMA analysis through data-driven insights. Discover how we're revolutionizing the way fans understand and appreciate mixed martial arts.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1733951109839-f194ccd78cec",
        width: 1200,
        height: 630,
        alt: "MMA fighters in action"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Statify-MMA",
    description: "Learn about Statify-MMA's mission to transform MMA analysis through data-driven insights. Discover how we're revolutionizing the way fans understand and appreciate mixed martial arts.",
    images: ["https://images.unsplash.com/photo-1733951109839-f194ccd78cec"]
  },
};

export default function AboutLayout({
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

