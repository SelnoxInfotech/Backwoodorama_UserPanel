import React from "react";
import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import ProtectRout from "../Routes/ProtectRout"
import RoutingDespen from "../Routes/RoutingDespen"
import RoutingList from "../Routes/RoutingList"
import Learnproduct from "../Components/Page/Learn/Product/Learnproduct";
import Learnproductcontent from "../Components/Page/Learn/Product/Learnproductcontent";
const Blogs = React.lazy(() => import("../Components/Page/Blog/Blog"));
const OpenDispansires = React.lazy(() => import("../Components/Page/Dispansires/Dispansires"));
const DispensoriesDetails = React.lazy(() => import("../Components/Page/Dispansires/DispansiresComponent/DispensoriesDetail"));
const CreatePassword = React.lazy(() => import("../Components/Page/ResetPassword/CreatePassword"));
const RelatedDeals = React.lazy(() => import("../Components/Page/Deals/RelatedDeals"));
const RelatedVerifyBrand = React.lazy(() => import("../Components/Page/Brand/RelatedVerifyBrand/RelatedVerifyBrand"));
const NewProductDetails = React.lazy(() => import("../Components/Page/Product/NewProductDetails/NewProductDetails"));
const StoreDetail = React.lazy(() => import("../Components/Page/StoreDetail/StoreDetail"));
const PlaceOrder = React.lazy(() => import("../Components/Page/Checkout/PlaceOrder"));
const CheckOutMainPage = React.lazy(() => import("../Components/Page/Checkout/CheckoutMainPage"));
const Product = React.lazy(() => import("../Components/Page/Product/Product"));
const AddToCart = React.lazy(() => import("../Components/Page/Product/AddToCartComponent/AddToCart"));
const Signup = React.lazy(() => import("../Components/Page/Signup/Signup"));
const Login = React.lazy(() => import("../Components/Page/Login/Login"));
const SignupWithEmail = React.lazy(() => import("../Components/Page/Signup/SignupWithEmail"));
const ForgotPassword = React.lazy(() => import("../Components/Page/ResetPassword/ForgotPassword"));
const FourZeroThree = React.lazy(() => import("../Components/Page/ErrorPage/FourZeroThree"));
const FiveZeroThree = React.lazy(() => import("../Components/Page/ErrorPage/FiveZeroThree"));
const FourZeroFour = React.lazy(() => import("../Components/Page/ErrorPage/FourZeroFour"));
const Brand = React.lazy(() => import("../Components/Page/Brand/Brand"));
const Deliveries = React.lazy(() => import("../Components/Page/Deliveries/Deliveries"));
const EmptyCard = React.lazy(() => import("../Components/Page/Profile/EditProfile/EditProfile"));
const Profile = React.lazy(() => import("../Components/Page/Profile/Profile"));
const EditProfile = React.lazy(() => import("../Components/Page/Profile/EditProfile/EditProfile"));
const WhisLists = React.lazy(() => import("../Components/Component/Whishlist/WhisLists/WhisLists"));
const LawStateDescription = React.lazy(() => import("../Components/Page/Learn/Laws/LawStateDescription/LawStateDescription"));
const LearnCardRelatedPage = React.lazy(() => import("../Components/Page/Learn/LearnCardRelatedPage/LearnCardRelatedPage"));
const LearnTabs = React.lazy(() => import("../Components/Page/Learn/LearnTabs"));
const AboutUs = React.lazy(() => import("../Components/Page/AboutUs/AboutUs"));
const MainDeals = React.lazy(() => import("../Components/Page/MainDealsFolder/MainDeals"));
const Strain = React.lazy(() => import("../Components/Page/Strain/Strain"));
const StrainProduct = React.lazy(() => import("../Components/Page/Strain/StrainProduct"));
const MyOrderProductDetail = React.lazy(() => import("../Components/Page/MyOrder/MyOrderProductDetail"));
const MyOrder = React.lazy(() => import("../Components/Page/MyOrder/MyOrder"));
const Allblogs = React.lazy(() => import("../Components/Page/Blog/BlogComponent/Allblogs"));
const Privatepolicy = React.lazy(() => import("../Components/Page/Privacypolicy/Privacypolicy.jsx"));
const Cookiespolicy = React.lazy(() => import("../Components/Page/Cookiespolicy/Cookiespolicy.jsx"));
const Termsconditions = React.lazy(() => import('../Components/Page/Termsconditions/Termsconditions.jsx'));
const History = React.lazy(() => import('../Components/Page/Learn/History/History'));
const routesConfig = [

  {
    element: <Layout /> ,

    children: [
      // //////////////////////////////////////////////////////////// Complete ///////////////////////////////////////////////////////////
    
     
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
        path: "/weed-dispensaries/in/:Country/:state?/:city?/:route?",
        element: <RoutingDespen Component={OpenDispansires}  ></RoutingDespen>
      },
      {
        path: "/weed-dispensaries/:StoreName/:tab?/:Category?/:SubCategory?/:id/",
        element: <RoutingList Component={DispensoriesDetails} ></RoutingList>
      },
      // {
      //   path: "/weed-dispensaries/:StoreName/menu/:Category/:SubCategory/:id/",
      //   element: <RoutingList Component={DispensoriesDetails} ></RoutingList>
      // },
      {
        path: "/weed-dispensaries/:StoreName/menu/:category/:subcategory/:product/:id/",
        element: <RoutingList Component={NewProductDetails} ></RoutingList>
      },
      {
        path: "/weed-deliveries/in/:Country/:state?/:city?/:route?",
        element: <RoutingDespen Component={Deliveries}  ></RoutingDespen>
      },
      {
        path: "/weed-deliveries/:StoreName/:tab?/:Category?/:SubCategory?/:id/:SubId?/",
        element: <RoutingList Component={DispensoriesDetails} ></RoutingList>
      },
      {
        path: "/weed-deliveries/:StoreName/menu/:Category/:SubCategory/:Product/:id/",
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
        element: <RoutingList Component={ Strain } ></RoutingList>
      },
      {
        path: "/history",
        element: <RoutingList Component={ LearnTabs } ></RoutingList>
      },
      {
        path: "/aboutUs",
        element: <RoutingList Component={AboutUs} ></RoutingList>
      },
      {
        path: "/learn/product",
        element: <RoutingList Component={LearnTabs} ></RoutingList>,
      },
      {
        path: "/learn/product/:id",
        element: <RoutingList Component={Learnproductcontent} ></RoutingList>,
      },
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


      {
        path: "/profile",
        element: <ProtectRout Component={Profile}></ProtectRout>
      },

      /////////////////////////////////////////////////////////////// Proper Compeleted Routes With Seo ////////////////////////////////////////////////////////////////////////////////////////


      {
        path: "/order-placed",
        element: <RoutingList Component={PlaceOrder} ></RoutingList>,
      },
      {
        path: "/forgot-password",
        element: <RoutingList Component={ForgotPassword} ></RoutingList>,
      },
      {
        path: "/CreatePassword",
        element: <RoutingList Component={CreatePassword} ></RoutingList>,
      },
     
      {
        path: "/checkout",
        element: <ProtectRout Component={CheckOutMainPage} path="/CheckOutMainPage"></ProtectRout>
      }
      ,

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
        path: "/EditProfile",
        element: <RoutingList Component={EditProfile} ></RoutingList>
      },
      {
        path: "/FiveZeroThree",
        element: <RoutingList Component={FiveZeroThree} ></RoutingList>
      },
      {
        path: "/fourzerothree",
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