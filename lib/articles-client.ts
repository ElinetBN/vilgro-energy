export interface Article {
  _id?: string
  title: string
  content: string
  excerpt: string
  author: string
  status: "draft" | "published"
  tags: string[]
  imageUrl?: string
  featuredImage?: string
  slug?: string
  readTime?: number
  createdAt?: Date
  updatedAt?: Date
}

// Create a new article
export const createArticle = async (
  articleData: Omit<Article, "_id" | "createdAt" | "updatedAt">
): Promise<Article> => {
  if (!articleData.title || !articleData.content || !articleData.excerpt) {
    throw new Error("Title, content, and excerpt are required")
  }

  if (articleData.content.trim().length < 10) {
    throw new Error("Content must be at least 10 characters long")
  }

  const response = await fetch("/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(errorData.details || errorData.error || `Failed to create article: ${response.status}`)
  }

  const data = await response.json()
  return data.article
}

// Fetch all articles
export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch("/api/articles")
  if (!response.ok) throw new Error("Failed to fetch articles")
  const data = await response.json()
  return data.articles
}

// Fetch single article by ID
export const getArticleById = async (id: string): Promise<Article> => {
  const response = await fetch(`/api/articles/${id}`)
  if (!response.ok) throw new Error("Failed to fetch article")
  const data = await response.json()
  return data.article
}

// Update an article
export const updateArticle = async (id: string, articleData: Partial<Article>): Promise<Article> => {
  const response = await fetch(`/api/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(errorData.details || errorData.error || `Failed to update article: ${response.status}`)
  }

  const data = await response.json()
  return data.article
}

// Delete an article
export const deleteArticle = async (id: string): Promise<void> => {
  const response = await fetch(`/api/articles/${id}`, { method: "DELETE" })
  if (!response.ok) throw new Error("Failed to delete article")
}

// Fetch only published articles
export const getPublishedArticles = async (): Promise<Article[]> => {
  const response = await fetch("/api/articles?status=published")
  if (!response.ok) throw new Error("Failed to fetch published articles")
  const data = await response.json()
  return data.articles
}
