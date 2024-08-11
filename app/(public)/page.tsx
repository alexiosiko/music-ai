"use client"

import React from "react";
import First from "@/components/pages/landing-page/first"
import Second from "@/components/pages/landing-page/second";
import Image from "next/image";
import sheetMusicSVG1 from "@/public/svgs/muse-score.png"

export default function Home() {

  return (
    <div>
		<First />
		<Image className="mb-24" src={sheetMusicSVG1} alt="sheet-music" />
		<Second />
    </div>
  );

  

}

