import type { Metadata, Viewport } from "next";
import "../../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "MMA Article | Statify-MMA",
  description: "Read in-depth MMA articles, analysis, and insights from Statify-MMA. Stay informed with the latest in mixed martial arts.",
  keywords: "MMA articles, UFC analysis, fight breakdowns, MMA news, combat sports articles",
  openGraph: {
    title: "MMA Article | Statify-MMA",
    description: "Read in-depth MMA articles, analysis, and insights from Statify-MMA. Stay informed with the latest in mixed martial arts.",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/images/article-og.jpg",
        width: 1200,
        height: 630,
        alt: "MMA Article"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Article | Statify-MMA",
    description: "Read in-depth MMA articles, analysis, and insights from Statify-MMA. Stay informed with the latest in mixed martial arts.",
    images: ["/images/article-og.jpg"]
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

export default function ArticleLayout({
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

