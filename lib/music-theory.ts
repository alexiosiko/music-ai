import { Note, NOTES, scaleMap, SettingsType } from "./types";

const getRoad = (settings: SettingsType): Note[] => {
	const steps = scaleMap[settings.scale];
	let notes: Note[] = [];
	steps.forEach(step => {
		const currentNote = settings.key + settings.octave as Note;
		const newNote = NOTES[NOTES.indexOf(currentNote) + step];
		notes.push(newNote)
	})
	return notes;
}

export const getRandomSequence = (settings: SettingsType): Note[] => {
	const notes: Note[] = [];
	const road = getRoad(settings);

	// Start with a random note
	let currentNoteIndex = Math.floor(Math.random() * road.length);
	notes.push(road[currentNoteIndex]);

		for (let i = 1; i < settings.numNotes; i++) {
		const minIndex = Math.max(0, currentNoteIndex - 2); // Lower bound
		const maxIndex = Math.min(road.length - 1, currentNoteIndex + 2); // Upper bound

		const nextNoteIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
		notes.push(road[nextNoteIndex]);
		currentNoteIndex = nextNoteIndex;
	}
	return notes;
};
