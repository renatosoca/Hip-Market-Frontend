// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const previousPage = req.nextUrl.pathname;
  const validRoles = ['admin', 'super-admin', 'secretary', 'manager', 'user'];

  const session: any = req.cookies.get('authToken')?.value || '';
  /* const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }); */

  if (!session) {
    /* const url = req.nextUrl.clone();
    url.pathname = `/auth/login`
    url.search = `redirect=${previousPage}`; */
    return NextResponse.redirect(
      new URL(`/auth/login?redirect=${previousPage}`, req.url)
    );
  }

  /* if (previousPage.includes('/admin') && !validRoles.includes(session.user.role)) {
    return NextResponse.redirect(
      new URL(`/`, req.url)
    );
  } */

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/checkout/:path*',
    '/admin/:path*',
    '/orders/:path*',
  ],
};