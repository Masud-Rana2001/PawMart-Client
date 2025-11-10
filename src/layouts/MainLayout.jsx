
import { Outlet } from "react-router";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeChanger from '../components/ThemeChanger';
import Loading from './../pages/Loading';
import SmothLoading from '../components/SmothLoading';

function MainLayout() {
  return (
    <div className="min-h-screen  ">
      <Navbar />
        <SmothLoading>
          <Outlet />
        </SmothLoading>
      <ThemeChanger/>
      <Footer/> 
    </div>
  )
}

export default MainLayout