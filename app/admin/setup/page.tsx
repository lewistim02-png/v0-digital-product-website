"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2, AlertCircle, Copy, Check } from "lucide-react"

export default function SetupPage() {
  const [step, setStep] = useState<"check" | "sql" | "files">("check")
  const [checking, setChecking] = useState(false)
  const [copied, setCopied] = useState(false)
  const [manualUrls, setManualUrls] = useState("")
  const [guidesUrls, setGuidesUrls] = useState("")
  const [masteryUrls, setMasteryUrls] = useState("")
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [debugLogs, setDebugLogs] = useState<string[]>([])

  const addLog = (log: string) => {
    console.log("[v0]", log)
    setDebugLogs((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${log}`])
  }

  useEffect(() => {
    checkDatabase()
  }, [])

  const checkDatabase = async () => {
    setChecking(true)
    setError("")
    setMessage("")
    addLog("Checking database...")

    try {
      const response = await fetch("/api/check-database", {
        method: "POST",
      })

      addLog(`Database check response status: ${response.status}`)
      const data = await response.json()
      addLog(`Database ready: ${data.ready}`)

      if (data.ready) {
        setStep("files")
        setMessage("Database is ready! Now add your product files.")
      } else {
        setStep("sql")
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error"
      addLog(`Database check error: ${errorMsg}`)
      setError("Failed to check database")
    } finally {
      setChecking(false)
    }
  }

  const copySQL = () => {
    const sql = `-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT REFERENCES customers(id),
  product_id BIGINT REFERENCES products(id),
  stripe_session_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  amount INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert products
INSERT INTO products (id, name, description, price) VALUES
(1, 'The Manual', 'Complete guide to sneaker and card reselling fundamentals', 9700),
(2, 'The Guides', 'Advanced strategies and insider techniques', 29700),
(3, 'Mastery', 'Elite program with personal mentorship and community access', 99700)
ON CONFLICT (id) DO NOTHING;`

    navigator.clipboard.writeText(sql)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSaveFiles = async () => {
    setDebugLogs([])
    addLog("=== SAVE FILES CLICKED ===")
    setSaving(true)
    setError("")
    setMessage("")

    try {
      const updates = []

      if (manualUrls.trim()) {
        const urls = manualUrls.split("\n").filter((url) => url.trim())
        addLog(`Product 1 (Manual): ${urls.length} URLs found`)
        updates.push({
          productId: 1,
          urls,
          promise: fetch("/api/update-product-urls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: 1, urls }),
          }),
        })
      } else {
        addLog("Product 1 (Manual): No URLs provided")
      }

      if (guidesUrls.trim()) {
        const urls = guidesUrls.split("\n").filter((url) => url.trim())
        addLog(`Product 2 (Guides): ${urls.length} URLs found`)
        updates.push({
          productId: 2,
          urls,
          promise: fetch("/api/update-product-urls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: 2, urls }),
          }),
        })
      } else {
        addLog("Product 2 (Guides): No URLs provided")
      }

      if (masteryUrls.trim()) {
        const urls = masteryUrls.split("\n").filter((url) => url.trim())
        addLog(`Product 3 (Mastery): ${urls.length} URLs found`)
        updates.push({
          productId: 3,
          urls,
          promise: fetch("/api/update-product-urls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId: 3, urls }),
          }),
        })
      } else {
        addLog("Product 3 (Mastery): No URLs provided")
      }

      if (updates.length === 0) {
        addLog("ERROR: No URLs provided for any product")
        setError("Please add at least one product's URLs")
        return
      }

      addLog(`Sending ${updates.length} API requests...`)
      const responses = await Promise.all(updates.map((u) => u.promise))

      for (let i = 0; i < responses.length; i++) {
        const response = responses[i]
        const productId = updates[i].productId
        addLog(`Product ${productId} response status: ${response.status}`)

        if (!response.ok) {
          const data = await response.json()
          addLog(`Product ${productId} error: ${JSON.stringify(data)}`)
          throw new Error(data.error || `Failed to update Product ${productId}`)
        } else {
          const data = await response.json()
          addLog(`Product ${productId} success: ${JSON.stringify(data)}`)
        }
      }

      addLog("=== ALL FILES SAVED SUCCESSFULLY ===")
      setMessage("All files saved! Your store is ready.")
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error"
      addLog(`FATAL ERROR: ${errorMsg}`)
      setError(errorMsg)
    } finally {
      setSaving(false)
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Checking your database...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Kickcard Academy Setup</h1>
          <p className="text-muted-foreground mt-2">Let's get your store ready in 2 simple steps</p>
        </div>

        {debugLogs.length > 0 && (
          <Card className="border-blue-500">
            <CardHeader>
              <CardTitle className="text-sm">Debug Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded font-mono text-xs max-h-64 overflow-y-auto space-y-1">
                {debugLogs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === "sql" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Step 1: Set Up Your Database
              </CardTitle>
              <CardDescription>Your database tables need to be created first</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  <strong>Quick Setup:</strong> Copy the SQL below and run it in your Supabase dashboard
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">SQL Code:</p>
                  <Button onClick={copySQL} variant="outline" size="sm">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy SQL
                      </>
                    )}
                  </Button>
                </div>

                <pre className="text-xs bg-muted p-4 rounded overflow-x-auto max-h-96">
                  {`-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT REFERENCES customers(id),
  product_id BIGINT REFERENCES products(id),
  stripe_session_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  amount INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert products
INSERT INTO products (id, name, description, price) VALUES
(1, 'The Manual', 'Complete guide to sneaker and card reselling fundamentals', 9700),
(2, 'The Guides', 'Advanced strategies and insider techniques', 29700),
(3, 'Mastery', 'Elite program with personal mentorship and community access', 99700)
ON CONFLICT (id) DO NOTHING;`}
                </pre>

                <div className="bg-blue-50 p-4 rounded space-y-2">
                  <p className="font-semibold text-blue-900">How to run this:</p>
                  <ol className="text-sm text-blue-800 list-decimal list-inside space-y-1">
                    <li>Click "Copy SQL" button above</li>
                    <li>
                      Go to{" "}
                      <a href="https://supabase.com" target="_blank" className="underline" rel="noreferrer">
                        supabase.com
                      </a>{" "}
                      and sign in
                    </li>
                    <li>Open your project → SQL Editor</li>
                    <li>Click "New Query"</li>
                    <li>Paste the SQL and click "Run"</li>
                    <li>Come back here and click "I've Run the SQL"</li>
                  </ol>
                </div>

                <Button onClick={checkDatabase} className="w-full" size="lg">
                  I've Run the SQL - Check Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "files" && (
          <>
            {message && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Step 2: Add Your Product Files
                </CardTitle>
                <CardDescription>Paste your Vercel Blob URLs (one per line)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product 1: The Manual (£97)</label>
                  <p className="text-xs text-muted-foreground">1 file - Included in all tiers</p>
                  <Textarea
                    placeholder="https://...vercel-storage.com/The-Complete-Manual.pdf"
                    value={manualUrls}
                    onChange={(e) => setManualUrls(e.target.value)}
                    rows={2}
                    className="font-mono text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Product 2: The Guides (£297)</label>
                  <p className="text-xs text-muted-foreground">7 files - Buyers get Manual + Guides (8 total)</p>
                  <Textarea
                    placeholder="https://...vercel-storage.com/Guide-1.pdf&#10;https://...vercel-storage.com/Guide-2.pdf&#10;..."
                    value={guidesUrls}
                    onChange={(e) => setGuidesUrls(e.target.value)}
                    rows={8}
                    className="font-mono text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Product 3: Mastery (£997)</label>
                  <p className="text-xs text-muted-foreground">
                    14 files - Buyers get Manual + Guides + Mastery (22 total)
                  </p>
                  <Textarea
                    placeholder="https://...vercel-storage.com/Mastery-1.pdf&#10;https://...vercel-storage.com/Mastery-2.pdf&#10;..."
                    value={masteryUrls}
                    onChange={(e) => setMasteryUrls(e.target.value)}
                    rows={15}
                    className="font-mono text-xs"
                  />
                </div>

                <Button
                  onClick={handleSaveFiles}
                  disabled={saving || (!manualUrls && !guidesUrls && !masteryUrls)}
                  size="lg"
                  className="w-full"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save All Files"
                  )}
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
