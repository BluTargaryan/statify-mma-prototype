import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Events-Statify-MMA",
  description: "Events-Statify-MMA",
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
