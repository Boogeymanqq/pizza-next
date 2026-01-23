import { Ingredient, Product, ProductItem } from '@/app/generated/prisma/client'

export type ProductWithRelations = Product & {
	items: ProductItem[]
	ingredients: Ingredient[]
}
