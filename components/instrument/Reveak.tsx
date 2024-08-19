"use client"

import React, { Dispatch, SetStateAction } from "react"
import { Audio } from "@/types/audio";
import { Button } from "../ui/button";
import { IoEyeSharp } from "react-icons/io5";

export default function Reveal({ audios, reveal, setReveal, getNotes }: { 
	audios: Audio[] | undefined,
	reveal: boolean,
	setReveal: Dispatch<SetStateAction<boolean>>,
	getNotes: () => JSX.Element
}) {
	const onClick = () => setReveal(!reveal);
	return (
		<Button
			onClick={onClick}
			variant={'secondary'}
			className="w-full h-24 m-auto  p-8 text-lg">
			{reveal ?
				<h2>
					{getNotes()}
				</h2> 
				: 
				<IoEyeSharp className="w-12 h-12"/>
			}
		</Button>
	)
}