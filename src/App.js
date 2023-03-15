import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Login from "./Components/Page/Login/Login"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Login/> } />
        </Routes>
    </div>
  );
}


export default App;
