"use client"

import React from "react";
import First from "@/components/pages/landing-page/first"
import Second from "@/components/pages/landing-page/second";
import Image from "next/image";
import musescore from "@/public/images/musescore.jpg"
import InsideBody from "@/components/other/subbody";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {

  return (
    <div>
		<First />
		<div className="bg-foreground">
			<InsideBody>
				<Image className="mb-24 w-fit max-w-xl mx-auto lg:top-4 relative rounded-lg" src={musescore} alt="sheet-music" />
				<Second />
				<Link href="/transcribe" className='w-full pb-36 flex justify-center '>
					<Button size={"lg"} className="w-2/5 bg-background text-foreground">Try it Now!</Button>
				</Link>
			</InsideBody>
		</div>
    </div>	
  );

  

}

