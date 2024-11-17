"use client"

import Score from "@/components/musical-score/score";
import Settings from "@/components/musical-score/settings";
import { Button } from "@/components/ui/button";
import { playAudio } from "@/lib/audio";
import { getRandomSequence } from "@/lib/music-theory";
import { Note, SettingsType } from "@/lib/types";
import { wait } from "@/lib/utils";
import { useEffect, useState } from "react";


export default function Home() {
	const [settings, setSettings] = useState<SettingsType>({
		key: "E",
		numNotes: 4,
		scale: "Minor",
		octave: 4,
		tempo: 60,
	});
	const [notes, setNotes] = useState<Note[]>(["F4", "A4", "B4", "Cs4"]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hidden, setHidden] = useState<boolean>(true);
	const handleOnClick = () => {
		setHidden(!hidden);
	}
	useEffect(() => {
		setNotes(getRandomSequence(settings));
	}, [])
	const handleRandomize = async () => {
		setNotes(getRandomSequence(settings));
	}
	const handleListen = async () => {
		if (isPlaying)
			return;
		setIsPlaying(true);
		for (const note of notes) { // Don't use map because map is not asynchronous
			const path = `/notes/${note}.mp3`;
			playAudio(path);
			await wait(60000 / settings.tempo); // Wait for 1 second before playing the next note
		  }
		setIsPlaying(false);
	}
  return (
	<div className="flex flex-col h-screen gap-4 items-center justify-center max-w-4xl mx-auto">
		<Score onClick={handleOnClick} hidden={hidden} notes={notes} />
		<p>{settings.key} {settings.scale}</p>
		<Button onClick={handleListen}>Listen</Button>
		<Button onClick={handleRandomize} variant="outline">Randomize Notes</Button>
		<Settings settings={settings} setSettings={setSettings} />
	</div>
  );
}
