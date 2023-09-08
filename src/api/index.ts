import { AuthService } from './services/AuthService'
import { LoginService } from './services/LoginService'

export default {
   ...AuthService,
   ...LoginService,
}
