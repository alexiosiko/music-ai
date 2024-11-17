export const noteToHeightMap: Record<string, number> = {

	"C3": -9,
	"Cs3": -9,
	"D3": -8,
	"Ds3": -8,
	"E3": -7,
	"F3": -6,
	"Fs3": -6,
	"G3": -5,
	"Gs3": -5,
	"A3": -4,
	"As3": -4,
	"B3": -3,
	"C4": -2,
	"Cs4": -2,
	"D4": -1,
	"Ds4": -1,
	"E4": 0,
	"F4": 1,
	"Fs4": 1,
	"G4": 2,
	"Gs4": 2,
	"A4": 3,
	"As4": 3,
	"B4": 4,
	"C5": 5,
	"Cs5": 5,
	"D5": 6,
	"Ds5": 6,
	"E5": 7,
	"F5": 8,
	"Fs5": 8,
	"G5": 9,
	"Gs5": 9,
	"A5": 10,
	"As5": 10,
	"B5": 11,
	"C6": 12,
	"Cs6": 12,
	"D6": 13,
	"Ds6": 13,
  } as const;

export type Note = keyof typeof noteToHeightMap;
export type Scale = "Minor" | "Major";
export type SettingsType = {
	numNotes: number,
	key: string,
	scale: Scale,
	octave: number,
	tempo: number,
}
export const NOTES: Note[] = Object.keys(noteToHeightMap) as Note[];

export const scaleMap: Record<Scale, number[]> = {
	"Minor": [0, 2, 3, 5, 7, 8, 10, 12],
	"Major": [0, 2, 4, 5, 7, 9, 11, 12]
}

export const getRandomNote = () => {

}