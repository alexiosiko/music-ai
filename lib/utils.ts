import { Audio } from "@/types/audio";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stopCurrentAudios(audios: Audio[]) {
	// Stop all current audios
	for (let i = 0; i < audios.length; i++) {
		audios[i].howl.stop();
	}
}

export function wait(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getRandomBetween = (aInclusive: number, bInclusive: number): number => {
	return Math.floor(Math.random() * (bInclusive - aInclusive + 1)) + aInclusive;
};

