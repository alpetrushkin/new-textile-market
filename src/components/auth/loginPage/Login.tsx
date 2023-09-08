import React, { JSX, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { SlClose } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { IPropsLogin } from '../../../interfaces/auth/Auth'

const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
   const { setEmail, setPassword } = props
   const [eye, setEye] = useState(false)

   const navigate = useNavigate()

   return (
      <div className="form__root">
         <span className="form__close" onClick={() => navigate('/')}>
            <SlClose size={30} />
         </span>
         <div className="form">
            <h2 className="form__title">Вход</h2>

            <div>
               <input
                  className="form__input"
                  type="email"
                  placeholder={'Введите Email'}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>

            <div style={{ position: 'relative' }}>
               <input
                  className="form__input"
                  type={eye ? 'text' : 'password'}
                  placeholder={'Укажите пароль'}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <span
                  className="form__eye"
                  onClick={() => setEye((prev) => !prev)}
               >
                  {eye ? <IoMdEyeOff /> : <IoMdEye />}
               </span>
            </div>

            <button type="submit" className="form__btn">
               Войти
            </button>
            <Link to="/register">У меня нет аккаунта</Link>
         </div>
      </div>
   )
}

export default Login
