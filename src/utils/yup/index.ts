import * as yup from 'yup'
import { AppErrors } from '../../common/errors'

export const LoginSchema = yup.object().shape({
   email: yup
      .string()
      .email(AppErrors.InvalidEmail)
      .required(AppErrors.RequiredField),
   password: yup
      .string()
      .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField)
      .matches(
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
         AppErrors.InvalidPassword
      ),
})

export const AuthSchema = yup.object().shape({
   username: yup.string().required(AppErrors.RequiredField),
   firstname: yup.string().required(AppErrors.RequiredField),
   email: yup
      .string()
      .email(AppErrors.InvalidEmail)
      .required(AppErrors.RequiredField),
   password: yup
      .string()
      .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField)
      .matches(
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
         AppErrors.InvalidPassword
      ),
   confirmPassword: yup
      .string()
      .min(8, AppErrors.minLength)
      .required(AppErrors.RequiredField)
      .matches(
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
         AppErrors.InvalidPassword
      ),
   phone: yup
      .string()
      .min(11, AppErrors.MinNumberPhone)
      .max(11, AppErrors.MaxNumberPhone)
      .required(AppErrors.RequiredField)
      .matches(
         /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
         AppErrors.InvalidPhone
      ),
})
