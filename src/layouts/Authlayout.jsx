import {Suspense} from 'react'
import { Outlet } from "react-router";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ThemeChanger from '../components/ThemeChanger';
import Loading from './../pages/Loading';
import SmothLoading from '../components/SmothLoading';

function Authlayout() {
  return (
    <div>
      <Navbar />
      <SmothLoading>
      <Outlet />
      </SmothLoading>
      <ThemeChanger/>
      <Footer/>
    </div>
  )
}

export default Authlayout