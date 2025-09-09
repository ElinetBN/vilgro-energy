// lib/linkedin.ts
interface LinkedInPost {
  id: string;
  commentary?: string;
  createdAt?: number;
  contentCategory?: string;
  specificContent?: {
    'com.linkedin.ugc.ShareContent'?: {
      shareCommentary?: {
        text?: string;
      };
      media?: Array<{
        originalUrl?: string;
        thumbnailUrl?: string;
      }>;
    };
  };
}

export async function fetchLinkedInPosts(accessToken: string): Promise<Article[]> {
  const companyId = process.env.NEXT_PUBLIC_LINKEDIN_COMPANY_ID;
  const apiVersion = '202305';

  try {
    const response = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn%3Ali%3Aorganization%3A${companyId})`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'LinkedIn-Version': apiVersion,
          'X-Restli-Protocol-Version': '2.0.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`LinkedIn API error: ${await response.text()}`);
    }

    const data = await response.json();
    return transformPosts(data.elements || []);
  } catch (error) {
    console.error('Error fetching LinkedIn posts:', error);
    throw error;
  }
}

function transformPosts(posts: LinkedInPost[]): Article[] {
  return posts.map((post) => {
    const shareContent = post.specificContent?.['com.linkedin.ugc.ShareContent'];
    const mediaUrl = shareContent?.media?.[0]?.originalUrl || shareContent?.media?.[0]?.thumbnailUrl;

    return {
      id: post.id,
      title: extractFirstSentence(shareContent?.shareCommentary?.text || ''),
      excerpt: extractTextContent(shareContent?.shareCommentary?.text || ''),
      date: formatLinkedInDate(post.createdAt || Date.now()),
      category: post.contentCategory || 'Company Update',
      image: mediaUrl || getDefaultImage(post.contentCategory),
      linkedin: `https://www.linkedin.com/feed/update/${post.id}/`,
    };
  });
}