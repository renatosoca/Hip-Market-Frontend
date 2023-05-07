// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const previousPage = req.nextUrl.pathname;

  if (previousPage.startsWith('/checkout')) {
    /* const token = req.cookies.get('authToken')?.value || ''; */
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
      return NextResponse.redirect(
        new URL(`/auth/login?p=${previousPage}`, req.url)
      );
    }

    return NextResponse.next();
  }
};

export const config = {
  matcher: [
    '/checkout/:path*'
  ],
};