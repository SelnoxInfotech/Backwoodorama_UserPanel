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
import EmptyCard from "../Components/Page/Product/EmptyCard/EmptyCard"
import Deliveries from "../Components/Page/Deliveries/Deliveries"
import Brand from "../Components/Page/Brand/Brand"
import CategoryProduct from "../Components/Page/Product/AllCategory";
import SubcategoryProduct from "../Components/Page/Product/SubCategoryProduct";
import NewProductDetails from "../Components/Page/Product/NewProductDetails/NewProductDetails"
import RelatedVerifyBrand from "../Components/Page/Brand/RelatedVerifyBrand/RelatedVerifyBrand";
import RelatedDeals from "../Components/Page/Deals/RelatedDeals";
import Strain from "../Components/Page/Strain/Strain";
import MainDeals from "../Components/Page/MainDealsFolder/MainDeals";
import CheckAge from "../Components/Page/CheckAgeEligblityPopup/checkAge";
import AboutUs from "../Components/Page/AboutUs/AboutUs";
import Learn from "../Components/Page/Learn/Learn";
import LearnTabs from "../Components/Page/Learn/LearnTabs";
import LearnCardRelatedPage from "../Components/Page/Learn/LearnCardRelatedPage/LearnCardRelatedPage";
import LearnCardRelatedPageBanner from "../Components/Page/Learn/LearnCardRelatedPage/LearnCardRelatedPageComponent/LearnCardRelatedPageBanner";
import Profile from "../Components/Page/Profile/Profile";
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
            path: "/NewProductDetails",
            element: <NewProductDetails></NewProductDetails>,
          },
          {
            path: "/Brand",
            element: <Brand></Brand>,
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
            path:"/DispensoriesProduct/:id/:tab",
            element:<DispensoriesProduct/>
          }
          ,
          {
            path:"/Dispansires",
            element:<OpenDispansires/>
          }
          ,
          {
            path:"/RelatedVerifyBrand/:id",
            element:<RelatedVerifyBrand/>
          },

          {
            path:"/StoreDetail",
            element:<StoreDetail/>
          },
          {
            path:"/RelatedDeals",
            element:<RelatedDeals/>
          },
          {
            path:"/MainDeals",
            element:<MainDeals/>
          },
          {
            path:"/Strain",
            element:<Strain/>
          },
          {
            path:"/EmptyCard",
            element:<EmptyCard/>
          }
          ,
          {
            path:"/CategoryProduct/:Categoryname",
            element:<CategoryProduct></CategoryProduct>
          }
          ,
          {
            path:"/Product/:SubCategoryname",
            element:<SubcategoryProduct></SubcategoryProduct>
          }
          ,
          {
            path:"/CheckAge",
            element:<CheckAge></CheckAge>
          },
          {
            path:"/AboutUs",
            element:<AboutUs></AboutUs>
          },
          {
            path:"/LearnTabs",
            element:<LearnTabs/>
          },
          {
            path:"/LearnCardRelatedPage",
            element:<LearnCardRelatedPage/>
          },
          {
            path:"/Profile",
            element:<Profile/>
          }
        ],
      },
]

  export default routesConfig