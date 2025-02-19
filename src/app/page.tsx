'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "./components/global/Loading";
import Nav from "./components/global/Nav";
export default function PageContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or put your actual data fetching here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      <Nav />
    </main>
  );
}
