"use client"

import React from "react";
import First from "@/components/pages/landing-page/first"
import Second from "@/components/pages/landing-page/second";
import Image from "next/image";
import musescore from "@/public/images/musescore.jpg"
import InsideBody from "@/components/other/subbody";

export default function Home() {

  return (
    <div>
		<First />
		<div className="bg-foreground">
			<InsideBody>
				<Image className="mb-24 mx-auto top-4 relative rounded-lg" src={musescore} alt="sheet-music" />
				<Second />
			</InsideBody>
		</div>
    </div>
  );

  

}

