import React, { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SlClose } from 'react-icons/sl'
import { IPropsRegister } from '../../../interfaces/auth/Auth'
import {
   Button,
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   TextField,
   Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Auth: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
   const { setEmail, setFirstName, setLastName, setPhone } = props

   const [showPassword, setShowPassword] = React.useState(false)
   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }

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
            type="text"
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите имя"
            variant="outlined"
            onChange={(event) => setLastName(event.target.value)}
         />

         <TextField
            type="text"
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите фамилию"
            variant="outlined"
            onChange={(event) => setFirstName(event.target.value)}
         />

         <TextField
            type="text"
            color="primary"
            margin="dense"
            fullWidth={true}
            label="Введите email"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
         />

         <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
               Password
            </InputLabel>
            <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                  </InputAdornment>
               }
               label="Password"
            />
         </FormControl>

         <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
               Password
            </InputLabel>
            <OutlinedInput
               id="outlined-adornment-password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                     >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                  </InputAdornment>
               }
               label="Password"
            />
         </FormControl>

         <TextField
            fullWidth={true}
            margin="dense"
            label="Укажите номер телефона"
            variant="outlined"
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
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
