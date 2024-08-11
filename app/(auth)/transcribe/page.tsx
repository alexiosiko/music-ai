"use client"

import React, { useState } from "react";
import axios from "axios";	
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import useTranscribe from "@/components/hooks/useTranscribe";


export default function Upload() {

	const {cliType, handleSubmit, isFetching, handleCliTypeChange, handleFileChange, testFunction } = useTranscribe();
  

  return (
    <main className="gap-24 flex-col flex mt-24 max-w-xl m-auto">
		
      <form onSubmit={handleSubmit} className=" justify-center flex-col flex  w-full m-auto" >
        <p>Select file .mp3 or .wav</p>
		<Input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
        <Button disabled={isFetching} type="submit">Upload</Button>
      </form>
    </main>
  );

  

}

