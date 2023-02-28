import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>;
}

export default MyApp;
