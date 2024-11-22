import { z } from 'zod';

export const RegisterFormSchema = z.object ({
    name: z
    .string()
    .min(2, {message: 'Name must be at least 3 characters long.'})
    .trim(),
    email: z.string().email({message: 'Please enter a valid email.'}).trim(),
    password: z
    .string()
    .min(8, {message: 'Be at least 8 characters long'})
    .regex(/[a-zA-Z]/, {message: 'Contain at lease one Uppercase letter.'})
    .regex(/[0-9]/, {message: 'Contain at lease one number.'})
    .regex(/[^a-zA-Z0-9]/, {message: 'Contain at lease one special character. '})
    .trim()

})