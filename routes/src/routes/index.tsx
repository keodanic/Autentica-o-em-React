import {BrowserRouter} from "react-router";
import PrivateRoutes from "./privateroutes";
import PublicRoutes from "./publicrouts";
import useAuth from "../hooks/use-auth";

const Routes=()=>{
  const {token} =useAuth()
  return(
    <BrowserRouter>
    {
      token?<PrivateRoutes/> : <PublicRoutes/>
    }
    </BrowserRouter>
  )
}

export default Routes;  