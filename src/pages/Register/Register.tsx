import React, { JSX, useState } from 'react'
import Auth from '../../components/auth/authPage/Auth'
import { useLocation } from 'react-router-dom'
import Login from '../../components/auth/loginPage/Login'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import { useForm } from 'react-hook-form'
import { Box } from '@mui/material'

const Register: React.FC = (): JSX.Element => {
   const location = useLocation()
   const navigate = useNavigate()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [phone, setPhone] = useState('')
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm()

   console.log('ERRORS>>>', errors)
   const handleSubmitForm = async (
      data: any,
      e: { preventDefault: () => void }
   ) => {
      console.log('DATA>>>', data)
      e.preventDefault()
      if (location.pathname === '/login') {
         const userData = { email: data.email, password: data.password }

         const user = await api.postLogin(userData)
         navigate('/')
         console.log(user.data)
      } else {
         if (password === repeatPassword) {
            const userData = {
               email,
               password,
               firstName,
               lastName,
               phone,
            }

            const newUser = await api.postAuth(userData)
            navigate('/')
            console.log(newUser.data)
         } else {
            throw new Error('У вас не совпадают пароли')
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
                  <Auth
                     setEmail={setEmail}
                     setPassword={setPassword}
                     setRepeatPassword={setRepeatPassword}
                     setFirstName={setFirstName}
                     setLastName={setLastName}
                     setPhone={setPhone}
                  />
               ) : null}
            </Box>
         </form>
      </div>
   )
}

export default Register
