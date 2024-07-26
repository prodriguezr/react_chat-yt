import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerFormSchema = z
  .object({
    photoURL: z
      .instanceof(File, {
        message: 'Please upload a valid image file',
      })
      .refine((file) => file.size < 2 * 1024 * 1024, {
        message: 'File size must be less than 2MB',
      }),
    displayName: z
      .string()
      .min(1, 'Display Name is required')
      .max(50, 'Display name must be 50 characters or less'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const contactFormSchema = z.object({
  searchTerm: z.string().min(1, 'Contact name or email is required'),
});
