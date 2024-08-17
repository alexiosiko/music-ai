import React from 'react'

export default function SideBySide({children, className }: { 
	children: [React.ReactNode, React.ReactNode];
	className?: string
}) {
	return (
		<div className={`flex ${className}`}>
			<div className='w-1/2 h-[100%]'>{children[0]}</div>
			<div className='w-1/2 h-[100%]'>{children[1]}</div>
		</div>
	)
}
