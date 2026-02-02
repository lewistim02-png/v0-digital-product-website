import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ChatWidget } from "@/components/chat-widget"
import { AxeAccessibility } from "@/components/axe-accessibility"

const _geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Turn Sneakers into £1000+/Month | Kickcard Academy",
  description:
    "Proven system from active seller with £100K inventory. Learn sneaker & trading card authentication, sourcing from UK/EU suppliers, and scaling to £1000+/month in 30 days. No BS, just current market strategies.",
  keywords:
    "sneaker reselling UK, trading card authentication, reselling business, StockX UK, GOAT UK, eBay selling, Vinted UK, sneaker authentication, UK suppliers, EU wholesale",
  authors: [{ name: "Kickcard Academy" }],
  metadataBase: new URL("https://kickcard.academy"),
  openGraph: {
    title: "Turn Sneakers into £1000+/Month | Kickcard Academy",
    description:
      "Proven system from active seller with £100K inventory. Master sneaker & card reselling with current market strategies.",
    type: "website",
    url: "https://kickcard.academy",
    siteName: "Kickcard Academy",
    images: [
      {
        url: "/kickcard-academy-logo-v7.jpg",
        width: 1200,
        height: 630,
        alt: "Kickcard Academy - UK Reselling Mastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Sneakers into £1000+/Month | Kickcard Academy",
    description: "Proven system from active seller with £100K inventory.",
    images: ["/kickcard-academy-logo-v7.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="preload"
          href="/_next/static/media/geist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* END CHANGE */}

        <link rel="canonical" href="https://kickcard.academy" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JZ7FYPGENR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZ7FYPGENR');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <ExitIntentPopup />
        <ChatWidget />
        {/* <AxeAccessibility /> */}
      </body>
    </html>
  )
}
