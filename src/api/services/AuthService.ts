import { api } from '../http/common'
import { IFormAuth } from '../../interfaces/Auth'

const url = 'auth/register'

export const AuthService = {
   postAuth(args: IFormAuth) {
      return api.post(url, args)
   },
}
