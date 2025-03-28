import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Terms and Conditions | Statify-MMA",
  description: "Read our terms and conditions to understand the rules, guidelines, and policies for using Statify-MMA's services and content.",
  keywords: "MMA terms and conditions, user guidelines, content usage rules, Statify-MMA terms, MMA website terms",
  openGraph: {
    title: "Terms and Conditions | Statify-MMA",
    description: "Read our terms and conditions to understand the rules, guidelines, and policies for using Statify-MMA's services and content.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/terms-og.jpg",
        width: 1200,
        height: 630,
        alt: "Statify-MMA Terms and Conditions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Statify-MMA",
    description: "Read our terms and conditions to understand the rules, guidelines, and policies for using Statify-MMA's services and content.",
    images: ["/images/terms-og.jpg"]
  },
};

export default function TermsAndConditionsLayout({
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
