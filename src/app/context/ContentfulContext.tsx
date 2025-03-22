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
    async function fetchData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
        });
        
        const postsData = await client.getEntries({
          content_type: 'post',
        });

        const commentsData = await client.getEntries({
          content_type: 'comment',
        });

        const adsData = await client.getEntries({
          content_type: 'ad',
        });
        
        setPosts(postsData.items);
        setComments(commentsData.items);
        setAds(adsData.items);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts and comments');
        setLoading(false);
      }
    }

    fetchData();
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