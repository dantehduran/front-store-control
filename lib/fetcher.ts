import { getSession, useSession } from 'next-auth/react';

interface Props {
	url: string;
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	body?: any;
	headers?: any;
}

export default async function fetcher({ url, ...rest }: Props) {
	const session = await getSession();
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${session?.access_token}`,
		},
		...rest,
	});
	return response;
}
