import { api } from '../http/common'
import { IFormLogin } from '../../interfaces/Login'

const url = 'auth/login'

export const LoginService = {
   postLogin(args: IFormLogin) {
      return api.post(url, args)
   },
}
