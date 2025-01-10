
import {useState} from 'react'
import useAuth from '../hooks/use-auth';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const {login} = useAuth()

  async function handleLogin() {
    if(email && password) {
      login(email,password)
    }else{
      alert("Campos Obrigatorios")
    }
  }
return (
  <div className="min-h-screen bg-neutral-700 flex justify-center items-center">
    <div className='flex flex-col p-10 rounded gap-3 min-w-[440px]'>
      <input className='rounded h-12 px-3 outline-none' type="text" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
      <input className='rounded h-12 px-3 outline-none' type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
      <button className='bg-neutral-500 text-white h-12 rounded hover:bg-neutral-300' onClick={handleLogin}>Entrar</button>
    </div>
  </div>
);
}
export default Login;