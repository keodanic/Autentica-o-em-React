import {Routes, Route} from 'react-router'
import Dashboard from '../screens/dashboard'

const PrivateRoutes= ()=>{
  return (
    <Routes>
      <Route index element= {<Dashboard/>}/>
    </Routes>
  );
}

export default PrivateRoutes