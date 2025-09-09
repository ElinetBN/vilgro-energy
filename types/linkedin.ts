// types/linkedin.ts
export interface LinkedInProfile {
  id: string;
  firstName?: {
    localized: Record<string, string>;
    preferredLocale: {
      country: string;
      language: string;
    };
  };
  lastName?: {
    localized: Record<string, string>;
    preferredLocale: {
      country: string;
      language: string;
    };
  };
  profilePicture?: {
    displayImage: string;
  };
}

export interface LinkedInText {
  text: string;
  attributes?: Array<any>;
}

export interface LinkedInMedia {
  media?: string;
  title?: LinkedInText;
  description?: LinkedInText;
  thumbnails?: Array<{
    url: string;
  }>;
}

export interface LinkedInContent {
  media?: LinkedInMedia[];
  contentEntities?: Array<{
    entityLocation: string;
    thumbnails: Array<{
      resolvedUrl: string;
    }>;
  }>;
}

export interface LinkedInPost {
  id: string;
  text?: LinkedInText;
  content?: LinkedInContent;
  created?: {
    time: number;
  };
  owner?: string;
  lastModified?: {
    time: number;
  };
  distribution?: {
    linkedInDistributionTarget: any;
  };
}

export interface LinkedInApiResponse {
  success: boolean;
  posts: LinkedInPost[];
  profile?: LinkedInProfile;
  error?: string;
  message?: string;
}

export interface ApiError {
  error: string;
  message: string;
}