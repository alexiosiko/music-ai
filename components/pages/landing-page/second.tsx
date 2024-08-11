import React from 'react'
import girlPlayingGuitar from "@/public/svgs/girl-playing-guitar.png"
import Image from 'next/image'

export default function Second() {
  return (
	<div className='items-center flex flex-col'>
		<h1>Fast. Easy. Simple</h1>
		<h2 className='mb-12'>Create your transcription in 3 simple steps:</h2>
		<div className='flex justify-around w-full mt-24 mb-24'>
			<div className='w-64'>
				<Image src={girlPlayingGuitar} alt='girl-playing-guitar' className='mb-8' />
				<p>Record, upload or paste in a YouTube link of piano music.</p>
			</div>
			<div className='w-64'>
				<Image src={girlPlayingGuitar} alt='girl-playing-guitar' className='mb-8' />
				<p>Klangio AI listens to your music and transcribes it automatically.</p>
			</div>
			<div className='w-64'>
				<Image src={girlPlayingGuitar} alt='girl-playing-guitar' className='mb-8' />
				<p>View, edit and download your notes as Sheet Music, MIDI and MusicXML.</p>
			</div>
		</div>
	</div>
  )
}
