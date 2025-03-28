'use client';

import { ContentfulProvider } from "../context/ContentfulContext";
import { AuthProvider } from "../context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ContentfulProvider>
        {children}
      </ContentfulProvider>
    </AuthProvider>
  );
} 