import { z } from 'zod'

export const checkoutFormSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'Имя должно содержать минимум 2 символа' }),
	lastName: z
		.string()
		.min(2, { message: 'Фамилия должна содержать минимум 2 символа' }),
	email: z.string().email({ message: 'Некорректный email' }),
	phone: z.string().min(10, { message: 'Некорректный номер телефона' }),
	address: z.string().min(5, { message: 'Некорректный адрес' }),
	comment: z.string().optional(),
})

export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>
