import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import ProductDetail from "../Components/Page/Product/ProductDetails"
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
import CategoryProduct from "../Components/Page/Product/AllCategory";
import SubcategoryProduct from "../Components/Page/Product/SubCategoryProduct";
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
import DashBoardMap from "../Components/Component/Skeleton/DashBoardSkeleton/DashBoardMap";
import FeaturedBrandSkeleton from "../Components/Component/Skeleton/DashBoardSkeleton/FeaturedBrandSkeleton";
import HomePageDealSignupSkeleton from "../Components/Component/Skeleton/DashBoardSkeleton/HomePageDealSignupSkeleton";
import StrainTypeCardSkeleton from "../Components/Component/Skeleton/DashBoardSkeleton/StrainTypeCardSkeleton";
import LatestServicesSkeleton from "../Components/Component/Skeleton/DashBoardSkeleton/LatestServicesSkeleton";
import Variants from "../Components/Component/Skeleton/CategorySkeleton";
import OpenDispensoriesSkeleton from "../Components/Component/Skeleton/DispensorieSkeleton/OpenDispensoriesSkeleton";
import DeliveryItemsCardSkeleton from "../Components/Component/Skeleton/Deliveries/DeliveriesComponent/DeliveryMenu/DeliveryItemsCardSkeleton";
import WhisLists from "../Components/Component/Whishlist/WhisLists/WhisLists";
import LawStateDescription from "../Components/Page/Learn/Laws/LawStateDescription/LawStateDescription";
import RoutingDespen from "../Routes/RoutingDespen"
import RoutingList from "../Routes/RoutingList"
const routesConfig = [

  {
    element: <Layout />,


    children: [
      {
        path: "/Signup",
        element: <RoutingList Component={Signup} ></RoutingList> 
      },
      {
        path: "/PlaceOrder",
        element: <RoutingList Component={PlaceOrder} ></RoutingList>,
      },
      {
        path: "/",
        element:  <RoutingList Component={Dashboard} ></RoutingList>,
       
      },

      {
        path: "/SignupWithEmail",
        element:<RoutingList Component={SignupWithEmail} ></RoutingList>,
      },
      {
        path: "/Login",
        element: <RoutingList Component={Login} ></RoutingList> ,
      },
      {
        path: "/ForgotPassword",
        element:  <RoutingList Component={ForgotPassword} ></RoutingList> ,
      },
      {
        path: "/CreatePassword",
        element:  <RoutingList Component={CreatePassword} ></RoutingList>,
      },
      // {
      //   path: "/Weed-Deliveries/in/:Country/:state/:city",
      //   element: <Deliveries></Deliveries>
      // },

      {
        path: "/Product",
        element: <RoutingList Component={Product} ></RoutingList> ,
      },
      {
        path: "/ProductDetail",
        element: <RoutingList Component={ProductDetail} ></RoutingList> ,
      },
      {
        path: "/NewProductDetails/:id",
        element: <RoutingList Component={NewProductDetails} ></RoutingList> ,
      },
      {
        path: "/Brand",
        element:  <RoutingList Component={Brand} ></RoutingList> ,
      },
      {
        path: "/AddToCart",
        element: <RoutingList Component={AddToCart} ></RoutingList>
      },
      {
        path: "/CheckOutMainPage",
        element: <ProtectRout Component={CheckOutMainPage} path="/CheckOutMainPage"></ProtectRout>
      },

      // {
      //   path:"/Weed-DispensoriesDetails/:id/:tab",
      //   element:<DispensoriesDetails/>
      // }

      {
        path: "/Weed-Dispensories/:StoreName/:tab/:id/",
        element: <RoutingList Component={DispensoriesDetails} ></RoutingList> 
      }
      ,
      //  Weed Dispensires 
      {
        path: "/Weed-Dispansires/in/:Country/:state/:city",
        element: <RoutingDespen Component={OpenDispansires}  ></RoutingDespen>
      },
      {
        path: "/Weed-Dispansires/in/:Country/",
        element: <RoutingDespen Component={OpenDispansires}  path="/Weed-Dispansires/in/" ></RoutingDespen>
      },
      {
        path: "/Weed-Dispansires/in/:Country/:state/",
        element: <RoutingDespen Component={OpenDispansires}  path="/Weed-Dispansires/in/" ></RoutingDespen>
      },
      {
        path: "/Weed-Deliveries/in/:Country/",
        element:  <RoutingDespen Component={Deliveries}  path="/Weed-Deliveries/in/" ></RoutingDespen>
      },
      {
        path: "/Weed-Deliveries/in/:Country/:state/",
        element:  <RoutingDespen Component={Deliveries}  path="/Weed-Deliveries/in/" ></RoutingDespen>
      },
      {
        path: "/Weed-Deliveries/in/:Country/:state/:city",
        element:  <RoutingDespen Component={Deliveries}  path="/Weed-Deliveries/in/" ></RoutingDespen>
      },


      // End


      
      {
        path: "/RelatedVerifyBrand/:id",
        element: <RoutingList Component={RelatedVerifyBrand} ></RoutingList> 
      },

      {
        path: "/StoreDetail",
        element:  <RoutingList Component={StoreDetail} ></RoutingList> 
      },
      {
        path: "/RelatedDeals",
        element:  <RoutingList Component={RelatedDeals} ></RoutingList>  
      },
      {
        path: "/MainDeals",
        element:   <RoutingList Component={MainDeals} ></RoutingList>
      },
      {
        path: "/Strain",
        element:   <RoutingList Component={Strain} ></RoutingList> 
      },
      {
        path: "/EmptyCard",
        element:  <RoutingList Component={EmptyCard} ></RoutingList>   
      }
      ,
      {
        path: "/CategoryProduct/:Categoryname",
        element: <RoutingList Component={CategoryProduct} ></RoutingList>   
      }
      ,
      {
        path: "/Product/:SubCategoryname",
        element: <RoutingList Component={SubcategoryProduct} ></RoutingList> 
      }
      ,
      {
        path: "/AboutUs",
        element: <RoutingList Component={AboutUs} ></RoutingList> 
      },
      {
        path: "/LearnTabs",
        element:  <RoutingList Component={LearnTabs} ></RoutingList>  
      },
      {
        path: "/LearnCardRelatedPage",
        element:  <RoutingList Component={LearnCardRelatedPage} ></RoutingList> 
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
        element:  <RoutingList Component={FiveZeroThree} ></RoutingList>  
      },
      {
        path: "/FourZeroThree",
        element:   <RoutingList Component={FourZeroThree} ></RoutingList> 
      },
      {
        path: "/MyOrder",
        element:  <RoutingList Component={MyOrder} ></RoutingList>  
      },
      {
        path: "/MyOrderProductDetail/:id",
        element:  <RoutingList Component={MyOrderProductDetail} ></RoutingList>   
      },
      {
        path: "/StrainProduct/:type",
        element:  <RoutingList Component={StrainProduct} ></RoutingList> 
      },
      {
        path: "/Blogs/:id",
        element:   <RoutingList Component={Blogs} ></RoutingList>  
      },

      // {
      //   path: "/DashBoardMap",
      //   element:  <RoutingList Component={DashBoardMap} ></RoutingList>   
      // },
      {
        path: "/LawStateDescription",
        element:   <RoutingList Component={LawStateDescription} ></RoutingList>
      },
      {
        path: "/WhisLists",
        element: <ProtectRout Component={WhisLists} ></ProtectRout>
      },
      // ends
      {
        path: "*",
        element:  <RoutingList Component={FourZeroFour} ></RoutingList>
      }


    ],
  },
]

export default routesConfig