"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'next-view-transitions';
import InsideBody from '@/components/other/subbody';
import SideBySide from '@/components/other/sidebyside';
import Image from 'next/image';
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
	<InsideBody className="h-safe-screen-height relative flex-col flex ">	
		<SideBySide className="h-[100%]">
			<AnimatedDiv delay={0.2} className='h-full flex flex-col max-lg:text-center max-lg:items-center justify-center gap-6'>
				<h1 className="relative text-gradient w-auto ">Convert your audio to sheet-music</h1>
				<AnimatedDiv delay={0.5}>
					<TextTransition className='text-2xl text-left' springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
				</AnimatedDiv>
				<AnimatedDiv delay={1}>
					<Link href="/transcribe" className='mr-2'>
						<Button size={"lg"} className="w-2/5">Try it Now!</Button>
					</Link>
					<Link href="#learn-more">
						<Button size={"lg"} variant="outline" className="w-2/5">Learn More</Button>
					</Link>
				</AnimatedDiv>
			</AnimatedDiv>
			<AnimatedDiv className='max-lg:hidden h-full flex flex-col justify-center'>
				<Image className='w-full square' alt='landing-image' src="/images/landing-image.png" width={920} height={920} />
			</AnimatedDiv>
		</SideBySide>
				
	</InsideBody>
  )
}
