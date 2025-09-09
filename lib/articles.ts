import { connectToDatabase } from "./mongodb-direct"
import ArticleModel, { type IArticle } from "@/models/article"

export interface Article {
  _id?: string
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: string
  status: "draft" | "published"
  slug: string
  tags: string[]
  imageUrl?: string
  readTime?: number
}

function convertToArticle(doc: IArticle): Article {
  return {
    _id: doc._id.toString(),
    id: doc._id.toString(),
    title: doc.title,
    content: doc.content,
    excerpt: doc.excerpt,
    author: doc.author,
    publishedAt: doc.publishedAt?.toISOString() || doc.createdAt.toISOString(),
    status: doc.status,
    slug: doc.slug,
    tags: doc.tags,
    imageUrl: doc.featuredImage,
    readTime: doc.readTime,
  }
}

export async function getArticles(): Promise<Article[]> {
  try {
    await connectToDatabase()
    const articles = await ArticleModel.find({}).sort({ createdAt: -1 }).lean()
    return articles.map(convertToArticle)
  } catch (error) {
    console.error("Error fetching articles:", error)
    return []
  }
}

export async function saveArticle(article: Omit<Article, "id" | "publishedAt">): Promise<Article> {
  try {
    await connectToDatabase()

    const baseSlug = article.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    let uniqueSlug = baseSlug
    let counter = 1

    // Check if slug already exists and make it unique
    while (await ArticleModel.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${counter}`
      counter++
    }

    const newArticle = new ArticleModel({
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      author: article.author || "Admin",
      status: article.status,
      tags: article.tags,
      featuredImage: article.imageUrl,
      slug: uniqueSlug, // Set unique slug explicitly
    })

    const savedArticle = await newArticle.save()
    return convertToArticle(savedArticle)
  } catch (error) {
    console.error("Error saving article:", error)
    if (error instanceof Error) {
      if (error.message.includes("duplicate key")) {
        throw new Error("Article with this title already exists")
      }
      if (error.message.includes("validation failed")) {
        throw new Error(`Validation error: ${error.message}`)
      }
      throw new Error(`Database error: ${error.message}`)
    }
    throw new Error("Failed to save article")
  }
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<Article | null> {
  try {
    await connectToDatabase()

    const mongooseUpdates: Partial<IArticle> = {
      ...(updates.title && { title: updates.title }),
      ...(updates.content && { content: updates.content }),
      ...(updates.excerpt && { excerpt: updates.excerpt }),
      ...(updates.author && { author: updates.author }),
      ...(updates.status && { status: updates.status }),
      ...(updates.tags && { tags: updates.tags }),
      ...(updates.imageUrl && { featuredImage: updates.imageUrl }),
    }

    const updatedArticle = await ArticleModel.findByIdAndUpdate(id, mongooseUpdates, {
      new: true,
      runValidators: true,
    }).lean()

    if (!updatedArticle) return null
    return convertToArticle(updatedArticle)
  } catch (error) {
    console.error("Error updating article:", error)
    return null
  }
}

export async function deleteArticle(id: string): Promise<boolean> {
  try {
    await connectToDatabase()
    const result = await ArticleModel.findByIdAndDelete(id)
    return !!result
  } catch (error) {
    console.error("Error deleting article:", error)
    return false
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  try {
    await connectToDatabase()
    const article = await ArticleModel.findById(id).lean()
    if (!article) return null
    return convertToArticle(article)
  } catch (error) {
    console.error("Error fetching article:", error)
    return null
  }
}

export async function getPublishedArticles(): Promise<Article[]> {
  try {
    await connectToDatabase()
    const articles = await ArticleModel.findPublished().lean()
    return articles.map(convertToArticle)
  } catch (error) {
    console.error("Error fetching published articles:", error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    await connectToDatabase()
    const article = await ArticleModel.findBySlug(slug).lean()
    if (!article) return null
    return convertToArticle(article)
  } catch (error) {
    console.error("Error fetching article by slug:", error)
    return null
  }
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
  try {
    await connectToDatabase()
    const articles = await ArticleModel.findByTag(tag).lean()
    return articles.map(convertToArticle)
  } catch (error) {
    console.error("Error fetching articles by tag:", error)
    return []
  }
}
