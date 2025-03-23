'use client';

import { createClient } from 'contentful';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ContentfulContextType {
  posts: any[];
  comments: any[];
  ads: any[];
  loading: boolean;
  error: string | null;
}

const ContentfulContext = createContext<ContentfulContextType>({
  posts: [],
  comments: [],
  ads: [],
  loading: true,
  error: null,
});

export function ContentfulProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
        });
        
        const [postsData, commentsData, adsData] = await Promise.all([
          client.getEntries({ content_type: 'post' }),
          client.getEntries({ content_type: 'comment' }),
          client.getEntries({ content_type: 'ad' })
        ]);
        
        if (isMounted) {
          setPosts(postsData.items);
          setComments(commentsData.items);
          setAds(adsData.items);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ContentfulContext.Provider value={{ posts, comments, ads, loading, error }}>
      {children}
    </ContentfulContext.Provider>
  );
}

export function useContentful() {
  const context = useContext(ContentfulContext);
  if (context === undefined) {
    throw new Error('useContentful must be used within a ContentfulProvider');
  }
  return context;
} 