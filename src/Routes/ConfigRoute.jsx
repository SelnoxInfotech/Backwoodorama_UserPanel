import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import ProductDetail from "../Components/Page/Product/ProductDetails"
import AddToCart from "../Components/Page/Product/AddToCartComponent/AddToCart"
import DispensoriesProduct from "../Components/Page/Dispansires/DispansiresComponent/DispensoriesDetail"
import Signup from "../Components/Page/Signup/Signup"
import Login from "../Components/Page/Login/Login"
import SignupWithEmail from "../Components/Page/Signup/SignupWithEmail"
import ResetPassword from "../Components/Page/ResetPassword/ResetPassword"
import CreatePassword from "../Components/Page/ResetPassword/CreatePassword"
import CheckOutMainPage from "../Components/Page/Checkout/CheckoutMainPage"
import ProtectRout from "../Routes/ProtectRout"
import PlaceOrder from "../Components/Page/Checkout/PlaceOrder"
import OpenDispansires from "../Components/Page/Dispansires/Dispansires"
import StoreDetail from "../Components/Page/StoreDetail/StoreDetail"
import Review from "../Components/Page/Review/Review";
import EmptyCard from "../Components/Page/Product/EmptyCard/EmptyCard"
import Deliveries from "../Components/Page/Deliveries/Deliveries"
const routesConfig = [
  
      {
        element: <Layout />,
      
        
        children: [
          {
            path: "/Signup",
            element: <Signup></Signup>,
          },
          {
            path: "/PlaceOrder",
            element: <PlaceOrder></PlaceOrder>,
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
            path:"/Deliveries",
            element:<Deliveries></Deliveries>
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
            element:  <ProtectRout Component={CheckOutMainPage}></ProtectRout> 
          },

          {
            path:"/DispensoriesProduct/:id",
            element:<DispensoriesProduct/>
          }
          ,
          {
            path:"/Dispansires",
            element:<OpenDispansires/>
          }
          ,

          {
            path:"/StoreDetail",
            element:<StoreDetail/>
          },
          {
            path:"/Review",
            element:<Review/>
          },
          {
            path:"/EmptyCard",
            element:<EmptyCard/>
          }
        ],
      },
]

  export default routesConfig