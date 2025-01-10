import {useContext} from 'react'
import {authContext} from '../context/auth-context';

const useAuth=()=>{
  const context= useContext(authContext)
  return context
}

export default useAuth;