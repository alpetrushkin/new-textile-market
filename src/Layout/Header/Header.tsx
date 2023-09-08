import React from 'react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__logos">
                  <Link to={'/'} className="header__logos-link">
                     Logos
                  </Link>
               </div>
               <div className="header__validation">
                  <Link to={'/login'} className="header__validation-logo">
                     <BiUser size={20} />
                     Войти
                  </Link>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
