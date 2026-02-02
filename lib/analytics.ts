// Google Analytics event tracking helper

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, parameters)
  }
}

// Predefined conversion events
export const trackViewCourse = (courseName: string) => {
  trackEvent("view_course", {
    course_name: courseName,
  })
}

export const trackStartCheckout = (courseName: string, price: number) => {
  trackEvent("begin_checkout", {
    course_name: courseName,
    value: price,
    currency: "GBP",
  })
}

export const trackPurchase = (courseName: string, price: number, transactionId: string) => {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: price,
    currency: "GBP",
    items: [
      {
        item_name: courseName,
        price: price,
      },
    ],
  })
}

export const trackSignup = (email: string, source: string) => {
  trackEvent("sign_up", {
    method: source, // 'free-course' or 'purchase'
  })
}
