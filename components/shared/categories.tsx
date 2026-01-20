'use client'

import { Category } from '@/app/generated/prisma/client'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

interface CategoriesProps {
	items: Category[]
	className?: string
}

export const Categories = ({ items, className }: CategoriesProps) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{items.map((cat, index) => (
				<a
					key={index}
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === cat.id &&
							'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					href={`/#${cat.name}`}
				>
					<button>{cat.name}</button>
				</a>
			))}
		</div>
	)
}
