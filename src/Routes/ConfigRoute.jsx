import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import ProductDetail from "../Components/Page/Product/ProductDetails"
import AddToCart from "../Components/Page/Product/Component/AddToCart"
import DispensoriesProduct from "../Components/Page/Home/Dashboard/ComponentDashboard/Dispensories/DispensoriesDetail"
import Signup from "../Components/Page/Signup/Signup"
import Login from "../Components/Page/Login/Login"
import SignupWithEmail from "../Components/Page/Signup/SignupWithEmail"
import ResetPassword from "../Components/Page/ResetPassword/ResetPassword"
import CreatePassword from "../Components/Page/ResetPassword/CreatePassword"
<<<<<<< HEAD
import DeliveryOption from "../Components/Page/Checkout/DeliveryOption"
import DeliveryInformation from "../Components/Page/Checkout/DeliveryInformation"
import CheckOutMainPage from "../Components/Page/Checkout/CheckoutMainPage"
=======
import DeliveryOption from "../Components/Page/Product/Component/DeliveryOption"
import DeliveryInformation from "../Components/Page/Product/Component/DeliveryInformation"
>>>>>>> 9ea56ff95a3cf6baf6e00bf22a69d31b02c584d3
const routesConfig = [
  
      {
        element: <Layout />,
        children: [
          {
            path: "/Signup",
            element: <Signup></Signup>,
          },
          {
            path: "/",
            element: <Dashboard />,
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
            path: "/ResetPassword",
            element: <ResetPassword></ResetPassword>,
          },
          {
            path: "/CreatePassword",
            element: <CreatePassword></CreatePassword>,
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
            path:"/CheckOutMainPage",
            element:<CheckOutMainPage/>
          },

          {
            path:"/DeliveryOption",
            element:<DeliveryOption/>
          },
          {
            path:"/DeliveryInformation",
            element:<DeliveryInformation/>
          },
          {
            path:"/DispensoriesProduct/:id",
            element:<DispensoriesProduct/>
          }
        ],
      },
]

  export default routesConfig