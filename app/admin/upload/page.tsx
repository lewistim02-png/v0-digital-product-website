"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, FileText } from "lucide-react"

const products = [
  {
    id: 1,
    name: "The Manual",
    price: "£97",
    expectedFiles: 1,
    description: "Complete guide to sneaker and card reselling fundamentals",
  },
  {
    id: 2,
    name: "The Guides",
    price: "£297",
    expectedFiles: 7,
    description: "Advanced strategies and insider techniques",
  },
  {
    id: 3,
    name: "Mastery",
    price: "£997",
    expectedFiles: 14,
    description: "Elite program with personal mentorship",
  },
]

export default function UploadPage() {
  const [urls, setUrls] = useState<Record<number, string>>({})
  const [saving, setSaving] = useState<Record<number, boolean>>({})
  const [saved, setSaved] = useState<Record<number, boolean>>({})
  const [errors, setErrors] = useState<Record<number, string>>({})

  const handleSave = async (productId: number) => {
    const urlText = urls[productId]

    if (!urlText || !urlText.trim()) {
      setErrors((prev) => ({ ...prev, [productId]: "Please enter at least one URL" }))
      return
    }

    // Parse URLs from textarea (one per line)
    const urlList = urlText
      .split("\n")
      .map((url) => url.trim())
      .filter((url) => url.length > 0)

    // Validate all URLs
    const invalidUrls = urlList.filter((url) => !url.startsWith("https://"))
    if (invalidUrls.length > 0) {
      setErrors((prev) => ({
        ...prev,
        [productId]: `Invalid URLs found. All URLs must start with https://`,
      }))
      return
    }

    setSaving((prev) => ({ ...prev, [productId]: true }))
    setErrors((prev) => ({ ...prev, [productId]: "" }))

    try {
      const response = await fetch("/api/update-product-files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          fileUrls: urlList,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to update database")
      }

      setSaved((prev) => ({ ...prev, [productId]: true }))
      setTimeout(() => {
        setSaved((prev) => ({ ...prev, [productId]: false }))
      }, 3000)
    } catch (error) {
      console.error("[v0] Save error:", error)
      setErrors((prev) => ({ ...prev, [productId]: (error as Error).message }))
    } finally {
      setSaving((prev) => ({ ...prev, [productId]: false }))
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Setup Product Files</h1>
          <p className="mt-2 text-neutral-600">
            Add your product file URLs to enable automatic delivery after purchase.
          </p>
        </div>

        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">How to Add Your Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-blue-800">
            <div>
              <p className="font-semibold">Step 1: Upload to Vercel Blob (Already Done!)</p>
              <p className="ml-4 mt-1 text-xs">Your files are already uploaded to Vercel Blob storage.</p>
            </div>
            <div>
              <p className="font-semibold">Step 2: Paste URLs Below</p>
              <p className="ml-4 mt-1">Enter one URL per line in the text box for each product, then click Save.</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {products.map((product) => {
            const isSaved = saved[product.id]
            const isSaving = saving[product.id]
            const error = errors[product.id]
            const urlCount = urls[product.id]?.split("\n").filter((u) => u.trim()).length || 0

            return (
              <Card key={product.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {product.name}
                  </CardTitle>
                  <CardDescription>
                    Product ID: {product.id} • {product.price} • {product.description}
                  </CardDescription>
                  <CardDescription className="text-xs">
                    Expected files: {product.expectedFiles} • Current: {urlCount}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor={`urls-${product.id}`} className="text-sm font-medium">
                        File URLs (one per line)
                      </label>
                      <Textarea
                        id={`urls-${product.id}`}
                        placeholder="https://your-blob-url.vercel-storage.com/file1.pdf&#10;https://your-blob-url.vercel-storage.com/file2.pdf"
                        value={urls[product.id] || ""}
                        onChange={(e) => setUrls((prev) => ({ ...prev, [product.id]: e.target.value }))}
                        disabled={isSaving}
                        className="mt-1 font-mono text-xs"
                        rows={Math.max(5, product.expectedFiles)}
                      />
                      <p className="mt-1 text-xs text-neutral-500">
                        Paste {product.expectedFiles} URL{product.expectedFiles > 1 ? "s" : ""}, one per line
                      </p>
                    </div>

                    {isSaved ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-medium">
                          Saved {urlCount} file{urlCount !== 1 ? "s" : ""} successfully!
                        </span>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handleSave(product.id)}
                        disabled={isSaving || !urls[product.id]}
                        className="w-full"
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          `Save ${urlCount || 0} File${urlCount !== 1 ? "s" : ""}`
                        )}
                      </Button>
                    )}

                    {error && <p className="text-sm text-red-600">{error}</p>}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg bg-green-50 p-4">
          <h3 className="font-semibold text-green-900">After Setup:</h3>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-green-800">
            <li>Test the checkout flow on your main site</li>
            <li>Make a test purchase with card: 4242 4242 4242 4242</li>
            <li>Verify all download links work on the success page</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
