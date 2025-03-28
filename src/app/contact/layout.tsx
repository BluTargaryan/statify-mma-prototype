import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Contact Us | Statify-MMA",
  description: "Get in touch with Statify-MMA. We're here to help with any questions about MMA statistics, data analysis, or general inquiries about our platform.",
  keywords: "contact MMA, MMA statistics support, MMA data analysis help, Statify-MMA contact",
  openGraph: {
    title: "Contact Us | Statify-MMA",
    description: "Get in touch with Statify-MMA. We're here to help with any questions about MMA statistics, data analysis, or general inquiries about our platform.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1637974013743-82656f7c3f49",
        width: 1200,
        height: 630,
        alt: "MMA fighter in action"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Statify-MMA",
    description: "Get in touch with Statify-MMA. We're here to help with any questions about MMA statistics, data analysis, or general inquiries about our platform.",
    images: ["https://images.unsplash.com/photo-1637974013743-82656f7c3f49"]
  },
};

export default function ContactLayout({
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

