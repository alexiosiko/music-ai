"use client"

import { Link } from 'next-view-transitions'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { SignIn, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'

export default function Nav() {
	const router = useRouter();
	const { user } = useUser();
	return (
	<nav className='flex justify-around absolute h-16 items-center top-0 w-[100%]'>
		<Link href="/" className='relative left-12'>
			<h1>LOGO</h1>
		</Link>

		<div className='relative flex gap-4'>
			{
				user ? 
				<UserButton />
				:
				<>
					<SignUpButton />
					<SignInButton />
				</>
			}
		</div>
	</nav>
  )
}
