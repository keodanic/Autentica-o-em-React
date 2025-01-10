import {Routes, Route} from 'react-router'
import Login from '../screens/login'

const PublicRoutes= ()=>{
  return (
    <Routes>
      <Route index element= {<Login/>}/>
    </Routes>
  );
}

export default PublicRoutes