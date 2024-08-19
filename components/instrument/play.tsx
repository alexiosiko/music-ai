import { Audio } from "@/types/audio";
import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "../ui/button";
import { ScaleLoader } from "react-spinners";
import { FaPlay } from "react-icons/fa";


export default function Play({ audios, isPlaying, setIsPlaying }: { 
	audios: Audio[] | undefined,
	isPlaying: boolean,
	setIsPlaying: Dispatch<SetStateAction<boolean>>,
}) {
	async function onPlay() {
		if (audios == undefined || audios == null)
			return;
	
		// Stop all current audios
		for (let i = 0; i < audios.length; i++) {
			audios[i].howl.stop();
		}

		setIsPlaying(true);

		for (let i = 0; i < audios.length; i++) {

			audios[i].howl.volume(1);
			audios[i].howl.play();

			const randomDelay = audios[i].delay;

			await new Promise((resolve) => setTimeout(resolve, randomDelay * 600));
			
			// If NOT last note
			if (i != audios.length - 1) {
				// Stop current note
				audios[i].howl.fade(1, 0, randomDelay * 800);
			} else {
				// If LAST note
				audios[i].howl.fade(1, 0, randomDelay * 800 * 2);
			}

			
			await new Promise((resolve) => setTimeout(resolve, randomDelay * 400));
		}
		setIsPlaying(false);
		
	} 
	return (
		<Button
			disabled={isPlaying}
			onClick={onPlay}		
			variant={"ghost"}
			className="w-24 p-8 h-24"
		>
			{isPlaying ? (
				<ScaleLoader width={10} color="white" />
			) : (
				<FaPlay className="text-3xl relative"  />
			)}
		</Button>
	);
}