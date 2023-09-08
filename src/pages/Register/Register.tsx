import React, { JSX, useState } from 'react'
import Auth from '../../components/auth/authPage/Auth'
import { useLocation } from 'react-router-dom'
import Login from '../../components/auth/loginPage/Login'
import { useNavigate } from 'react-router-dom'
import api from '../../api'

const Register: React.FC = (): JSX.Element => {
   const location = useLocation()
   const navigate = useNavigate()

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [repeatPassword, setRepeatPassword] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [phone, setPhone] = useState('')

   const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault()
      if (location.pathname === '/login') {
         const userData = { email, password }

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
      <form onSubmit={handleSubmit}>
         {location.pathname === '/login' ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
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
      </form>
   )
}

export default Register
