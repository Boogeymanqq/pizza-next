'use client'

import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { RangeSlider } from './range-slider'
import { Title } from './title'
import React from 'react'

interface FiltersProps {
	className?: string
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const {
		sizes,
		pizzaTypes,
		selectedIngredients,
		prices,
		setPizzaTypes,
		setPrices,
		setSelectedIngredients,
		setSizes,
	} = useFilters()
	useQueryFilters({ sizes, pizzaTypes, selectedIngredients, prices })

	const items = ingredients.map(ingredient => ({
		text: ingredient.name,
		value: String(ingredient.id),
	}))

	const updatePrices = (prices: number[]) => {
		setPrices('priceFrom', prices[0])
		setPrices('priceTo', prices[1])
	}

	return (
		<div className={className}>
			<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

			{/* Верхние чекбоксы */}
			<CheckboxFiltersGroup
				title="Тип теста"
				name="pizzaTypes"
				className="mb-5"
				onClickCheckbox={setPizzaTypes}
				selected={pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			<CheckboxFiltersGroup
				title="Размеры"
				name="sizes"
				className="mb-5"
				onClickCheckbox={setSizes}
				selected={sizes}
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
			/>

			{/* Фильтр цен */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={1000}
						value={String(prices.priceFrom)}
						onChange={e => setPrices('priceFrom', +e.target.value)}
					/>
					<Input
						type="number"
						placeholder="1000"
						min={100}
						max={1000}
						value={String(prices.priceTo)}
						onChange={e => setPrices('priceTo', +e.target.value)}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[prices.priceFrom || 0, prices.priceTo || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			{/* Фильтр ингредиентов */}
			<CheckboxFiltersGroup
				title="Ингредиенты"
				name="ingredients"
				className="mt-5"
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={setSelectedIngredients}
				selected={selectedIngredients}
			/>
		</div>
	)
}
