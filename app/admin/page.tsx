"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAdmin } from "@/contexts/admin-context"
import { AdminRouteGuard } from "@/components/admin-route-guide"
import { PlusCircle, FileText, BarChart3, LogOut, Activity, Database } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const { isAdmin, logout, loading } = useAdmin()
  const router = useRouter()
  const { toast } = useToast()
  const [testingConnection, setTestingConnection] = useState(false)

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push("/admin/login")
    }
  }, [isAdmin, loading, router])

  const testMongoConnection = async () => {
    setTestingConnection(true)
    try {
      const response = await fetch("/api/test-mongodb")
      const result = await response.json()

      if (result.connected) {
        toast({
          title: "Database Connected ✅",
          description: `Successfully connected to ${result.database}`,
        })
      } else {
        toast({
          title: "Connection Failed ❌",
          description: result.error || "Unable to connect to database",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Test Failed ❌",
        description: "Unable to test database connection",
        variant: "destructive",
      })
    } finally {
      setTestingConnection(false)
    }
  }

  const testArticleCreation = async () => {
    try {
      const response = await fetch("/api/debug-article", { method: "POST" })
      const result = await response.json()

      if (result.success) {
        toast({
          title: "Article Test Passed ✅",
          description: `Test article "${result.article.title}" created successfully`,
        })
      } else {
        toast({
          title: "Article Test Failed ❌",
          description: result.error || "Unable to create test article",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Test Failed ❌",
        description: "Unable to test article creation",
        variant: "destructive",
      })
    }
  }

  const testDatabaseData = async () => {
    try {
      const response = await fetch("/api/test-db-data")
      const result = await response.json()

      if (result.success) {
        console.log("[v0] Database test results:", result)
        toast({
          title: "Database Data Test ✅",
          description: `Found ${result.totalArticles} total articles, ${result.publishedArticles} published`,
        })
      } else {
        console.error("[v0] Database test failed:", result)
        toast({
          title: "Database Test Failed ❌",
          description: result.error || "Unable to retrieve database data",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Database test error:", error)
      toast({
        title: "Test Failed ❌",
        description: "Unable to test database data",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-3 border-slate-200 border-t-vigro-blue mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <AdminRouteGuard>
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-vigro-blue">Vigro Energy Admin</h1>
                <p className="text-sm font-medium text-slate-500">Content Management Dashboard</p>
              </div>
              <div className="flex items-center gap-3">
                
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="flex items-center gap-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors bg-transparent"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Welcome Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Welcome back</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Manage your content, publish articles, and monitor your website's performance from this central dashboard.
            </p>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Create Article Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-vigro-green rounded-xl flex items-center justify-center mb-4">
                  <PlusCircle className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Create Article</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Publish new articles and updates to keep your audience informed about Vigro Energy.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href="/admin/articles/new">
                <Button variant="outline"
                    className="w-full border-vigro-green text-vigro-green hover:bg-vigro-green/10 hover:border-vigro-green font-semibold py-3 rounded-lg transition-colors bg-transparent"
                  >
                    New Article
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Manage Articles Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-vigro-green rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Manage Articles</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Edit, update, or remove existing articles. Keep your content fresh and relevant.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href="/admin/articles">
                  <Button
                    variant="outline"
                    className="w-full border-vigro-green text-vigro-green hover:bg-vigro-green/10 hover:border-vigro-green font-semibold py-3 rounded-lg transition-colors bg-transparent"
                  >
                    View Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Analytics Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-vigro-orange rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Analytics</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Monitor website performance, track engagement, and analyze content effectiveness.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="outline"
                  className="w-full border-vigro-orange text-vigro-orange font-semibold py-3 rounded-lg opacity-60 cursor-not-allowed bg-transparent"
                  disabled
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity Section */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Recent Activity</CardTitle>
                  <CardDescription className="text-slate-600">
                    Latest actions and updates across your dashboard
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No recent activity</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">
                  Start by creating your first article to see activity updates and engagement metrics here.
                </p>
                <Link href="/admin/articles/new">
                  <Button className="bg-vigro-blue hover:bg-vigro-blue/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Create Your First Article
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </AdminRouteGuard>
  )
}
