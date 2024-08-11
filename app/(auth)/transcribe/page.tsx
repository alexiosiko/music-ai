"use client"

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useTranscribe from "@/components/hooks/useTranscribe";
import { ScaleLoader } from "react-spinners";
import { Label } from "@/components/ui/label";


export default function Upload() {

	const {cliType, handleSubmit, file, isFetching, handleCliTypeChange, handleFileChange, testFunction, handleRemoveFile } = useTranscribe();
	return (

		<form onSubmit={handleSubmit} className="gap-12 justify-center flex-col flex max-w-xl m-auto h-safe-screen-height ">
		<div className="mx-auto justify-center gap-1.5 flex flex-col items-center">
			<Label htmlFor="picture" className="text-custom-color bg-gradient p-8 rounded-lg">
				
			<p style={{ textShadow: '2px 2px 4px rgb(0, 0, 0)' }}>
    Click Here to Upload a .mp3 or .wav file
</p>
			</Label>
			<input // Hide the input component
				id="picture"
				type="file"
				className="hidden"
				accept=".mp3,.wav"
				onChange={handleFileChange}
			/>
			<label // Ghost for the input component
			htmlFor="picture"
			className="cursor-pointer text-red- py-2 px-4 rounded-md text-custom-color"
			>
				{file &&
				<Label>
					{file.name}
				</Label> }
			</label>
		</div>
			<div className="grid grid-cols-2 w-48 mx-auto">
				<Button disabled={isFetching || file == null} type="submit" className="w-min mx-auto">
					{isFetching ?
					<ScaleLoader height={20} />
						:
						<>
							Upload
						</>
					}
				</Button>
				<Button variant="destructive" onClick={handleRemoveFile}>
					Remove File
				</Button>
			</div>
		</form>
	);
}