import type { Metadata } from "next";
import "../../globals.css";



export const metadata: Metadata = {
  title: "Search-Statify-MMA",
  description: "Search-Statify-MMA",
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
