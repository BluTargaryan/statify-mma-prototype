'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from 'contentful-management';

interface User {
  email: string;
  sys: {
    id: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user');
    const sessionExpiry = localStorage.getItem('sessionExpiry');
    
    if (storedUser && sessionExpiry) {
      const now = new Date().getTime();
      if (now < parseInt(sessionExpiry)) {
        setUser(JSON.parse(storedUser));
      } else {
        // Session expired
        localStorage.removeItem('user');
        localStorage.removeItem('sessionExpiry');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    try {
      setLoading(true);
      const client = createClient({
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN || '',
      });

      const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '');
      const environment = await space.getEnvironment('master');

      // Check if user exists
      const entries = await environment.getEntries({
        content_type: 'user',
        'fields.email': email,
      });

      let userData;

      if (entries.items.length === 0) {
        // Create new user
        userData = await environment.createEntry('user', {
          fields: {
            email: {
              'en-US': email
            }
          }
        });
        await userData.publish();
      } else {
        userData = entries.items[0];
      }

      const user = {
        email: email,
        sys: {
          id: userData.sys.id
        }
      };

      // Set session expiry to 7 days
      const expiryTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('sessionExpiry', expiryTime.toString());

      setUser(user);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      throw err; // Re-throw to handle in the component
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('sessionExpiry');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 