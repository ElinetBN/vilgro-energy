import { ObjectId } from "mongodb"
import { getArticlesCollection } from "./mongodb-direct" // adjust if your helper is named differently

export async function saveArticle(articleData: any) {
  const collection = await getArticlesCollection()
  const now = new Date()

  const result = await collection.insertOne({
    ...articleData,
    createdAt: now,
    updatedAt: now,
  })

  return {
    _id: result.insertedId.toString(),
    ...articleData,
    createdAt: now,
    updatedAt: now,
  }
}
