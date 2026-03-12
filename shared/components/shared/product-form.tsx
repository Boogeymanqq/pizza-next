'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store/cart'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'

interface Props {
	product: ProductWithRelations
	onSubmit?: () => void
}

export const ProductForm: React.FC<Props> = ({
	product,
	onSubmit: _onSubmit,
}) => {
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType)
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id

			await addCartItem({
				productItemId: itemId,
				ingredients,
			})

			toast.success(product.name + ' добавлена в корзину')
			_onSubmit?.()
		} catch (error) {
			toast.error('Не удалось добавить товар в корзину')
			console.error(error)
		}
	}

	if (isPizzaForm) {
		return (
			<ChoosePizzaForm
				items={product.items}
				imageUrl={product.imageUrl}
				name={product.name}
				ingredients={product.ingredients}
				onSubmit={onSubmit}
				loading={loading}
			/>
		)
	}

	return (
		<ChooseProductForm
			imageUrl={product.imageUrl}
			name={product.name}
			price={firstItem.price}
			onSubmit={onSubmit}
			loading={loading}
		/>
	)
}
