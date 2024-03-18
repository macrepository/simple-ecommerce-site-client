import { __ } from '@/utilities/stringUtils'
import { message } from '@/validations/messages'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const firstName = z
  .string()
  .min(1, __(message.required, 'First Name'))
  .max(50, __(message.maxOf, 'First Name', '50'))
const lastName = z
  .string()
  .min(1, __(message.required, 'Last Name'))
  .max(50, __(message.maxOf, 'Last Name', '50'))
const email = z
  .string()
  .min(1, __(message.required, 'Email'))
  .email({ message: __(message.invalid, 'Email') })
const password = z
  .string()
  .min(1, __(message.required, 'Password'))
  .min(6, __(message.requiredCharactersOf, 'Password', 6))
  .regex(/[a-z]/, { message: __(message.requireLowerCaseOf, 'Password', 1) })
  .regex(/[0-9]/, { message: __(message.requireNumberOf, 'Password', 1) })
const confirmPassword = z.string().min(1, __(message.required, 'Confirm Password'))

export const validationCustomerCreateAccountSchema: any = toTypedSchema(
  z
    .object({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: __(message.notMatch, 'Password'),
      path: ['confirmPassword']
    })
)

export const validationCustomerLoginSchema: any = toTypedSchema(
  z.object({
    email,
    password
  })
)
