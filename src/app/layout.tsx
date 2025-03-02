import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/global/sections/Nav";
import Footer from "./components/global/sections/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Statify-MMA",
  description: "Statify-MMA",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-bg text-text pt-28 px-4 box-border overflow-x-hidden
          md:px-10 md:pt-32 lg:px-36`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
