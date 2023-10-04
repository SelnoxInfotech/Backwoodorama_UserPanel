import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import AddToCart from "../Components/Page/Product/AddToCartComponent/AddToCart"
import DispensoriesDetails from "../Components/Page/Dispansires/DispansiresComponent/DispensoriesDetail"
import Signup from "../Components/Page/Signup/Signup"
import Login from "../Components/Page/Login/Login"
import SignupWithEmail from "../Components/Page/Signup/SignupWithEmail"
import ForgotPassword from "../Components/Page/ResetPassword/ForgotPassword"
import CreatePassword from "../Components/Page/ResetPassword/CreatePassword"
import CheckOutMainPage from "../Components/Page/Checkout/CheckoutMainPage"
import ProtectRout from "../Routes/ProtectRout"
import PlaceOrder from "../Components/Page/Checkout/PlaceOrder"
import OpenDispansires from "../Components/Page/Dispansires/Dispansires"
import StoreDetail from "../Components/Page/StoreDetail/StoreDetail"
import EmptyCard from "../Components/Page/Product/EmptyCard/EmptyCard"
import Deliveries from "../Components/Page/Deliveries/Deliveries"
import Brand from "../Components/Page/Brand/Brand"
import NewProductDetails from "../Components/Page/Product/NewProductDetails/NewProductDetails"
import RelatedVerifyBrand from "../Components/Page/Brand/RelatedVerifyBrand/RelatedVerifyBrand";
import RelatedDeals from "../Components/Page/Deals/RelatedDeals";
import Strain from "../Components/Page/Strain/Strain";
import MainDeals from "../Components/Page/MainDealsFolder/MainDeals";
import AboutUs from "../Components/Page/AboutUs/AboutUs";
import LearnTabs from "../Components/Page/Learn/LearnTabs";
import LearnCardRelatedPage from "../Components/Page/Learn/LearnCardRelatedPage/LearnCardRelatedPage";
import Profile from "../Components/Page/Profile/Profile";
import EditProfile from "../Components/Page/Profile/EditProfile/EditProfile";
import FourZeroFour from "../Components/Page/ErrorPage/FourZeroFour";
import FiveZeroThree from "../Components/Page/ErrorPage/FiveZeroThree";
import FourZeroThree from "../Components/Page/ErrorPage/FourZeroThree";
import MyOrder from "../Components/Page/MyOrder/MyOrder";
import MyOrderProductDetail from "../Components/Page/MyOrder/MyOrderProductDetail";
import StrainProduct from "../Components/Page/Strain/StrainProduct";
import Blogs from "../Components/Page/Blog/Blog";
import WhisLists from "../Components/Component/Whishlist/WhisLists/WhisLists";
import LawStateDescription from "../Components/Page/Learn/Laws/LawStateDescription/LawStateDescription";
import RoutingDespen from "../Routes/RoutingDespen"
import RoutingList from "../Routes/RoutingList"
import Termsconditions from '../Components/Page/Termsconditions/Termsconditions.jsx'
import Cookiespolicy from '../Components/Page/Cookiespolicy/Cookiespolicy.jsx'
import Privatepolicy from '../Components/Page/Privacypolicy/Privacypolicy.jsx'
import Allblogs from "../Components/Page/Blog/BlogComponent/Allblogs";
import Sitemap from '../generateSitemap';
const routesConfig = [

  {
    element: <Layout />,


    children: [
      // //////////////////////////////////////////////////////////// Complete ///////////////////////////////////////////////////////////
    
      {
        path: "/Sitemap",
        element: <RoutingList Component={Sitemap} ></RoutingList>,
      },
      {
        path: "/login",
        element: <RoutingList Component={Login} ></RoutingList>,
      },
      {
        path: "/signupwithemail",
        element: <RoutingList Component={SignupWithEmail} ></RoutingList>,
      },
      {
        path: "/signup",
        element: <RoutingList Component={Signup} ></RoutingList>
      },
      {
        path: "/",
        element: <RoutingList Component={Dashboard} ></RoutingList>,

      },
      {
        path: "/brands",
        element: <RoutingList Component={Brand} ></RoutingList>,
      },
      {
        path: "/brands/:Name/:id",
        element: <RoutingList Component={RelatedVerifyBrand} ></RoutingList>
      },

      {
        path: "/deals",
        element: <RoutingList Component={MainDeals} ></RoutingList>
      },
      //  Weed Dispensires
      {
        path: "/weed-dispensaries/in/:Country/:state?/:city?",
        element: <RoutingDespen Component={OpenDispansires}  ></RoutingDespen>
      },
      {
        path: "/weed-dispensaries/:StoreName/:tab?/:Category?/:SubCategory?/:id/",
        element: <RoutingList Component={DispensoriesDetails} ></RoutingList>
      },
      {
        path: "/weed-dispensaries/:StoreName/menu/:category/:subcategory?/:product/:id/",
        element: <RoutingList Component={NewProductDetails} ></RoutingList>
      },
      {
        path: "/weed-deliveries/in/:Country/:state?/:city?",
        element: <RoutingDespen Component={Deliveries}  ></RoutingDespen>
      },


      {
        path: "/weed-deliveries/:StoreName/:tab?/:Category?/:SubCategory?/:id/",
        element: <RoutingList Component={DispensoriesDetails} ></RoutingList>
      },
      {
        path: "/weed-deliveries/:StoreName/menu/:Category/:SubCategory?/:Product/:id/",
        element: <RoutingList Component={NewProductDetails} ></RoutingList>
      },
      // End
      //  Learn Rout
      {
        path: "/learn",
        element: <RoutingList Component={LearnTabs} ></RoutingList>
      },
      {
        path: "/learn/laws-and-regulation/",
        element: <RoutingList Component={LearnTabs} ></RoutingList>
      },
      {
        path: "/learn/laws-and-regulation/:State/:id",
        element: <RoutingList Component={LawStateDescription} ></RoutingList>
      },

      {
        path: "/strain",
        element: <RoutingList Component={Strain} ></RoutingList>
      },
      {
        path: "/aboutUs",
        element: <RoutingList Component={AboutUs} ></RoutingList>
      },
      // {
      //   path: "/products",
      //   element: <RoutingList Component={Product} ></RoutingList>,
      // },
      {
        path: "/products/:categoryname?/:id?",
        element: <RoutingList Component={Product} ></RoutingList>
      },
      {
        path: "/products/:categoryname/:subCategory/:id",
        element: <RoutingList Component={Product} ></RoutingList>
      },
   
      {
        path: "/products/:CategoryName/:subCategory?/:ProductName/:id",     // NewProductDetails
        element: <RoutingList Component={NewProductDetails} ></RoutingList>,
      },
      {
        path: "/terms-and-conditions",
        element: <RoutingList Component={Termsconditions} ></RoutingList>
      },
      {
        path: "/cookies-policy",
        element: <RoutingList Component={Cookiespolicy} ></RoutingList>
      },
      {
        path: "/privacy-policy",
        element: <RoutingList Component={Privatepolicy} ></RoutingList>
      },
      // blogs
        {
          path: "/cannabis-news",
          element: <RoutingList Component={Allblogs} ></RoutingList>
        },
        {
          path: "/cannabis-news/:name/:id",
          element: <RoutingList Component={Blogs} ></RoutingList>
        },
    
      // end
      // cart
      {
        path: "/cart",
        element: <RoutingList Component={AddToCart} ></RoutingList>
      },
      // End

      /////////////////////////////////////////////////////////////// Proper Compeleted Routes With Seo ////////////////////////////////////////////////////////////////////////////////////////


      {
        path: "/PlaceOrder",
        element: <RoutingList Component={PlaceOrder} ></RoutingList>,
      },
      {
        path: "/ForgotPassword",
        element: <RoutingList Component={ForgotPassword} ></RoutingList>,
      },
      {
        path: "/CreatePassword",
        element: <RoutingList Component={CreatePassword} ></RoutingList>,
      },
     
      {
        path: "/CheckOutMainPage",
        element: <ProtectRout Component={CheckOutMainPage} path="/CheckOutMainPage"></ProtectRout>
      }
      ,

      // {
      //   path: "/weed-deliveries/in/:Country/",
      //   element: <RoutingDespen Component={Deliveries} path="/Weed-Deliveries/in/" ></RoutingDespen>
      // },
      // {
      //   path: "/weed-deliveries/in/:Country/:state/",
      //   element: <RoutingDespen Component={Deliveries} path="/Weed-Deliveries/in/" ></RoutingDespen>
      // },
      // {
      //   path: "/weed-deliveries/in/:Country/:state/:city",
      //   element: <RoutingDespen Component={Deliveries} path="/Weed-Deliveries/in/" ></RoutingDespen>
      // },


      // End

      {
        path: "/StoreDetail",
        element: <RoutingList Component={StoreDetail} ></RoutingList>
      },
      {
        path: "/RelatedDeals",
        element: <RoutingList Component={RelatedDeals} ></RoutingList>
      },

      {
        path: "/EmptyCard",
        element: <RoutingList Component={EmptyCard} ></RoutingList>
      }
      ,
      {
        path: "/LearnCardRelatedPage",
        element: <RoutingList Component={LearnCardRelatedPage} ></RoutingList>
      },
      {
        path: "/Profile",
        element: <ProtectRout Component={Profile}></ProtectRout>
      },
      {
        path: "/EditProfile",
        element: <RoutingList Component={EditProfile} ></RoutingList>
      },
      {
        path: "/FiveZeroThree",
        element: <RoutingList Component={FiveZeroThree} ></RoutingList>
      },
      {
        path: "/FourZeroThree",
        element: <RoutingList Component={FourZeroThree} ></RoutingList>
      },
      {
        path: "/MyOrder",
        element: <RoutingList Component={MyOrder} ></RoutingList>
      },
      {
        path: "/MyOrderProductDetail/:id",
        element: <RoutingList Component={MyOrderProductDetail} ></RoutingList>
      },
      {
        path: "/StrainProduct/:type",
        element: <RoutingList Component={StrainProduct} ></RoutingList>
      },
     
      // {
      //   path: "/DashBoardMap",
      //   element:  <RoutingList Component={DashBoardMap} ></RoutingList>   
      // },

      {
        path: "/whisLists",
        element: <ProtectRout Component={WhisLists} ></ProtectRout>
      },

      // ends
      {
        path: "*",
        element: <RoutingList Component={FourZeroFour} ></RoutingList>
      }


    ]
  }
]

export default routesConfig