import type { Metadata } from "next";
import "../globals.css";



export const metadata: Metadata = {
  title: "Privacy Policy-Statify-MMA",
  description: "Privacy Policy-Statify-MMA",
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
