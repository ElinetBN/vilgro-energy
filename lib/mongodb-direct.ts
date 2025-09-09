import { MongoClient, ServerApiVersion, ObjectId } from "mongodb"

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

async function getMongoClient(): Promise<MongoClient> {
  if (clientPromise) return clientPromise

  if (!process.env.MONGO_URI) {
    console.error("[v0] MONGO_URI environment variable is not set")
    throw new Error("MONGO_URI environment variable is not set")
  }

  console.log("[v0] Connecting to MongoDB...")
  client = new MongoClient(process.env.MONGO_URI, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })

  clientPromise = client
    .connect()
    .then(async (connectedClient) => {
      console.log("[v0] Successfully connected to MongoDB")
      await connectedClient.db("admin").command({ ping: 1 })
      console.log("[v0] MongoDB ping successful")
      return connectedClient
    })
    .catch((error) => {
      console.error("[v0] MongoDB connection failed:", error)
      clientPromise = null
      client = null
      throw error
    })

  return clientPromise
}

export async function getDatabase() {
  const client = await getMongoClient()
  const dbName = process.env.DB_NAME || "vilgro-energy"
  console.log("[v0] Using database:", dbName)
  return client.db(dbName)
}

export async function getArticlesCollection() {
  const db = await getDatabase()
  return db.collection("articles")
}

export async function createArticle(articleData: any) {
  console.log("[v0] Creating article:", articleData.title)
  const collection = await getArticlesCollection()
  const article = {
    ...articleData,
    createdAt: new Date(),
    updatedAt: new Date(),
    slug: articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }
  const result = await collection.insertOne(article)
  console.log("[v0] Article created successfully:", result.insertedId)
  return { ...article, id: result.insertedId.toString() }
}

export async function getAllArticles() {
  const collection = await getArticlesCollection()
  const articles = await collection.find({}).sort({ createdAt: -1 }).toArray()
  return articles.map((article) => ({
    ...article,
    id: article._id.toString(),
    imageUrl: article.featuredImage || "/open-book-knowledge.png",
  }))
}

export async function getPublishedArticles() {
  const collection = await getArticlesCollection()
  const articles = await collection.find({ status: "published" }).sort({ createdAt: -1 }).toArray()
  return articles.map((article) => ({
    ...article,
    id: article._id.toString(),
    imageUrl: article.featuredImage || "/open-book-knowledge.png",
  }))
}

// ✅ Only one getArticleById now
export async function getArticleById(id: string) {
  try {
    console.log("[v0] Fetching article by ID:", id)
    const collection = await getArticlesCollection()
    const objectId = new ObjectId(id)
    const article = await collection.findOne({ _id: objectId })

    if (!article) {
      console.log("[v0] Article not found:", id)
      return null
    }

    return {
      ...article,
      id: article._id.toString(),
      imageUrl: article.featuredImage || "/open-book-knowledge.png",
    }
  } catch (error) {
    console.error("[v0] Error getting article by ID:", error)
    return null
  }
}

export async function updateArticle(id: string, updateData: any) {
  try {
    console.log("[v0] Updating article:", id)
    const collection = await getArticlesCollection()

    const updateFields: any = { ...updateData, updatedAt: new Date() }
    if (updateData.title) {
      updateFields.slug = updateData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
    }

    const objectId = new ObjectId(id)
    const result = await collection.updateOne({ _id: objectId }, { $set: updateFields })

    if (result.matchedCount === 0) {
      console.log("[v0] Article not found for update:", id)
      throw new Error("Article not found")
    }

    console.log("[v0] Article updated successfully:", id)
    return await getArticleById(id)
  } catch (error) {
    console.error("[v0] Error updating article:", error)
    throw error
  }
}

export async function deleteArticle(id: string) {
  try {
    console.log("[v0] Deleting article:", id)
    const collection = await getArticlesCollection()
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount > 0
  } catch (error) {
    console.error("[v0] Error deleting article:", error)
    throw error
  }
}

export async function testConnection() {
  try {
    console.log("[v0] Testing MongoDB connection...")
    const db = await getDatabase()
    await db.command({ ping: 1 })
    const collection = await getArticlesCollection()
    const count = await collection.countDocuments()
    console.log("[v0] Connection test successful, articles count:", count)
    return { success: true, articlesCount: count }
  } catch (error) {
    console.error("[v0] Connection test failed:", error)
    return { success: false, error: error.message }
  }
}

export async function saveArticle(articleData: any) {
  return await createArticle(articleData)
}
