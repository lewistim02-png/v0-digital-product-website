import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// This prevents the @supabase/ssr import error from blocking the entire site
export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Middleware is currently disabled - no Supabase auth checks
  // Re-enable when you need authentication by uncommenting:
  // return await updateSession(request)

  // For now, just pass through
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
