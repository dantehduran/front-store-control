import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(req) {
		// console.log(req.nextauth.token);
		if (
			(req.nextUrl.pathname.startsWith('/categories') || req.nextUrl.pathname.startsWith('/users')) &&
			req.nextauth.token?.username !== 'admin'
		)
			return NextResponse.redirect(new URL('/', req.url));
	},
	{
		callbacks: {
			authorized: ({ token }) => token?.username !== undefined,
		},
	}
);

export const config = { matcher: ['/', '/products', '/categories', '/users'] };
