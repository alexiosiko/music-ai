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
	<nav className='flex justify-around absolute items-center top-0 w-[100%]'>
		<div className='relative left-12'>
			<h1>LOGO</h1>
		</div>
		<div className='flex gap-4'>
			<Link href="/">Home</Link>
			<Link href="/transcribe">Transcribe</Link>
			<Link href="/contact">Contact</Link>
		</div>
		<div className='relative right-12 flex gap-4'>
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
