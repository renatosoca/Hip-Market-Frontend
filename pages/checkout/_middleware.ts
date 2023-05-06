// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const previousPage = req.nextUrl.pathname;

  if (previousPage.startsWith('/checkout')) {
    const token = req.cookies.get('authToken')?.value || '';

    try {

      /* return NextResponse.next(); */
      return NextResponse.redirect(
        new URL(`/auth/login?p=${previousPage}`, req.url)
      );
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/auth/login?p=${previousPage}`, req.url)
      );
    }
  }
};

export const config = {
  matcher: [
    '/checkout/:path*'
  ],
};