import React from 'react'
import girlPlayingGuitar from "@/public/svgs/girl-playing-guitar.png"
import Image from 'next/image'
import AnimatedDiv from '@/components/animations/animatediv'

export default function Second() {
  return (
	<div id='learm-more' className='items-center max-lg:text-center flex flex-col text-background'>
		<AnimatedDiv>
			<h1>Fast. Easy. Simple</h1>
		</AnimatedDiv>
		<AnimatedDiv delay={0.2}>
		<h2 className='mb-12'>Create your transcription in 3 simple steps:</h2>
		</AnimatedDiv>
		<AnimatedDiv className='flex max-lg:gap-12 max-lg:flex-col max-lg:items-center justify-around w-full mt-24 mb-24'>
			<div className='max-w-72'>
				<h1 className='text-center mb-4'>Upload</h1>
				<AnimatedDiv delay={0.5}>
					<p className='text-center'>Add any audio file of your choice.</p>
				</AnimatedDiv>
			</div>
			<div className='max-w-72 gap-4'>
				<h1 className='text-center mb-4'>Transcribe</h1>
				<AnimatedDiv delay={0.5}>
					<p className='text-center'>Send your file to our AI-Model to listen to your audio.</p>
				</AnimatedDiv>
			</div>
			<div className='max-w-72 gap-4'>
				<h1 className='text-center mb-4'>Play</h1>
				<AnimatedDiv delay={0.5}>
					<p className='text-center'>Your sheet-music file will automatically be download for you to play </p>
				</AnimatedDiv>
			</div>
		</AnimatedDiv>
	</div>
  )
}
