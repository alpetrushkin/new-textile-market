import React, { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SlClose } from 'react-icons/sl'
import { IPropsRegister } from '../../../interfaces/auth/Auth'
import { Button, TextField, Typography } from '@mui/material'

const Auth: React.FC<IPropsRegister> = ({
   register,
   errors,
}: IPropsRegister): JSX.Element => {
   const navigate = useNavigate()

   return (
      <>
         <span className="form__close" onClick={() => navigate('/')}>
            <SlClose size={30} />
         </span>

         <Typography
            variant="h4"
            fontWeight="600"
            textAlign="center"
            marginBottom={3}
         >
            Регистрация
         </Typography>

         <TextField
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите имя"
            variant="outlined"
            error={!!errors.username}
            helperText={errors.username ? `${errors.username.message}` : ''}
            {...register('username')}
         />

         <TextField
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите фамилию"
            variant="outlined"
            error={!!errors.firstname}
            helperText={errors.firstname ? `${errors.firstname.message}` : ''}
            {...register('firstname')}
         />

         <TextField
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? `${errors.email.message}` : ''}
            {...register('email')}
         />

         <TextField
            type="password"
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? `${errors.password.message}` : ''}
            {...register('password')}
         />

         <TextField
            type="password"
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Password"
            variant="outlined"
            error={!!errors.confirmPassword}
            helperText={
               errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
            }
            {...register('confirmPassword')}
         />

         <TextField
            fullWidth={true}
            margin="dense"
            label="Укажите номер телефона"
            variant="outlined"
            type="tel"
            error={!!errors.phone}
            helperText={errors.phone ? `${errors.phone.message}` : ''}
            {...register('phone')}
         />

         <Button
            sx={{
               marginTop: 2,
               marginBottom: 2,
               width: '100%',
            }}
            type="submit"
            variant="contained"
         >
            Создать аккаунт
         </Button>
         <Link to="/login">У меня есть аккаунт</Link>
      </>
   )
}

export default Auth
