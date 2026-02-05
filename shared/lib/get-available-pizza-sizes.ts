import { ProductItem } from '@/app/generated/prisma/client'
import { PizzaType, pizzaSizes } from '../constants/pizza'
import { Variant } from '../components/shared/group-variants'

export const getAvailablePizzaSizes = (
	type: PizzaType,
	items: ProductItem[]
): Variant[] => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)

	return pizzaSizes.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByType.find(
			pizza => pizza.size === Number(item.value)
		),
	}))
}
