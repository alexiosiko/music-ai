"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import useTranscribe from "@/components/hooks/useTranscribe";
import { ScaleLoader } from "react-spinners";
import { Label } from "@/components/ui/label";
import { MdFileUpload, MdFormatStrikethrough } from "react-icons/md";
import { MdAudioFile } from "react-icons/md";


export default function Upload() {

	const {cliType, handleSubmit, file, isFetching, handleCliTypeChange, handleFileChange, testFunction, handleRemoveFile } = useTranscribe();
	return (
		<form onSubmit={handleSubmit} className="gap-12 justify-center flex-col flex max-w-xl m-auto h-safe-screen-height ">
			<h2>Transcribe your File</h2>
			<div className="mx-auto justify-center gap-1.5 flex flex-col items-center">
				<Label htmlFor="picture" className="outline-dashed w-[600px] aspect-video justify-center flex flex-col gap-4 items-center rounded-lg">
					{file 
						?
						<>
							<MdAudioFile size={72} />
							<p>{file.name}</p>
						</>
						:
						<>
							<MdFileUpload size={72}/>	
							<h2>
							Click Here to Upload A File
								
							</h2>
							<p >
								File must be .wav or .mp3
							</p>
							<input // Hide the input component
							id="picture"
							type="file"
							className="hidden"
							accept=".mp3,.wav"
							onChange={handleFileChange}
							/>
						</>
					}
					<div className="h-4 w-full flex items-center gap-4 justify-center">
						{isFetching && 
							<>
								<ScaleLoader height={24} color="white" />
								<p>Please wait</p>
							</>
						}
					</div>
				</Label>
			</div>
			<div className="flex justify-center gap-4 mx-auto">
				<Button disabled={isFetching || file == null} type="submit" className="w-min mx-auto">
					Transcribe
				</Button>
				<Button disabled={isFetching} variant="destructive" onClick={handleRemoveFile}>
					Remove File
				</Button>
			</div>
			<p>We recommend <a href="https://musescore.org/en" target="_blank" className="underline-offset-2 underline">MuseScore</a>  to edit, view, and play your midi file</p>
			</form>
	);
}