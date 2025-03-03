import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "About-Statify-MMA",
  description: "About-Statify-MMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <>{children}</>
  );
}

