import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, LogOut, User } from "lucide-react"
import Link from "next/link"
import { ContentProtection } from "@/components/content-protection"
import { Progress } from "@/components/ui/progress"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: customer } = await supabase.from("customers").select("id").eq("email", user.email!).single()

  if (!customer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <Card className="bg-black/40 border-gray-800 max-w-md">
          <CardHeader>
            <CardTitle className="text-white">No Purchases Found</CardTitle>
            <CardDescription className="text-gray-400">
              We couldn't find any purchases associated with your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/#pricing">
              <Button className="w-full">Browse Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const { data: orders } = await supabase
    .from("orders")
    .select("*, products(*)")
    .eq("customer_id", customer.id)
    .eq("status", "completed")
    .order("created_at", { ascending: false })

  const highestTier = orders?.reduce((max, order) => {
    const productId = order.product_id
    return productId > max ? productId : max
  }, 0)

  const { data: accessibleProducts } = await supabase
    .from("products")
    .select("*")
    .lte("id", highestTier || 0)
    .order("id", { ascending: true })

  const files: Array<{ name: string; url: string }> = []
  accessibleProducts?.forEach((product) => {
    if (product.file_url) {
      try {
        const urls = JSON.parse(product.file_url)
        if (Array.isArray(urls)) {
          urls.forEach((urlObj: { name: string; url: string }) => {
            files.push(urlObj)
          })
        }
      } catch (e) {
        console.error("Error parsing file URLs:", e)
      }
    }
  })

  const totalFilesByTier: { [key: number]: number } = {
    1: 1, // The Manual: 1 file
    2: 8, // The Guides: 8 files
    3: 22, // Mastery: 22 files
  }
  const totalPossibleFiles = totalFilesByTier[highestTier || 0] || 0
  const progressPercentage = totalPossibleFiles > 0 ? (files.length / totalPossibleFiles) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 select-none">
      <ContentProtection userEmail={user.email!} />

      <header className="border-b border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/kickcard-academy-logo.png" alt="Kickcard Academy" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <User className="h-4 w-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <form action="/auth/logout" method="post">
              <Button variant="outline" size="sm" type="submit">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-white">Welcome to Your Dashboard</h1>
            <p className="text-gray-300">Access all your purchased course materials below</p>
          </div>

          {files.length > 0 && (
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Your Learning Progress</CardTitle>
                <CardDescription className="text-gray-400">
                  You've unlocked {files.length} of {totalPossibleFiles} resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-sm text-gray-400 mt-2">
                  {progressPercentage === 100
                    ? "🎉 You have access to all available content!"
                    : `Upgrade to unlock ${totalPossibleFiles - files.length} more resources`}
                </p>
              </CardContent>
            </Card>
          )}

          {orders && orders.length > 0 ? (
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Your Purchases</CardTitle>
                <CardDescription className="text-gray-400">
                  You have access to {files.length} course materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                      <div>
                        <p className="font-semibold text-white">{order.products.name}</p>
                        <p className="text-sm text-gray-400">
                          Purchased on {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-pink-500">£{(order.amount / 100).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">No Purchases Yet</CardTitle>
                <CardDescription className="text-gray-400">You haven't purchased any courses yet</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/#pricing">
                  <Button className="w-full">Browse Courses</Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {files.length > 0 && (
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Your Course Materials</CardTitle>
                <CardDescription className="text-gray-400">Download your guides and resources below</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {files.map((file, index) => (
                    <a
                      key={index}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-pink-500/10 rounded-lg">
                          <Download className="h-5 w-5 text-pink-500" />
                        </div>
                        <span className="font-medium text-white group-hover:text-pink-500 transition-colors">
                          {file.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">PDF</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
