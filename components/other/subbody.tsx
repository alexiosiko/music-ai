import React from 'react'

export default function InsideBody({children, className }: { 
	children: React.ReactNode;
	className?: string
}) {
	return (
		<div className={`max-w-7xl m-auto ${className}`}>
			{children}
		</div>
	)
}
