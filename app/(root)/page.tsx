import { Container, Title, TopBar, Filters } from '@/shared/components/shared'
import { ProductsGroupList } from '@/shared/components/shared/products-group-list'
import { prisma } from '@/prisma/prisma'

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			product: {
				include: {
					items: true,
					ingredients: true,
				},
			},
		},
	})

	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar categories={categories.filter(cat => cat.product.length > 0)} />

			<Container className="mt-9 pb-14">
				<div className="flex gap-[80px]">
					{/* Фильтрация */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* Список товаров */}
					<div className="flex-1">
						{categories.map(
							cat =>
								cat.product.length > 0 && (
									<ProductsGroupList
										key={cat.id}
										title={cat.name}
										categoryId={cat.id}
										items={cat.product}
									/>
								)
						)}
					</div>
				</div>
			</Container>
		</>
	)
}
