import { type NextRequest, NextResponse } from "next/server"
import { getArticleById, updateArticle, deleteArticle } from "@/lib/mongodb-direct"
import { ObjectId } from "mongodb"

// GET /api/articles/:id
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params // ✅ await params
    const article = await getArticleById(id)

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({ article })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch article", details: error.message || "Unknown error" },
      { status: 500 }
    )
  }
}

// PUT /api/articles/:id
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params // ✅ await params
    const body = await request.json()

    const article = await updateArticle(id, body)

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({ article })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update article", details: error.message || "Unknown error" },
      { status: 500 }
    )
  }
}

// DELETE /api/articles/:id
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const success = await deleteArticle(id)

    if (!success) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Article deleted successfully" })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete article", details: error.message || "Unknown error" },
      { status: 500 }
    )
  }
}
