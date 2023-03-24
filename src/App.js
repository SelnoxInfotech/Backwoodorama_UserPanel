import './App.css';
import "./AppStyle.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
