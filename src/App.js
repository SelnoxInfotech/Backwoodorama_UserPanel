import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Page/Login/Login"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Component/Navbar/Navbar"
import Footer from "./Components/Component/Footer/Footer"
import CategoryProduct from "./Components/Page/Home/Category/CategoryProduct";
import DispensoriesAddress from "./Components/Page/Home/Dispensories/DispensoriesAddress"
import StoreLocationMap from "./Components/Component/Map/StoreLocation"
import WeedProduct from './Components/Page/Home/Weed/WeedProduct';
import LatestServices from "./Components/Page/Home/LatestArticle/LatestServices"
import Map from './Components/Component/Map/map';
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path='/CategoryProduct' element={<CategoryProduct/>}/>
         <Route  path="/DispensoriesAddress" element={<DispensoriesAddress/>}/>
         <Route  path="/StoreLocationMap" element={<StoreLocationMap/>}/>
         <Route  path="/LocationMap" element={<Map/>}/>
         <Route  path="/WeedProduct" element={<WeedProduct/>}/>
         <Route  path="/LatestServices" element={<LatestServices/>}/>

        <Route path="/StoreLocationMap" element={<StoreLocationMap isMarkerShown />}/>
        
        <Route path="/StoreLocationMap" element={<StoreLocationMap  />}/>
        </Routes>
    
    </div>
  );
}


export default App;
