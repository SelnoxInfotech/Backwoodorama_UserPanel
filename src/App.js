import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Page/Login/Login"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Component/Navbar/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={ <Login/> } />
        </Routes>
    </div>
  );
}


export default App;
