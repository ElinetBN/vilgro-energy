"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAdmin } from "@/contexts/admin-context"
import type { Article } from "@/lib/articles"
import { ArrowLeft, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ImageUpload } from "@/components/image-upload"

interface EditArticlePageProps {
  params: Promise<{ id: string }>
}

export default function EditArticlePage({ params }: EditArticlePageProps) {
  const resolvedParams = React.use(params) // ✅ unwrap params
  const { id } = resolvedParams

  const { isAdmin, loading } = useAdmin()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState<Article & { _id: string } | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    status: "draft" as "draft" | "published",
    tags: "",
    featuredImage: "",
  })

  // Fetch article
  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
      return
    }
    if (isAdmin) fetchArticle()
  }, [isAdmin, loading, router, id])

  const fetchArticle = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/articles/${id}`)
      if (!res.ok) {
        if (res.status === 404) {
          toast({ title: "Article not found", description: "This article does not exist.", variant: "destructive" })
          router.push("/admin/articles")
          return
        }
        throw new Error("Failed to fetch article")
      }

      const data = await res.json()
      const foundArticle = data.article
      if (!foundArticle || !foundArticle._id) throw new Error("Invalid article data")

      setArticle(foundArticle)
      setFormData({
        title: foundArticle.title,
        content: foundArticle.content,
        excerpt: foundArticle.excerpt,
        author: foundArticle.author,
        status: foundArticle.status,
        tags: foundArticle.tags?.join(", ") || "",
        featuredImage: foundArticle.featuredImage || "",
      })
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Failed to load article", variant: "destructive" })
      router.push("/admin/articles")
    } finally {
      setIsLoading(false)
    }
  }

  // Submit updated article
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!article) return

    setIsSubmitting(true)
    try {
      const res = await fetch(`/api/articles/${article._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
        }),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText || "Failed to update article")
      }

      const data = await res.json()
      toast({ title: "Article updated", description: `"${data.article.title}" updated successfully.` })
      router.push("/admin/articles")
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Failed to update article", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (loading || isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
    </div>
  )
  if (!isAdmin || !article) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin/articles">
                <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2" />Back to Articles</Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Edit Article</h1>
                <p className="text-sm text-gray-500">Update your article content</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Article Details</CardTitle>
              <CardDescription>Update your article below</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input id="title" value={formData.title} onChange={(e) => handleChange("title", e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" value={formData.author} onChange={(e) => handleChange("author", e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea id="excerpt" value={formData.excerpt} onChange={(e) => handleChange("excerpt", e.target.value)} rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content *</Label>
                <Textarea id="content" value={formData.content} onChange={(e) => handleChange("content", e.target.value)} rows={12} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" value={formData.tags} onChange={(e) => handleChange("tags", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <ImageUpload value={formData.featuredImage} onChange={(url) => handleChange("featuredImage", url)} label="Featured Image" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Link href="/admin/articles"><Button variant="outline">Cancel</Button></Link>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : <><Save className="w-4 h-4 mr-2" />Update Article</>}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
