import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Privacy Policy | Statify-MMA",
  description: "Learn about how Statify-MMA collects, uses, and protects your personal information. Our commitment to your privacy and data protection.",
  keywords: "MMA privacy policy, data protection, GDPR compliance, privacy rights, Statify-MMA privacy",
  openGraph: {
    title: "Privacy Policy | Statify-MMA",
    description: "Learn about how Statify-MMA collects, uses, and protects your personal information. Our commitment to your privacy and data protection.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Statify-MMA Privacy Policy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Statify-MMA",
    description: "Learn about how Statify-MMA collects, uses, and protects your personal information. Our commitment to your privacy and data protection.",
    images: ["/images/privacy-og.jpg"]
  },
};

export default function PrivacyPolicyLayout({
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
