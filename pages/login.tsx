import Icon from '@/components/Icon';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
export default function Login() {
	const username = useRef('');
	const password = useRef('');
	const [error, setError] = useState(false);
	const onSubmit = async (e: any) => {
		e.preventDefault();
		const response = await signIn('credentials', {
			username: username.current,
			password: password.current,
			redirect: false,
			// callbackUrl: '/',
		});
		if (response?.ok) window.location.href = '/';
		if (response?.error) setError(true);
	};
	return (
		<div className="flex justify-between min-h-screen font-sans">
			<div className="hidden relative w-1/2 bg-center bg-cover lg:block bg-gradient-to-l from-rose-100 to-teal-100">
				<div className="flex absolute bottom-20 justify-center w-full">
					<div className="max-w-md text-center">
						<span className="text-3xl font-bold leading-loose text-gray-900">Control Bussiness</span>
						<p className="font-light leading-7 text-gray-500">
							Stock Control is the most comprehensive field service & asset managament platform with combining
							flexibility.
						</p>
					</div>
				</div>
			</div>
			<div className="flex-1 mx-auto max-w-2xl">
				<div className="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
					<Icon icon="carbon:carbon-for-ibm-product" className="self-center w-10 md:self-end text-teal-500" />
					<div className="pt-5 pb-6">
						<h1 className="text-3xl font-bold tracking-wide leading-loose whitespace-nowrap">Hi, Welcome back!</h1>
						<span className="font-light text-gray-500">Login now to manage your job made easy.</span>
						<form onSubmit={onSubmit}>
							<div className="pt-6">
								<label htmlFor="username" className="font-light text-gray-500">
									Username
								</label>
								<div className="relative overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-rose-400">
									<div className="absolute inset-y-0 left-0 pl-6 pointer-events-none flex justify-center items-center">
										<Icon icon="carbon:user" className="w-6 h-6  text-gray-500" />
									</div>
									<input
										type="text"
										name="username"
										id="username"
										placeholder="Enter your username"
										className="p-4 pl-16 w-full focus:outline-none font-light border-0 focus:ring-0"
										onChange={(e) => (username.current = e.target.value)}
									/>
								</div>
							</div>
							<div className="pt-6">
								<label htmlFor="password" className="font-light text-gray-500">
									Password
								</label>
								<div className="relative overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-rose-400">
									<div className="absolute inset-y-0 left-0 pl-6 pointer-events-none flex justify-center items-center">
										<Icon className="w-6 h-6 text-gray-500" icon="carbon:locked" />
									</div>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Enter your password"
										className="p-4 pl-16 w-full focus:outline-none font-light border-0 focus:ring-0"
										onChange={(e) => (password.current = e.target.value)}
									/>
								</div>
							</div>
							{error && (
								<div className="pt-4">
									<span className="text-rose-500">Invalid username or password</span>
								</div>
							)}
							<div className="pt-8 w-full">
								<button
									type="submit"
									className="py-4 px-8 w-full text-white bg-rose-400 rounded-lg shadow-lg hover:bg-rose-500 focus:ring-4 focus:ring-rose-100 focus:outline-none text-center"
								>
									Sign in
								</button>
							</div>
						</form>
						<div className="text-gray-700">users: admin, test ;password:123456</div>
						<div className="">
							<div className="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap">
								<span className="flex-1 text-gray-500">?? 2021 Stock Control. All rights reserved.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
