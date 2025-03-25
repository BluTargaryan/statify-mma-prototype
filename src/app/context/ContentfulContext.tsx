'use client';

import { createClient } from 'contentful';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ContentfulContextType {
  posts: any[];
  comments: any[];
  users: any[];
  ads: any[];
  loading: boolean;
  error: string | null;
  addComment: (comment: any) => void;
  refreshComments: () => Promise<void>;
}

const ContentfulContext = createContext<ContentfulContextType>({
  posts: [],
  comments: [],
  users: [],
  ads: [],
  loading: true,
  error: null,
  addComment: () => {},
  refreshComments: async () => {},
});

export function ContentfulProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
      });
      
      const commentsData = await client.getEntries({ content_type: 'comment' });
      setComments(commentsData.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
        });
        
        const [postsData, commentsData, adsData, usersData] = await Promise.all([
          client.getEntries({ content_type: 'post' }),
          client.getEntries({ content_type: 'comment' }),
          client.getEntries({ content_type: 'ad' }),
          client.getEntries({ content_type: 'user' })
        ]);
        
        if (isMounted) {
          setPosts(postsData.items);
          setComments(commentsData.items);
          setAds(adsData.items);
          setUsers(usersData.items);
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

  const addComment = (comment: any) => {
    setComments(prevComments => [...prevComments, comment]);
  };

  const refreshComments = async () => {
    await fetchComments();
  };

  return (
    <ContentfulContext.Provider value={{ posts, comments, users, ads, loading, error, addComment, refreshComments }}>
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