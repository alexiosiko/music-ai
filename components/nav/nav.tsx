"use client"

import { Link } from 'next-view-transitions'
import React from 'react'
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'

export default function Nav() {
	const { user } = useUser();
	return (
	<nav className='flex justify-between h-14 items-center max-w-6xl w-screen m-auto '>
		<Link href="/" className='relative left-4 flex items-center'>
			<Image  width={42} height={42} src="/pngs/logo-other.png" alt='logo.png' />
		</Link>
		<div className='relative flex gap-8  justify-end right-4'>
			<Link href="/">Home</Link>
			<Link href="/piano">Ear Training</Link>
			<Link href="/sheet-music">Sheet Music Training</Link>
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
