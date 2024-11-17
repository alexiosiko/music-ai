import * as React from "react"

import {
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Scale, SettingsType } from "@/lib/types"

export default function Settings({ setSettings, settings }: { 
	settings: SettingsType,
	setSettings: React.Dispatch<React.SetStateAction<SettingsType>>
}) {
	return (
		<div className="sm:mt-24 gap-4 flex flex-col items-center justify-center w-full">
			<div className="flex flex-wrap justify-center gap-2">

				<Select onValueChange={value => setSettings({...settings, key: value})}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a Key" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='A#'>A#</SelectItem>
							<SelectItem value='A'>A</SelectItem>
							<SelectItem value='B'>B#</SelectItem>
							<SelectItem value='C'>C</SelectItem>
							<SelectItem value='C#'>C#</SelectItem>
							<SelectItem value='D'>D</SelectItem>
							<SelectItem value='D#'>D#</SelectItem>
							<SelectItem value='E'>E</SelectItem>
							<SelectItem value='F'>F</SelectItem>
							<SelectItem value='F#'>F#</SelectItem>
							<SelectItem value='G'>G</SelectItem>
							<SelectItem value='G#'>G#</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select onValueChange={value => setSettings({...settings, octave: Number(value)})}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Choose octave" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='3'>3</SelectItem>
							<SelectItem value='4'>4</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select onValueChange={value => setSettings({...settings, scale: value as Scale})}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Choose Scale" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='Minor'>Minor</SelectItem>
							<SelectItem value='Major'>Major</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className="flex gap-4 items-center w-full justify-center">
				<p className="text-right w-36">Number of notes: </p>
				<Slider
					className="max-w-48 col-span-2"
					defaultValue={[settings.numNotes]}
					step={1}
					min={1}
					max={8}
					onValueChange={(value) => setSettings({...settings, numNotes: value[0]})}
					/>
				<p className="w-8">{settings.numNotes}</p>
			</div>
			<div className="flex gap-4 items-center w-full justify-center">
				<p className="text-right w-36">Tempo</p>
				<Slider
					className="max-w-48 col-span-2"
					defaultValue={[settings.tempo]}
					step={1}
					min={40}
					max={120}
					onValueChange={(value) => setSettings({...settings, tempo: value[0]})}
					/>
				<p className="w-8">{settings.tempo}</p>
			</div>
		</div>
	)
}
