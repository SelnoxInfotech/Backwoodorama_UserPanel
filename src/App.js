'use client';

import './styles/App.css';
import './styles/termconditions.css';
import "./styles/AppStyle.css";
import "./styles/Style.css";
import './styles/mediaQuery.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./styles/Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from "react-error-boundary";
import ConfigRoute from "./Routes/ConfigRoute"
function App() {
  const router = createBrowserRouter(ConfigRoute);
  const helmetContext = {};
  return (


    <>
    {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
      <HelmetProvider context={helmetContext}>
        <GoogleOAuthProvider  clientId="418178406595-vqsd5staarqh0pibnho4l4s63gio1bm4.apps.googleusercontent.com">
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </HelmetProvider>
      {/* </ErrorBoundary> */}
    </>

  );
}
export default App;