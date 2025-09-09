import { getDatabase, getAllArticles } from "@/lib/mongodb-direct"

export async function GET() {
  try {
    console.log("Testing MongoDB connection...")

    // Test database connection
    const db = await getDatabase()
    console.log(" Database connected successfully")

    // Test articles retrieval
    const articles = await getAllArticles()
    console.log("Articles retrieved:", articles.length)

    return Response.json({
      success: true,
      message: "MongoDB connection successful",
      database: db.databaseName,
      articlesCount: articles.length,
      articles: articles.slice(0, 10), // Show first 6 articles
    })
  } catch (error) {
    console.error(" MongoDB connection test failed:", error)
    return Response.json(
      {
        success: false,
        error: error.message,
        details: "Failed to connect to MongoDB",
      },
      { status: 500 },
    )
  }
}
