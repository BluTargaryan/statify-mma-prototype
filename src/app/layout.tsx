import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Providers from './components/Providers';

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

// Lazy load components
const Nav = dynamic(() => import("./components/global/sections/Nav"), {
  ssr: true,
  loading: () => (
    <div className="fixed top-0 left-0 right-0 h-28 bg-bg animate-pulse" />
  ),
});

const Footer = dynamic(() => import("./components/global/sections/Footer"), {
  ssr: true,
  loading: () => (
    <div className="h-32 bg-bg animate-pulse" />
  ),
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Enhanced metadata
export const metadata: Metadata = {
  title: "Statify-MMA | MMA News and Analysis",
  description: "Your source for MMA news, analysis, and insights. Stay updated with the latest in mixed martial arts.",
  keywords: "MMA, UFC, mixed martial arts, fighting, combat sports",
  openGraph: {
    title: "Statify-MMA | MMA News and Analysis",
    description: "Your source for MMA news, analysis, and insights. Stay updated with the latest in mixed martial arts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statify-MMA | MMA News and Analysis",
    description: "Your source for MMA news, analysis, and insights. Stay updated with the latest in mixed martial arts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://statify-mma.vercel.app" />
      </head>
      <body className="antialiased bg-bg text-text pt-28 px-4 box-border overflow-x-hidden md:px-10 md:pt-32 lg:px-36">
        <Providers>
          <Suspense fallback={<div className="fixed top-0 left-0 right-0 h-28 bg-bg animate-pulse" />}>
            <Nav />
          </Suspense>
          <main>{children}</main>
          <Suspense fallback={<div className="h-32 bg-bg animate-pulse" />}>
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
