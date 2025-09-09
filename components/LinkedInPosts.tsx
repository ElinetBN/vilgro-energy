// components/LinkedInPosts.tsx
import { useState, useEffect } from 'react';

interface LinkedInPost {
  id: string;
  text: {
    text: string;
  };
  createdTime: number;
  author: string;
}

interface LinkedInPostsProps {
  accessToken: string;
}

export default function LinkedInPosts({ accessToken }: LinkedInPostsProps) {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/linkedin-posts', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchPosts();
    }
  }, [accessToken]);

  if (loading) return <div>Loading LinkedIn posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="linkedin-posts">
      <h2>Company LinkedIn Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.text.text}</p>
          <small>
            Posted: {new Date(post.createdTime).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
}