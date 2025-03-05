import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Contact-Statify-MMA",
  description: "Contact-Statify-MMA",
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

