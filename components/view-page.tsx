"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAdmin } from "@/contexts/admin-context"
import type { Article } from "@/lib/articles"
import { ArrowLeft, Edit, Calendar, User, Tag } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ViewArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params promise using React.use()
  const resolvedParams = React.use(params)
  const { id } = resolvedParams
  
  const { isAdmin, loading } = useAdmin()
  const router = useRouter()
  const { toast } = useToast()
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
      return
    }

    if (isAdmin) {
      fetchArticle()
    }
  }, [isAdmin, loading, router, id])

  const fetchArticle = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/articles/${id}`)

      if (!response.ok) {
        if (response.status === 404) {
          toast({
            title: "Article not found",
            description: "The article you're looking for doesn't exist.",
            variant: "destructive",
          })
          router.push("/admin/articles")
          return
        }
        throw new Error("Failed to fetch article")
      }

      const data = await response.json()
      setArticle(data.article)
    } catch (error) {
      console.error("Error fetching article:", error)
      toast({
        title: "Error",
        description: "Failed to load article. Please try again.",
        variant: "destructive",
      })
      router.push("/admin/articles")
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!isAdmin || !article) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin/articles">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Articles
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">View Article</h1>
                <p className="text-sm text-gray-500">Article details and content</p>
              </div>
            </div>
            <Link href={`/admin/articles/${article.id}/edit`}>
              <Button>
                <Edit className="w-4 h-4 mr-2" />
                Edit Article
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            {/* Status Badge */}
            <div className="mb-4">
              <Badge
                variant={article.status === "published" ? "default" : "secondary"}
                className={
                  article.status === "published" 
                    ? "bg-green-600 text-white" 
                    : "bg-gray-200 text-gray-700"
                }
              >
                {article.status === "published" ? "Published" : "Draft"}
              </Badge>
            </div>

            {/* Featured Image */}
            {article.featuredImage && (
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Title */}
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </CardTitle>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published {formatDate(article.publishedAt)}</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <Tag className="w-4 h-4 text-gray-500 mr-2" />
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Excerpt */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Excerpt</h3>
              <p className="text-gray-600 italic">{article.excerpt}</p>
            </div>
          </CardHeader>

          <CardContent>
            {/* Article Content */}
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content</h3>
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {article.content}
              </div>
            </div>

            {/* Article Metadata */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Article ID:</span>
                  <span className="ml-2 text-gray-600">{article.id}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Status:</span>
                  <span className="ml-2 text-gray-600 capitalize">{article.status}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Created:</span>
                  <span className="ml-2 text-gray-600">{formatDate(article.createdAt)}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Updated:</span>
                  <span className="ml-2 text-gray-600">{formatDate(article.updatedAt)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}