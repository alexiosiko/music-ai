"use client"

import { Link } from 'next-view-transitions'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { SignIn, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'

export default function Nav() {
	const router = useRouter();
	const { user } = useUser();
	return (
	<nav className='flex justify-between h-12 items-center max-w-6xl w-[1152px] m-auto'>
		<Link href="/" className='relative '>
			<Image  width={28} height={42} src="/pngs/logo-other.png" alt='logo.png' />
		</Link>

		<div className='relative flex gap-4  justify-end'>
			<Link href="/">Home</Link>
			<Link href="/">FAQ</Link>
			<Link href="/contact">Contact</Link>
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
