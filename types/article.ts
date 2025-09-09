export interface Article {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    linkedin: string;
    content?: string;
  }
  
  export interface LinkedInPost {
    id: string;
    commentary: string;
    createdAt: number;
    visibility: "PUBLIC" | "CONNECTIONS";
  }