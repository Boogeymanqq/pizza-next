import React from 'react'
import Image from 'next/image'

import { Container } from './container'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Button } from '../ui'
import Link from 'next/link'
import { SearchInput } from './search-input'
import { CartButton } from './cart-button'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border-b border-gray-100', className)}>
			<Container className="flex items-center justify-between py-8">
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image src="/logo.png" width={35} height={35} alt="Logo" />
						<div>
							<h1 className="text-2xl uppercase font-black">Next Pizza</h1>
							<p className="text-sm text-gray-400 leading-3">
								вкусней уже некуда
							</p>
						</div>
					</div>
				</Link>

				<div className="mx-10 flex-1">
					<SearchInput />
				</div>

				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-2">
						<User size={16} />
						Войти
					</Button>

					<CartButton />
				</div>
			</Container>
		</header>
	)
}
