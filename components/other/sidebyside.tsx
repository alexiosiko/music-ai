import React from 'react'

export default function SideBySide({children, className }: { 
	children: [React.ReactNode, React.ReactNode];
	className?: string
}) {
	return (
		<div className={`lg:flex max-lg:w-full ${className}`}>
			<div className='lg:w-1/2 h-[100%]'>{children[0]}</div>
			<div className='lg:w-1/2 h-[100%]'>{children[1]}</div>
		</div>
	)
}
