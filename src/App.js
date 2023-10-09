import './App.css';
import "./AppStyle.css";
import './mediaQuery.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './termconditions.css';
import ConfigRoute from "./Routes/ConfigRoute"
function App() {
  const router = createBrowserRouter(ConfigRoute);
  const helmetContext = {};
  return (


    <>
      <HelmetProvider context={helmetContext}>
        <GoogleOAuthProvider clientId="418178406595-vqsd5staarqh0pibnho4l4s63gio1bm4.apps.googleusercontent.com">
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </HelmetProvider>
    </>

  );
}


export default App;
