"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import type { Article } from "@/lib/articles"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchArticle()
  }, [params.id])

  const fetchArticle = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/articles/${params.id}`)

      if (!response.ok) {
        if (response.status === 404) {
          setError("Article not found")
          return
        }
        throw new Error("Failed to fetch article")
      }

      const data = await response.json()
      const foundArticle = data.article

      // Check if article is published
      if (foundArticle.status !== "published") {
        setError("Article not available")
        return
      }

      setArticle(foundArticle)
    } catch (error) {
      console.error("Error fetching article:", error)
      setError("Failed to load article")
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
  
    return new Date(dateString).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return readTime
  }

  const shareArticle = async () => {
    if (navigator.share && article) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-slate-200 border-t-vigro-blue mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading article...</p>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{error || "Article not found"}</h1>
          <p className="text-slate-600 mb-6">The article you're looking for doesn't exist or is no longer available.</p>
          <Link href="/news">
            <Button className="bg-vigro-blue hover:bg-vigro-blue/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header Navigation */}
        <div className="mb-8">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="mb-6 hover:bg-slate-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>

        {/* Article */}
        <article>
          <Card className="mb-8 border-0 shadow-lg bg-white">
            {/* Featured Image */}
            {article.featuredImage && ( // Changed from imageUrl to featuredImage
              <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  src={article.featuredImage || "/placeholder.svg"} // Changed from imageUrl to featuredImage
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <CardHeader className="pb-6">
              <div className="space-y-6">
                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-vigro-blue/10 text-vigro-blue border-vigro-blue/20 hover:bg-vigro-blue/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <CardTitle className="text-4xl font-bold text-slate-900 leading-tight">{article.title}</CardTitle>

                {/* Excerpt */}
                {article.excerpt && (
                  <p className="text-xl text-slate-700 font-medium leading-relaxed border-l-4 border-vigro-blue pl-6 italic">
                    {article.excerpt}
                  </p>
                )}

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-vigro-blue" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-vigro-blue" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-vigro-blue" />
                    <span>{calculateReadTime(article.content)} min read</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={shareArticle}
                    className="flex items-center gap-2 text-slate-600 hover:text-vigro-blue hover:bg-vigro-blue/10"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-slate-800 leading-relaxed text-lg">{article.content}</div>
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    Published by <span className="font-medium text-slate-700">{article.author}</span> on{" "}
                    {formatDate(article.createdAt)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shareArticle}
                    className="border-vigro-blue text-vigro-blue hover:bg-vigro-blue hover:text-white bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Navigation */}
        <div className="text-center">
          <Link href="/news">
            <Button
              variant="outline"
              className="border-vigro-blue text-vigro-blue hover:bg-vigro-blue hover:text-white bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All News
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
