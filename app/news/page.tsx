"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, RefreshCw, Calendar, FileText, ArrowLeft, User, Clock } from "lucide-react"
import type { Article } from "@/lib/articles"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface LinkedInPost {
  id: string
  title: string
  content: string
  publishedAt: string
  url: string
}

interface NewsItem {
  id: string
  title: string
  content: string
  excerpt?: string
  publishedAt: string
  type: "linkedin" | "article"
  url?: string
  author?: string
  tags?: string[]
  featuredImage?: string
}

export default function NewsPage() {
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [allNews, setAllNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLinkedInPosts = async () => {
    try {
      const response = await fetch("/api/linkedin-posts")
      if (!response.ok) return []
      const data = await response.json()
      return data.success ? data.posts : []
    } catch {
      return []
    }
  }

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/articles?status=published")
      if (!response.ok) return []
      const data = await response.json()
      return data.articles || []
    } catch {
      return []
    }
  }

  const combineAndSortNews = (linkedInPosts: LinkedInPost[], articles: Article[]): NewsItem[] => {
    const linkedInNews: NewsItem[] = linkedInPosts.map((post) => ({
      id: `linkedin-${post.id}`,
      title: post.title,
      content: post.content,
      publishedAt: post.publishedAt,
      type: "linkedin",
      url: post.url,
    }))

    const articleNews: NewsItem[] = articles.map((article) => ({
      id: `article-${article.id ?? article._id}`, // fallback to _id
      title: article.title,
      content: article.content,
      excerpt: article.excerpt,
      publishedAt: article.publishedAt,
      type: "article",
      author: article.author,
      tags: article.tags,
      featuredImage: article.featuredImage,
    }))

    return [...linkedInNews, ...articleNews].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  }

  const fetchAllContent = async () => {
    setLoading(true)
    setError(null)
    try {
      const [linkedInData, articlesData] = await Promise.all([fetchLinkedInPosts(), fetchArticles()])
      setLinkedInPosts(linkedInData)
      setArticles(articlesData)
      const combinedNews = combineAndSortNews(linkedInData, articlesData)
      setAllNews(combinedNews)
      if (combinedNews.length === 0) setError("No content available at the moment. Please check back later.")
    } catch {
      setError("Unable to load content. Please try refreshing the page.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllContent()
  }, [])

  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-ZA", { year: "numeric", month: "2-digit", day: "2-digit" })
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-slate-900">Latest News & Updates</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Stay informed with Vigro Energy's latest developments, industry insights, and company announcements
              </p>
            </div>
            {!loading && (
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-vigro-blue rounded-full"></div>
                  <span className="text-slate-600 font-medium">{articles.length} Articles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-vigro-green rounded-full"></div>
                  <span className="text-slate-600 font-medium">{linkedInPosts.length} LinkedIn Posts</span>
                </div>
                <Button
                  onClick={fetchAllContent}
                  disabled={loading}
                  variant="outline"
                  size="sm"
                  className="bg-transparent hover:bg-slate-100"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
              </div>
            )}
          </header>

          {/* Error State */}
          {error && (
            <Card className="mb-12 border-red-200 bg-red-50">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Content Unavailable</h3>
                <p className="text-red-700 mb-6">{error}</p>
                <Button onClick={fetchAllContent} variant="outline" className="bg-transparent">
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse border-0 shadow-lg">
                  <CardHeader>
                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-slate-200 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-200 rounded"></div>
                      <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* News Content */}
          {!loading && allNews.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allNews.map((item) => (
                <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  {item.featuredImage && (
                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={item.featuredImage || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className={`${
                            item.type === "linkedin" ? "bg-vigro-blue text-white" : "bg-vigro-green text-white"
                          } shadow-lg`}
                        >
                          {item.type === "linkedin" ? (
                            <>
                              <ExternalLink className="w-3 h-3 mr-1" />
                              LinkedIn
                            </>
                          ) : (
                            <>
                              <FileText className="w-3 h-3 mr-1" />
                              Article
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    {!item.featuredImage && (
                      <div className="mb-3">
                        <Badge
                          variant="secondary"
                          className={item.type === "linkedin" ? "bg-vigro-blue text-white" : "bg-vigro-green text-white"}
                        >
                          {item.type === "linkedin" ? (
                            <>
                              <ExternalLink className="w-3 h-3 mr-1" />
                              LinkedIn
                            </>
                          ) : (
                            <>
                              <FileText className="w-3 h-3 mr-1" />
                              Article
                            </>
                          )}
                        </Badge>
                      </div>
                    )}

                    <CardTitle className="text-xl font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-vigro-blue transition-colors">
                      {item.title}
                    </CardTitle>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-vigro-blue" />
                        <span>{formatDate(item.publishedAt)}</span>
                      </div>
                      {item.author && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-vigro-blue" />
                          <span className="font-medium">{item.author}</span>
                        </div>
                      )}
                      {item.type === "article" && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-vigro-blue" />
                          <span>{calculateReadTime(item.content)} min read</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt || truncateContent(item.content)}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={`${item.id}-tag-${index}`}
                            variant="outline"
                            className="text-xs bg-vigro-blue/10 text-vigro-blue border-vigro-blue/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {item.tags.length > 3 && (
                          <Badge key={`${item.id}-more-tags`} variant="outline" className="text-xs text-slate-500">
                            +{item.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}

                    {item.type === "linkedin" ? (
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-vigro-blue text-vigro-blue hover:bg-vigro-blue hover:text-white transition-colors"
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        Read on LinkedIn
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Link href={`/news/${item.id.replace("article-", "")}`}>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent border-vigro-green text-vigro-green hover:bg-vigro-green hover:text-white transition-colors"
                        >
                          Read Full Article
                          <FileText className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && allNews.length === 0 && !error && (
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="text-center py-16">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">No Content Available</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  We're working on bringing you the latest news and updates. Please check back soon.
                </p>
                <Button onClick={fetchAllContent} className="bg-vigro-blue hover:bg-vigro-blue/90">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Content
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
