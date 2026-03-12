import qs from 'qs'
import { useEffect } from 'react'
import { Filters } from './use-filters'
import { useRouter } from 'next/navigation'

export const useQueryFilters = ({
	sizes,
	pizzaTypes,
	selectedIngredients,
	prices,
}: Filters) => {
	const router = useRouter()

	useEffect(() => {
		const params = {
			...prices,
			pizzaTypes: Array.from(pizzaTypes),
			sizes: Array.from(sizes),
			ingredients: Array.from(selectedIngredients),
		}

		const query = qs.stringify(params, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}, [prices, pizzaTypes, selectedIngredients, sizes])
}
