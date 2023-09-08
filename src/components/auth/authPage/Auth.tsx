import React, { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { SlClose } from 'react-icons/sl'
import { IPropsRegister } from '../../../interfaces/auth/Auth'

const Auth: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
   const {
      setEmail,
      setPassword,
      setRepeatPassword,
      setFirstName,
      setLastName,
      setPhone,
   } = props

   const [eye, setEye] = React.useState(false)

   const navigate = useNavigate()

   return (
      <div className="form__root">
         <span className="form__close" onClick={() => navigate('/')}>
            <SlClose size={30} />
         </span>

         <div className="form">
            <h2 className="form__title">Регистрация</h2>

            <div>
               <input
                  className="form__input"
                  type="text"
                  placeholder={'Введите ваше имя'}
                  onChange={(event) => setLastName(event.target.value)}
               />
            </div>

            <div>
               <input
                  className="form__input"
                  type="text"
                  placeholder={'Введите вашу фамилию'}
                  onChange={(event) => setFirstName(event.target.value)}
               />
            </div>

            <div>
               <input
                  className="form__input"
                  type="email"
                  placeholder={'Введите Email'}
                  onChange={(event) => setEmail(event.target.value)}
               />
            </div>

            <div style={{ position: 'relative' }}>
               <input
                  className="form__input"
                  type={eye ? 'text' : 'password'}
                  placeholder={'Придумай пароль'}
                  onChange={(event) => setPassword(event.target.value)}
               />
               <span
                  className="form__eye"
                  onClick={() => setEye((prev) => !prev)}
               >
                  {eye ? <IoMdEyeOff /> : <IoMdEye />}
               </span>
            </div>

            <div style={{ position: 'relative' }}>
               <input
                  className="form__input"
                  type={eye ? 'text' : 'password'}
                  placeholder={'Повторите пароль'}
                  onChange={(event) => setRepeatPassword(event.target.value)}
               />
               <span
                  className="form__eye"
                  onClick={() => setEye((prev) => !prev)}
               >
                  {eye ? <IoMdEyeOff /> : <IoMdEye />}
               </span>
            </div>

            <div>
               <input
                  className="form__input"
                  type="tel"
                  placeholder={'8-917-063-45-678'}
                  onChange={(event) => setPhone(event.target.value)}
               />
            </div>

            <button type="submit" className="form__btn">
               Создать аккаунт
            </button>
            <Link to="/login">У меня есть аккаунт</Link>
         </div>
      </div>
   )
}

export default Auth
