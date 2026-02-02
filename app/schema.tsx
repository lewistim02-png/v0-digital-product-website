export function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Kickcard Academy - Complete Sneaker & Trading Card Reselling Course",
    "description": "Learn sneaker and trading card reselling from £100 starting capital. Complete system with supplier contacts, authentication guides, and pricing formulas.",
    "provider": {
      "@type": "Organization",
      "name": "Kickcard Academy",
      "sameAs": "https://kickcard.academy"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "price": "97",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://kickcard.academy/courses/the-manual"
    },
    "educationalLevel": "Beginner to Advanced",
    "timeRequired": "P4W",
    "coursePrerequisites": "£100-200 starting capital",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT2H"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kickcard Academy",
    "url": "https://kickcard.academy",
    "logo": "https://kickcard.academy/kickcard-academy-logo.png",
    "description": "Online education platform teaching sneaker and trading card reselling with proven systems and real supplier contacts.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@kickcard.academy",
      "contactType": "Customer Support"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kickcard Academy Course",
    "description": "Complete sneaker and trading card reselling course with supplier contacts and authentication guides",
    "brand": {
      "@type": "Brand",
      "name": "Kickcard Academy"
    },
    "offers": {
      "@type": "Offer",
      "price": "97",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://kickcard.academy/courses/the-manual",
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
