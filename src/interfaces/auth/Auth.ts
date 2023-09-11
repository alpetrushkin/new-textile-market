import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface IPropsLogin<
   TFieldValues extends FieldValues = FieldValues,
   TContext = any
> {
   register: UseFormRegister<TFieldValues>
   errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister {
   setEmail: (value: string) => void
   setPassword: (value: string) => void
   setRepeatPassword: (value: string) => void
   setFirstName: (value: string) => void
   setLastName: (value: string) => void
   setPhone: (value: string) => void
}
