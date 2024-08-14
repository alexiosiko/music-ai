import React from 'react'
import girlPlayingGuitar from "@/public/svgs/girl-playing-guitar.png"
import Image from 'next/image'

export default function Second() {
  return (
	<div className='items-center flex flex-col text-background'>
		<h1>Fast. Easy. Simple</h1>
		<h2 className='mb-12'>Create your transcription in 3 simple steps:</h2>
		<div className='flex justify-around w-full mt-24 mb-24'>
			<div className='w-64 flex flex-col'>
				<h1 className='text-center'>Upload</h1>
				<p className='text-center'>You can easily get download audio files by finding and online youtube to mp3 website</p>
			</div>
			<div className='w-64'>
				<h1 className='text-center'>Transcribe</h1>
				<p className='text-center'>Send your file to our AI model to listen and predict musical notes and transcribe to sheet music.</p>
			</div>
			<div className='w-64'>
				<h1 className='text-center'>Play</h1>
				<p className='text-center'>You can edit, view, and play your midi </p>
			</div>
		</div>
	</div>
  )
}
