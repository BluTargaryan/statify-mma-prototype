import type { Metadata } from "next";
import "../globals.css";



export const metadata: Metadata = {
  title: "T&Cs-Statify-MMA",
  description: "T&Cs-Statify-MMA",
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
