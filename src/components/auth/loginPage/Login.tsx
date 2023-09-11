import React, { JSX } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlClose } from 'react-icons/sl'
import { IPropsLogin } from '../../../interfaces/auth/Auth'
import { Button, TextField, Typography } from '@mui/material'

const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
   const { register, errors } = props

   console.log('REGISTER>>>>', register.name)

   const navigate = useNavigate()

   return (
      <>
         <span className="form__close" onClick={() => navigate('/')}>
            <SlClose size={30} background={'black'} />
         </span>
         <>
            <Typography
               variant="h4"
               fontWeight="600"
               textAlign="center"
               marginBottom={3}
            >
               Вход
            </Typography>

            <TextField
               error={!!errors.email}
               helperText={errors.email ? `${errors.email.message}` : ''}
               color="primary"
               margin="dense"
               fullWidth={true}
               label="Email"
               variant="outlined"
               {...register('email', {
                  required: 'Введите email',
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
               })}
            />

            <TextField
               error={!!errors.password}
               helperText={errors.password ? `${errors.password.message}` : ''}
               color="primary"
               margin="dense"
               fullWidth={true}
               label="Password"
               variant="outlined"
               {...register('password', {
                  required: 'Введите пароль',
                  minLength: 6,
               })}
            />

            <Button
               sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  width: '100%',
               }}
               variant="contained"
               type="submit"
            >
               Войти
            </Button>
            <Typography>
               <Link to="/register">У меня нет аккаунта</Link>
            </Typography>
         </>
      </>
   )
}

export default Login
