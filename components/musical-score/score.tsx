import React, { useRef } from 'react'
import { GiGClef } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Image from 'next/image';
import { Note, noteToHeightMap } from '@/lib/types';

export default function Score({ notes, hidden, onClick }: {
	notes: Note[],
	hidden: boolean,
	onClick: () => void,
}) {
	const noteOffset: number = 34;
	const scoreRef = useRef<HTMLDivElement>(null);
	
	return (
		<div onClick={onClick}  ref={scoreRef} className="hover:cursor-pointer relative w-full h-32">
			{/* Clef */}
			<GiGClef className='absolute -translate-x-12 -translate-y-6' size={200} />

			{/* Score lines */}
			<div className="absolute top-[0px] h-1 w-full bg-foreground -z-10" />
			<div className="absolute top-[30px] h-1 w-full bg-foreground -z-10" />
			<div className="absolute top-[60px] h-1 w-full bg-foreground -z-10" />
			<div className="absolute top-[90px] h-1 w-full bg-foreground -z-10" />
			<div className="absolute top-[120px] h-1 w-full bg-foreground -z-10" />
				<div
					className=" h-full  flex justify-around absolute right-0"
					style={{ width: "calc(100% - 124px)", top: noteOffset }} // Subtract 96px from the full width
			>
				{/* Notes */}
				{notes.map((note, index) => {
					if (hidden) 
						return (
							<FaRegEyeSlash
							size={64}
							key={index}
							style={{
							position: "relative",
							top: -7,
						}} />
					
					)
					else return (
						<div key={index} className='flex relative w-24' >
							<Image
							src='/pngs/note.png'
							alt='note.png'
							className={`object-contain`}
							width={42}
							height={24}
							style={{
								position: "relative",
								top: `${noteToHeightMap[note] * noteGap}px`,
							}}
							/>
							{note.includes('s') && <FaHashtag
							size={32}
							style={{
								position: "relative",
								left: sharpOffsetX,
								top: `${noteToHeightMap[note] * noteGap + 72}px`,
							}}
						/>}
					</div>
					)
				})}
		
			</div>
		</div>
	)
}


const noteGap: number = -15;
const sharpOffsetY: number = 62;
const sharpOffsetX: number = -72;
