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
      "price": "197",
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
      "price": "197",
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

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much money do I need to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can start with just £100-200. The 'Getting Started When Broke' guide shows you exactly how to source your first inventory with minimal capital. Many students start by flipping items from charity shops, Facebook Marketplace, or even things they already own."
        }
      },
      {
        "@type": "Question",
        "name": "How much time do I need per week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just 2-4 hours per week is enough to build a profitable side income. The system is designed for full-time workers and students. You can source inventory on weekends and list items during your commute or lunch breaks."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will I see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "89% of students make their first profitable flip within 30 days. Most make back the course cost within the first week if they follow the system. Your first flip could happen tomorrow if you find the right opportunity."
        }
      },
      {
        "@type": "Question",
        "name": "Is the market too saturated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UK sneaker market alone is worth £2.2 billion and growing 8% yearly. Even capturing 0.001% would be £22,000. There are millions of sneakers and trading cards changing hands daily. The difference is knowing which ones to target, when to buy, and where to sell."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to know about sneakers or trading cards already?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. The Manual starts from absolute basics. You'll learn exactly what to look for, which brands and models to focus on, how to spot fakes, and how to value items correctly. Many successful students knew nothing about sneakers when they started."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm not in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The strategies work globally. 40% of students are outside the UK. The course includes US and EU supplier alternatives, international shipping guides, and platform-specific strategies for different countries."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kickcard Academy Complete Course",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mark T."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "First month and I've already made back the course cost 3x over. The supplier contacts alone are worth more than I paid."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jessica R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Went from zero knowledge to flipping 15 pairs a week. The authentication guide saved me from buying a fake Jordan 1 worth £200."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sam P."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "I was skeptical of another course, but this is different. Actual strategies that work right now, not 2019 BS."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
