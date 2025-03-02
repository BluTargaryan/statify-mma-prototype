import type { Metadata } from "next";
import "../../globals.css";


export const metadata: Metadata = {
  title: "Article-Statify-MMA",
  description: "Article-Statify-MMA",
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

