
import Navbar from './../components/Navbar';

import Footer from './../components/Footer';
import { Outlet } from 'react-router';
import ThemeChanger from '../components/ThemeChanger';
import Loading from './../pages/Loading';
import SmothLoading from '../components/SmothLoading';

function PrivateLayout() {
 
  
  
  return (
    <>
      <Navbar />
    
      <SmothLoading>
         <Outlet />
       </SmothLoading>
      <ThemeChanger/>
    <Footer/>
    </>
  )
}

export default PrivateLayout