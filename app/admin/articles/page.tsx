"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAdmin } from "@/contexts/admin-context"
import type { Article } from "@/lib/articles"
import { PlusCircle, Edit, Trash2, ArrowLeft, Eye, Calendar, User } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function ArticlesPage() {
  const { isAdmin, loading } = useAdmin()
  const router = useRouter()
  const { toast } = useToast()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
      return
    }

    if (isAdmin) {
      fetchArticles()
    }
  }, [isAdmin, loading, router])

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      console.log("[v0] Fetching articles from API...")

      const response = await fetch("/api/articles")
      console.log("[v0] API response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] API error response:", errorText)
        throw new Error(`Failed to fetch articles: ${response.status}`)
      }

      const data = await response.json()
      console.log("[v0] API response data:", data)
      console.log("[v0] Number of articles received:", data.articles?.length || 0)

      setArticles(data.articles || [])
    } catch (error) {
      console.error("[v0] Error fetching articles:", error)
      toast({
        title: "Error",
        description: "Failed to load articles. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id: string) => {
    try {
      console.log("[v0] Attempting to delete article with ID:", _id)

      const response = await fetch(`/api/articles/${_id}`, {
        method: "DELETE",
      })

      console.log("[v0] Delete API response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("[v0] Delete API error response:", errorText)
        throw new Error(`Failed to delete article: ${response.status} - ${errorText}`)
      }

      console.log("[v0] Article deleted successfully")

      // Use _id instead of id for filtering
      setArticles(articles.filter((article) => article._id !== _id))
      toast({
        title: "Success",
        description: "Article deleted successfully.",
      })
    } catch (error) {
      console.error("[v0] Error deleting article:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete article. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleViewArticle = (_id: string) => {
    router.push(`/admin/articles/${_id}/view`)
  }

  const handleEditArticle = (_id: string) => {
    router.push(`/admin/articles/${_id}/edit`)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-slate-200 border-t-vigro-blue mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading articles...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) return null

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-slate-900">Articles</h1>
                <p className="text-sm font-medium text-slate-500">Manage your published content</p>
              </div>
            </div>
            <Link href="/admin/articles/new">
              <Button className="bg-vigro-blue hover:bg-vigro-blue/90 text-white font-semibold">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="text-center py-16">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PlusCircle className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">No articles yet</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Get started by creating your first article to share news and updates with your audience.
              </p>
              <Link href="/admin/articles/new">
                <Button className="bg-vigro-blue hover:bg-vigro-blue/90 text-white font-semibold px-6 py-3">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Create Your First Article
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {articles.map((article) => (
              <Card
                key={article._id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1 min-w-0">
                      {article.featuredImage && (
                        <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden mb-4">
                          <img
                            src={article.featuredImage || "/placeholder.svg"}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="mb-3">
                        <Badge
                          variant={article.status === "published" ? "default" : "secondary"}
                          className={
                            article.status === "published" ? "bg-vigro-green text-white" : "bg-slate-200 text-slate-700"
                          }
                        >
                          {article.status === "published" ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-vigro-blue" />
                          <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-vigro-blue" />
                          <span>{formatDate(article.createdAt)}</span>
                        </div>
                      </div>
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
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
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      {article.status === "published" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                          onClick={() => handleViewArticle(article._id)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => handleEditArticle(article._id)}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Article</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{article.title}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(article._id)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
