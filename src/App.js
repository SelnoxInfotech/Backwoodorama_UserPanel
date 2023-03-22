import './App.css';
import "./AppStyle.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Page/Login/Login"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Component/Navbar/Navbar"
import CategoryProduct from "./Components/Page/Home/Category/CategoryProduct";
import DispensoriesAddress from "./Components/Page/Home/Dispensories/DispensoriesAddress"
import StoreLocationMap from "./Components/Component/Map/StoreLocation"
import WeedProduct from './Components/Page/Home/Weed/WeedProduct';
import LatestServices from "./Components/Page/Home/LatestArticle/LatestServices"
import Map from './Components/Component/Map/map';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConfigRoute from "./Routes/ConfigRoute"
function App() {
  const router = createBrowserRouter(ConfigRoute);
  return (
   
    
     <>
      <RouterProvider router={router} />
     </>
 
  );
}


export default App;
