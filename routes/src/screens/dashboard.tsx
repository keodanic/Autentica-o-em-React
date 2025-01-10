import {useEffect,useState} from 'react'
import axios from 'axios'

import useAuth from '../hooks/use-auth'

type Task={
  id:number;
  title:string;
  description:string;
  done:boolean
}

const Dashboard = ()=> {
  const [tasks,setTasks]=useState<Task[]>([])
  const {logout,token} = useAuth()
  
  async function getTasks() {
    const response = await axios.get('https://localhost:3333/task',{
      headers:{
        Authorization: 'Bearer ${token}'
      }
    })
    setTasks(response.data)
  }
  useEffect(()=>{
    getTasks()
  },[])
  async function handleLogout() {
    logout()
  }
  async function handleDone(id:number, done:boolean) {
    await axios.put('https://localhost:3333/task/${id}',{
      done:!done
    },{
      headers:{
        Authorization: 'Bearer ${token}'
      }
    })
    getTasks()
  }

  async function handleDelete(id:number) {
    await axios.delete('https://localhost:3333/task/${id}',{
      headers:{
        Authorization: 'Bearer ${token}'
      }
    })
    getTasks()
  }
return(
  <div>
    <header className='flex justify-between px-2'>
    <h1 className='text-2xl justify-between p-2'>
      Tasks
    </h1>
    <button className='bg-red-600' onClick={handleLogout}> Sair </button>
    </header>

    <main className='flex justify-center'>

    </main>
  </div>
);
}

export default Dashboard;