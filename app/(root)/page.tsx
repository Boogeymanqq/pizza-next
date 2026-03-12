import { Container, Title, TopBar, Filters } from '@/shared/components/shared'
import { ProductsGroupList } from '@/shared/components/shared/products-group-list'
import { Suspense } from 'react'
import { findPizzas } from '@/shared/lib'
import { GetSearchParams } from '@/shared/lib/find-pizzas'

export default async function Home({
	searchParams,
}: {
	searchParams: GetSearchParams
}) {
	const categories = await findPizzas(searchParams)

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
						<Suspense>
							<Filters />
						</Suspense>
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
