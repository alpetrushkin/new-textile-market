import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import PrivateRouter from './utils/router/privateRouter'
import './styles/style.scss'

function App() {
   return (
      <div>
         <Routes>
            <Route element={<PrivateRouter />}>
               <Route path={''} element={<Layout />}>
                  <Route path={'/'} element={<Home />} />
               </Route>
            </Route>
            <Route path={'/login'} element={<Register />} />
            <Route path={'/register'} element={<Register />} />
         </Routes>
      </div>
   )
}

export default App
