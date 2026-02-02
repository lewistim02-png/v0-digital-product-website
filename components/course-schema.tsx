import Script from "next/script"

interface CourseSchemaProps {
  name: string
  description: string
  price: string
  currency?: string
  url: string
}

export function CourseSchema({ name, description, price, currency = "GBP", url }: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Kickcard Academy",
      sameAs: "https://kickcard.academy",
    },
    offers: {
      "@type": "Offer",
      price: price.replace("£", ""),
      priceCurrency: currency,
      url,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  }

  return (
    <Script id={`course-schema-${name}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}
