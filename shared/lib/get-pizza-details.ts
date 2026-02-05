import { ProductItem, Ingredient } from '@/app/generated/prisma/client'
import { PizzaType, PizzaSize, mapPizzaType } from '../constants/pizza'
import { CalcTotalPizzaPrice } from './calc-total-pizza-price'

export const getPizzaDetails = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const totalPrice = CalcTotalPizzaPrice(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	)
	const textDetails = `${size} см, ${mapPizzaType[type]} пицца`

	return { textDetails, totalPrice }
}
