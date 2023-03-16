import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
// import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Page/Login/Login"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Component/Navbar/Navbar"
import Footer from "./Components/Component/Footer/Footer"
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path="/login" element={ <Login/> } />

        </Routes>
        <div className='footer_section p-4'>
        <Footer/>

        </div>
    </div>
  );
}


export default App;
