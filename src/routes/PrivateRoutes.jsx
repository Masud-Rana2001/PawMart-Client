import {useContext} from 'react'


import { Navigate, useLocation } from 'react-router';
import Loading from './../pages/Loading';
import AuthContext from './../contexts/AuthContext';


function PrivateRoutes({ children }) {

  const location = useLocation();
 
  const { currentUser ,isUserLoading} = useContext(AuthContext);
  
  if(isUserLoading) return <Loading/>

  if (currentUser && currentUser.email) {
    return children
  }
  return <Navigate to="/auth/signin" state={location.pathname}></Navigate>


}

export default PrivateRoutes