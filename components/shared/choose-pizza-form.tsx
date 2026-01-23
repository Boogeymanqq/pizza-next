import { Ingredient, ProductItem } from '@/app/generated/prisma/client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Title } from './title'
import { Button } from '../ui'
import { PizzaImage } from './pizza-image'

interface Props {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	loading?: boolean
	// onSubmit: (itemId: number, ingredients: number[]) => void
	className?: string
}
export const ChoosePizzaForm: React.FC<Props> = ({
	imageUrl,
	name,
	ingredients,
	items,
	loading,
	// onSubmit,
	className,
}) => {
	const textDetails = ''
	const totalPrice = 0

	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl="" size={40} />

			<div className="w-[490px] bg-[#f7f6f5] p-7">
				<Title text={name} size="md" className="font-extrabold mb-1" />

				<p className="text-gray-400">{textDetails}</p>

				<Button
					// loading={loading}
					// onClick={handleClickAdd}
					className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
				>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
