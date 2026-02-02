"use client"

import { useEffect, useState } from "react"

interface Product {
  name: string
  price: string
  stripe_price_id: string
  file_count: number
  files: any
}

export default function CheckFilesPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulated data based on your SQL scripts
    // Replace this with actual API call once database is accessible
    const mockData: Product[] = [
      {
        name: "The Manual",
        price: "£47",
        stripe_price_id: "price_1QlcbhP6WDp8gfEAjUQ8nz6G",
        file_count: 1,
        files: "The Manual-7Ux8cVqH0dYvH5pXGZQo8kKqLZMiQo.pdf",
      },
      {
        name: "The Guides",
        price: "£97",
        stripe_price_id: "price_1QlcblP6WDp8gfEAmFLElhJQ",
        file_count: 1,
        files: "The Manual-7Ux8cVqH0dYvH5pXGZQo8kKqLZMiQo.pdf",
      },
      {
        name: "Mastery",
        price: "£197",
        stripe_price_id: "price_1QlcblP6WDp8gfEAqUZEqaDv",
        file_count: 1,
        files: "The Manual-7Ux8cVqH0dYvH5pXGZQo8kKqLZMiQo.pdf",
      },
    ]

    setProducts(mockData)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Course Files Check</h1>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-2">⚠️ Issue Found</h2>
          <p className="text-yellow-700">
            All three products currently point to the same single PDF file. You need to upload additional course
            materials.
          </p>
        </div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Files</div>
                  <div className="text-2xl font-bold">{product.file_count}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Expected Files:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.name === "The Manual" && <li>✅ The Manual PDF (1 file)</li>}
                  {product.name === "The Guides" && (
                    <>
                      <li>❌ The Manual PDF</li>
                      <li>❌ 7 Additional Guide PDFs (8 files total needed)</li>
                    </>
                  )}
                  {product.name === "Mastery" && (
                    <>
                      <li>❌ The Manual PDF</li>
                      <li>❌ 7 Guide PDFs</li>
                      <li>❌ 14 Mastery Modules (22 files total needed)</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 mb-1">Current File:</div>
                <div className="text-sm font-mono text-gray-700 break-all">
                  {typeof product.files === "string" ? product.files : JSON.stringify(product.files)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold text-blue-800 mb-2">Next Steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>
              Go to{" "}
              <a href="/admin/setup" className="underline font-medium">
                /admin/setup
              </a>{" "}
              to upload your course files
            </li>
            <li>Upload all PDFs for each tier (The Guides needs 7 more, Mastery needs 21 more)</li>
            <li>The system will automatically update the database with the correct file URLs</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
