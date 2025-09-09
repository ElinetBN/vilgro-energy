"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAdmin } from "@/contexts/admin-context"
import type { Article } from "@/lib/articles"
import { ArrowLeft, Edit, Calendar, User, Tag, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { use } from "react"

interface ArticleViewPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ArticleViewPage({ params }: ArticleViewPageProps) {
  const resolvedParams = use(params)
  const { isAdmin, loading } = useAdmin()
  const router = useRouter()
  const { toast } = useToast()
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
      return
    }

    if (isAdmin && resolvedParams.id) {
      fetchArticle()
    }
  }, [isAdmin, loading, router, resolvedParams.id])

  const fetchArticle = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Enhanced logging
      console.log("[DEBUG] Article ID from params:", resolvedParams.id)
      console.log("[DEBUG] Article ID type:", typeof resolvedParams.id)
      console.log("[DEBUG] Full API URL:", `/api/articles/${resolvedParams.id}`)

      const response = await fetch(`/api/articles/${resolvedParams.id}`)

      console.log("[DEBUG] Response status:", response.status)
      console.log("[DEBUG] Response ok:", response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[DEBUG] API Error Response:", response.status, errorText)
        
        // Parse error message if it's JSON
        let errorMessage = errorText
        try {
          const errorData = JSON.parse(errorText)
          errorMessage = errorData.error || errorData.message || errorText
        } catch (e) {
          // Keep original error text if not JSON
        }

        // Set specific error state
        setError(`${response.status}: ${errorMessage}`)
        
        // Show toast with more context
        toast({
          title: "Error Loading Article",
          description: `Article ID "${resolvedParams.id}" - ${errorMessage}`,
          variant: "destructive",
          action: (
            <Button variant="outline" size="sm" onClick={fetchArticle}>
              Retry
            </Button>
          ),
        })
        return
      }

      const data = await response.json()
      console.log("[DEBUG] Article data received:", data)

      setArticle(data.article || data)
    } catch (error) {
      console.error("[DEBUG] Fetch error:", error)
      const errorMsg = error instanceof Error ? error.message : "Network or parsing error"
      setError(errorMsg)
      
      toast({
        title: "Connection Error",
        description: `Failed to fetch article: ${errorMsg}`,
        variant: "destructive",
        action: (
          <Button variant="outline" size="sm" onClick={fetchArticle}>
            Retry
          </Button>
        ),
      })
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-slate-200 border-t-vigro-blue mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading article...</p>
          <p className="text-xs text-slate-400 mt-2">ID: {resolvedParams.id}</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) return null

  // Enhanced error display
  if (error && !article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-lg">
          <CardContent className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Failed to Load Article</h3>
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
              <p className="text-sm text-red-800">
                <strong>Error:</strong> {error}
              </p>
              <p className="text-xs text-red-600 mt-1">
                Article ID: <code className="bg-red-100 px-1 rounded">{resolvedParams.id}</code>
              </p>
            </div>
            
            {/* Debug information */}
            <details className="text-left mb-4">
              <summary className="cursor-pointer text-sm text-slate-600 hover:text-slate-800">
                Debug Information
              </summary>
              <div className="mt-2 p-3 bg-slate-100 rounded text-xs font-mono">
                <div>Article ID: {resolvedParams.id}</div>
                <div>ID Type: {typeof resolvedParams.id}</div>
                <div>API URL: /api/articles/{resolvedParams.id}</div>
                <div>Error: {error}</div>
              </div>
            </details>

            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={fetchArticle}>
                Retry
              </Button>
              <Link href="/admin/articles">
                <Button variant="outline">Back to Articles</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center py-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Article Not Found</h3>
            <p className="text-slate-600 mb-4">
              The article with ID "{resolvedParams.id}" doesn't exist or couldn't be loaded.
            </p>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={fetchArticle}>
                Retry
              </Button>
              <Link href="/admin/articles">
                <Button variant="outline">Back to Articles</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <Link href="/admin/articles">
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Articles
                </Button>
              </Link>
              <div className="space-y-1">
                <h1 className="text-xl font-bold text-slate-900">View Article</h1>
                <p className="text-sm font-medium text-slate-500">Read-only view</p>
              </div>
            </div>
            <Link href={`/admin/articles/${article.id}/edit`}>
              <Button className="bg-vigro-blue hover:bg-vigro-blue/90 text-white font-semibold">
                <Edit className="w-4 h-4 mr-2" />
                Edit Article
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-6">
            {/* Status Badge */}
            <div className="mb-4">
              <Badge
                variant={article.status === "published" ? "default" : "secondary"}
                className={article.status === "published" ? "bg-vigro-green text-white" : "bg-slate-200 text-slate-700"}
              >
                {article.status === "published" ? "Published" : "Draft"}
              </Badge>
            </div>

            {/* Title */}
            <CardTitle className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{article.title}</CardTitle>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-vigro-blue" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-vigro-blue" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <Tag className="w-4 h-4 text-vigro-blue mr-2" />
                {article.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs bg-vigro-blue/10 text-vigro-blue border-vigro-blue/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {article.featuredImage && (
              <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden mb-6">
                <img
                  src={article.featuredImage || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Excerpt */}
            {article.excerpt && (
              <div className="bg-slate-50 p-4 rounded-lg mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Excerpt</h3>
                <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
              </div>
            )}
          </CardHeader>

          <CardContent>
            {/* Article Content */}
            <div className="prose prose-slate max-w-none">
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">{article.content}</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}