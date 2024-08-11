"use client"

import React, { useState } from 'react'
import { toast } from '../ui/use-toast';
import axios from 'axios';


export default function useTranscribe() {
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [file, setFile] = useState<any>(null);
	const [cliType, setCliType] = useState("vocal");
	const handleRemoveFile = (event: any) => {
		event.preventDefault(); // Prevents form submission
		event.stopPropagation(); // Prevents label click action
		setFile(null); // Resets the file state
	}
	const handleFileChange = (event: any) => setFile(event.target.files[0]);
	
	
	  const handleCliTypeChange = (event: any) => {
		setCliType(event.target.value);
	  };

	const handleSubmit = async (event: any) => {
		try {
			event.preventDefault();
			if (isFetching)
				return;
			setIsFetching(true);
			
			if (!file) 
			throw Error("Please upload a music file you would like to convert")
			
		
			const formData = new FormData();
			formData.append("file", file);
			
				const response = await axios.post(process.env.NEXT_PUBLIC_API_DOMAIN + `/transcribe`, formData, {
					responseType: 'blob',
				});
				console.log(response.data);
				//   Create a link element to download the file
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'sheet-music.midi'); // Set the file name with .midi extension
				document.body.appendChild(link);
				link.click();
		
				// Clean up
				document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (e: any) {
			toast({
				title: e.message,
				description: "Please try again or contact support",
				variant: "destructive"
			});
		} finally {
			setIsFetching(false);
		}
	};
	
	  const testFunction = async () => {
		console.log(process.env.NEXT_PUBLIC_API_DOMAIN);
		try {
			const res = await axios.get(process.env.NEXT_PUBLIC_API_DOMAIN as string)
			console.log(res.data);
		} catch (e: any) {
			console.error(e);
		}
	  }
  return {
	handleRemoveFile,
	isFetching,
	handleSubmit,
	testFunction,
	handleFileChange,
	handleCliTypeChange,
	file,
	setFile,
	cliType,
	setCliType,
  }
}
