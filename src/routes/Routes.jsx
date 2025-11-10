
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/home/HomePage';
import Authlayout from '../layouts/Authlayout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Loading from './../pages/Loading';
import PlantDetailts from '../pages/PlantDetailts';
import PrivateRoutes from './PrivateRoutes';
import PrivateLayout from '../layouts/PrivateLayout';

import MyProfile from './../pages/MyProfile';
import About from './../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Error from '../pages/Error';
import PetsAndSupplies from './../pages/PetsAndSupplies';
import ListingDetails from '../pages/ListingDetails';
import MyOrders from '../pages/MyOrders';
import MyListings from '../pages/MyListing';
import CreateListing from '../pages/CreateListing';





const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error/>,
    children: [
      {
        path: "",
        Component: HomePage,
      }, {
        path: "/pets-and-supplies",
        Component:PetsAndSupplies
      }
      , {
        path: "/about",
        Component:About
      }
      , {
        path: "/contact",
        Component:Contact
      },
       {
        path: "/privacypolicy",
        Component:PrivacyPolicy
      }

    ]
    }
    ,
  {
    path: "/auth",
    element: <Authlayout />,
    errorElement:<Error/>,
    children: [
      {
        path: '/auth/signin',
        element: <SignIn />
      },
      {
        path: '/auth/signup',
        element: <SignUp />
      },
    ]
    },
  {
    path: "",
    element: <PrivateRoutes>
              <PrivateLayout/>
    </PrivateRoutes>,
    errorElement:<Error/>,
    children: [
      {
        path: '/myorders',
        element: <MyOrders />
      },
      {
        path: "/pets-and-supplies/:id",
        element: <ListingDetails/>
      },
      {
        path: "/mylisting/",
        element: <MyListings/>
      }, {
        path: "/createListing",
        element : <CreateListing/>
      }
    ]
  }, {
    path:"*",
    element:<Error/>
    }
]);

export default router;