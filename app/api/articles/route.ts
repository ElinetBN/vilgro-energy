import { NextRequest, NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { getArticlesCollection } from "@/lib/mongodb-direct"

// Helper: generate unique slug
const generateSlug = async (title: string) => {
  const collection = await getArticlesCollection()
  let slug = title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
  let exists = await collection.findOne({ slug })
  let counter = 1

  while (exists) {
    slug = `${slug}-${counter}`
    exists = await collection.findOne({ slug })
    counter++
  }

  return slug
}

// POST: create new article
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, content, excerpt, author, status, tags, featuredImage } = body

    if (!title || !content || !excerpt) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const slug = await generateSlug(title)
    const collection = await getArticlesCollection()

    const result = await collection.insertOne({
      title,
      content,
      excerpt,
      author: author || "Vigro Energy Team",
      status: status || "draft",
      tags: Array.isArray(tags) ? tags : [],
      featuredImage: featuredImage || undefined,
      slug,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const article = await collection.findOne({ _id: result.insertedId })
    return NextResponse.json({ article: { ...article, _id: article._id.toString() } }, { status: 201 })
  } catch (error: any) {
    console.error("Error creating article:", error)
    return NextResponse.json({ error: "Failed to create article", details: error.message }, { status: 500 })
  }
}

// GET: all or single article
export async function GET(req: NextRequest, { params }: { params?: { id?: string } }) {
  try {
    const collection = await getArticlesCollection()

    if (params?.id) {
      const article = await collection.findOne({ _id: new ObjectId(params.id) })
      if (!article) return NextResponse.json({ error: "Article not found" }, { status: 404 })
      return NextResponse.json({ article: { ...article, _id: article._id.toString() } })
    }

    const articles = await collection.find({}).toArray()
    const formatted = articles.map(a => ({ ...a, _id: a._id.toString() }))
    return NextResponse.json({ articles: formatted })
  } catch (error: any) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ error: "Failed to fetch articles", details: error.message }, { status: 500 })
  }
}

// PUT: update article by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    const collection = await getArticlesCollection()

    const result = await collection.updateOne({ _id: new ObjectId(params.id) }, { $set: body })
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    const updatedArticle = await collection.findOne({ _id: new ObjectId(params.id) })
    return NextResponse.json({ article: { ...updatedArticle, _id: updatedArticle._id.toString() } })
  } catch (error: any) {
    console.error("Error updating article:", error)
    return NextResponse.json({ error: "Failed to update article", details: error.message }, { status: 500 })
  }
}

// DELETE: remove article by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const collection = await getArticlesCollection()
    const result = await collection.deleteOne({ _id: new ObjectId(params.id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting article:", error)
    return NextResponse.json({ error: "Failed to delete article", details: error.message }, { status: 500 })
  }
}
