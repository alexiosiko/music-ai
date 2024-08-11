"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'next-view-transitions';
import AnimatedDiv from '@/components/animations/animatediv';
const TEXTS = ['AI Technology', 'Professional Transcribing', 'Music to Sheet', 'Accurate Conversion'];

export default function First() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
		() => setIndex((index) => index + 1),
		3000, // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);
  return (
	<div className="h-safe-screen-height flex ">	

		<div className="m-auto flex flex-col gap-6">
			<AnimatedDiv direction='down'> 
				<h1 className="relative text-gradient w-auto ">Listen. Transcribe. Play.</h1>
			</AnimatedDiv>
			<AnimatedDiv delay={0.5}>
				<TextTransition className='text-4xl text-left -mt-7' springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
			</AnimatedDiv>
			<AnimatedDiv direction='up' delay={1} className='flex gap-4'>
				<Link href="/transcribe">
					<Button  size={"lg"} className="w-28">Get Started</Button>
				</Link>
				<Link href="/">
					<Button size={"lg"} variant="outline" className="w-28">Learn More</Button>
				</Link>
			</AnimatedDiv>
		</div>
	
	</div>
  )
}
