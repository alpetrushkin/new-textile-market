import React, { JSX, useState } from 'react'
import Auth from '../../components/auth/authPage/Auth'
import { useLocation } from 'react-router-dom'
import Login from '../../components/auth/loginPage/Login'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthSchema, LoginSchema } from '../../utils/yup'
import { AppErrors } from '../../common/errors'

const Register: React.FC = (): JSX.Element => {
   const location = useLocation()
   const navigate = useNavigate()

   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm({
      resolver: yupResolver(
         location.pathname === '/login' ? LoginSchema : AuthSchema
      ),
   })

   const handleSubmitForm = async (
      data: any,
      e: { preventDefault: () => void }
   ) => {
      e.preventDefault()
      if (location.pathname === '/login') {
         const userData = { email: data.email, password: data.password }

         const user = await api.postLogin(userData)
         navigate('/')
         console.log(user.data)
      } else {
         if (data.password === data.confirmPassword) {
            const userData = {
               email: data.email,
               password: data.password,
               firstName: data.firstName,
               lastName: data.username,
               phone: data.phone,
            }

            const newUser = await api.postAuth(userData)
            navigate('/')
            console.log(newUser.data)
         } else {
            throw new Error(AppErrors.PasswordDoNotMatch)
         }
      }
   }

   return (
      <div className="form__root">
         <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               flexDirection="column"
               width={440}
               margin="auto"
               padding={5}
               textAlign="center"
            >
               {location.pathname === '/login' ? (
                  <Login register={register} errors={errors} />
               ) : location.pathname === '/register' ? (
                  <Auth register={register} errors={errors} />
               ) : null}
            </Box>
         </form>
      </div>
   )
}

export default Register
