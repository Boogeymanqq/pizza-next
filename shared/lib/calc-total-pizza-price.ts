import { Ingredient, ProductItem } from '@/app/generated/prisma/client'
import { PizzaSize, PizzaType } from '../constants/pizza'

/**
 * Функция для подсчета общей стоимости пиццы
 * @example CalcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)
 *
 * @param type - тип теста выбранной пиццы
 * @param size - размер выбранной пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */
export const CalcTotalPizzaPrice = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
): number => {
	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0

	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, item) => acc + item.price, 0)

	return pizzaPrice + totalIngredientsPrice
}
