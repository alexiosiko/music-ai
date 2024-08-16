"use client"

import InsideBody from '@/components/other/subbody'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import React, { useState } from 'react'

export default function Test() {
	const [message, setMessage] = useState<string>("");
	const test = async () => {
		try {
			const res = await axios.get(process.env.NEXT_PUBLIC_API_DOMAIN as string)
			console.log(res.data);
		} catch (e :any) {
			console.error(e);
			// setMessage(e.message as string)
		}
	}
  return (
	<InsideBody className='h-safe-screen-height flex justify-center items-center'>
		<Button onClick={test}>Button</Button>
		<h2>{message}</h2>
	</InsideBody>
  )
}
