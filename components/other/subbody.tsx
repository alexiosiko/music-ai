import React from 'react'

export default function InsideBody({children}: { 
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-7xl m-auto">
			{children}
		</div>
	)
}
