import { LuShuffle } from "react-icons/lu";
import { Button } from "../ui/button";

export default function Shuffle({ shuffle, isPlaying }: { 
	shuffle:  () => void,
	isPlaying: boolean,
}) {
	
	
	return (
		<Button
			variant={"ghost"}
			disabled={isPlaying}
			className="w-24  p-8 h-24"
			onClick={shuffle}>
				<LuShuffle className="h-full w-full" />
		</Button>
		
	)
}