import {createContext,useState,ReactNode, useEffect} from 'react'
import axios from 'axios'

type AuthProviderProps={
  children:ReactNode
}

type AuthContextProps={
  token: string| null
  login: (email: string, password: string) => Promise<void>
  logout: ()=> Promise<void>
}

export const authContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider= ({children}: AuthProviderProps)=>{
  const [token, setToken] =useState <string|null>(null)

  useEffect(()=>{
    const storage = localStorage.getItem('nagigationIfma@2024!')
  if (storage){
    setToken(storage)
  }
},[])

async function login(email:string, password: string){
  const response= await axios.post("http://localhost:3333/session",{
    email,password
  })
  localStorage.setItem('navigationItem', response.data.token)
  setToken(response.data.token)
}

async function logout(){
  localStorage.removeItem('navigationIfma@2024!')
  setToken(null)
}
return(
  <authContext.Provider value={{token, login, logout}}>
  {children}
  </authContext.Provider>
);
}

export default AuthProvider;