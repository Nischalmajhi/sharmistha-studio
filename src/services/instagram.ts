/**
 * Instagram Graph API Service
 * Fetches real Instagram posts from Sharmistha's account
 */

import React from 'react';

export interface InstagramPost {
  id: string;
  image: string;
  caption?: string;
  link: string;
  timestamp?: string;
  likes?: number;
  comments?: number;
}

/**
 * Fetch Instagram posts using the Graph API
 *
 * Requirements:
 * 1. Create a Facebook App: https://developers.facebook.com
 * 2. Set up Instagram Graph API
 * 3. Get your Instagram Business Account ID
 * 4. Generate a valid Access Token
 *
 * Store tokens in environment variables:
 * VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here
 * VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id
 */

export async function fetchInstagramPosts(
  limit: number = 12
): Promise<InstagramPost[]> {
  const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
  const instagramBusinessAccountId = import.meta.env.VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !instagramBusinessAccountId) {
    console.warn(
      'Instagram API credentials not configured. Using placeholder posts.'
    );
    return getPlaceholderPosts();
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${accessToken}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts');
    }

    const data = await response.json();

    return data.media.map((post: any) => ({
      id: post.id,
      image: post.media_url,
      caption: post.caption || '',
      link: post.permalink,
      timestamp: formatDate(post.timestamp),
      likes: post.like_count,
      comments: post.comments_count,
    }));
  } catch (error) {
    console.error('Instagram API error:', error);
    return getPlaceholderPosts();
  }
}

/**
 * Format timestamp to readable format
 */
function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return date.toLocaleDateString();
}

/**
 * Placeholder posts (shown when API is not configured)
 */
function getPlaceholderPosts(): InstagramPost[] {
  return [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      caption: 'Bridal elegance in every stitch. Custom lehenga adorned with intricate embroidery.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '2 days ago',
      likes: 324,
      comments: 28,
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1587903283671-922fc38f1d7b?w=400&h=400&fit=crop',
      caption: 'New arrival! Vintage-inspired saree with gold embroidery.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '4 days ago',
      likes: 456,
      comments: 52,
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1572804419408-d3bda0a4ac2c?w=400&h=400&fit=crop',
      caption: 'How to drape a saree like a pro. Step-by-step tutorial video available on our stories!',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '1 week ago',
      likes: 892,
      comments: 156,
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      caption: 'Behind the scenes: Our master artisans crafting magic stitch by stitch.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '1 week ago',
      likes: 567,
      comments: 73,
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1617783386910-b0f7a6b3be5a?w=400&h=400&fit=crop',
      caption: 'Beautiful wedding moments in our custom designs. Congratulations to the lovely couple!',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '2 weeks ago',
      likes: 1204,
      comments: 187,
    },
    {
      id: '6',
      image:
        'https://images.unsplash.com/photo-1515231557744-8aac61f82e01?w=400&h=400&fit=crop',
      caption: 'Exquisite embroidery details that steal hearts. Each thread tells a story.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '2 weeks ago',
      likes: 743,
      comments: 94,
    },
    {
      id: '7',
      image:
        'https://images.unsplash.com/photo-1564377419579-d967a6ae01f1?w=400&h=400&fit=crop',
      caption: 'Consultation booking now open! Schedule your personal styling session today.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '3 weeks ago',
      likes: 432,
      comments: 61,
    },
    {
      id: '8',
      image:
        'https://images.unsplash.com/photo-1514782831058-e87f29971978?w=400&h=400&fit=crop',
      caption: 'Heritage meets modernity in our latest collection. Limited edition pieces available now.',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '3 weeks ago',
      likes: 678,
      comments: 89,
    },
    {
      id: '9',
      image:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
      caption: 'Customer spotlight: How you styled our designs. Tag us for a chance to be featured!',
      link: 'https://instagram.com/sharmishthadesignerstudio',
      timestamp: '3 weeks ago',
      likes: 921,
      comments: 142,
    },
  ];
}

/**
 * Hook to use Instagram posts in React components
 */
export function useInstagramPosts(limit: number = 12) {
  const [posts, setPosts] = React.useState<InstagramPost[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await fetchInstagramPosts(limit);
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [limit]);

  return { posts, loading, error };
}
