import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import ProductDetail from "../Components/Page/Product/ProductDetails"
import AddToCart from "../Components/Page/Product/AddToCart"
import DispensoriesProduct from "../Components/Page/Home/Dashboard/ComponentDashboard/Dispensories/DispensoriesDetail"
import Signup from "../Components/Page/Signup/Signup"
import Login from "../Components/Page/Login/Login"
import SignupWithEmail from "../Components/Page/Signup/SignupWithEmail"
const routesConfig = [
  
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/Signup",
            element: <Signup></Signup>,
          },
          {
            path: "/SignupWithEmail",
            element: <SignupWithEmail></SignupWithEmail>,
          },
          {
            path: "/Login",
            element: <Login></Login>,
          },
          {
            path: "/Product",
            element: <Product></Product>,
          },
          {
            path: "/ProductDetail",
            element: <ProductDetail></ProductDetail>,
          },
          {
            path:"/AddToCart",
            element:<AddToCart/>
          },
          {
            path:"/DispensoriesProduct/:id",
            element:<DispensoriesProduct/>
          }
        ],
      },
]

  export default routesConfig