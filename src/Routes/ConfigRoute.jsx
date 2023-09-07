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
        element: <Signup></Signup>,
      },
      {
        path: "/PlaceOrder",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/",
        element:  <RoutingList Component={Dashboard} ></RoutingList>,
       
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
        path: "/ForgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/CreatePassword",
        element: <CreatePassword></CreatePassword>,
      },
      // {
      //   path: "/Weed-Deliveries/in/:Country/:state/:city",
      //   element: <Deliveries></Deliveries>
      // },

      {
        path: "/Product",
        element: <Product></Product>,
      },
      {
        path: "/ProductDetail",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/NewProductDetails/:id",
        element: <NewProductDetails></NewProductDetails>,
      },
      {
        path: "/Brand",
        element: <Brand></Brand>,
      },
      {
        path: "/AddToCart",
        element: <AddToCart />
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
        path: "/Weed-DispensoriesDetails/:id/:tab/:StoreName",
        element: <DispensoriesDetails />
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
        element: <RelatedVerifyBrand />
      },

      {
        path: "/StoreDetail",
        element: <StoreDetail />
      },
      {
        path: "/RelatedDeals",
        element: <RelatedDeals />
      },
      {
        path: "/MainDeals",
        element: <MainDeals />
      },
      {
        path: "/Strain",
        element: <Strain />
      },
      {
        path: "/EmptyCard",
        element: <EmptyCard />
      }
      ,
      {
        path: "/CategoryProduct/:Categoryname",
        element: <CategoryProduct></CategoryProduct>
      }
      ,
      {
        path: "/Product/:SubCategoryname",
        element: <SubcategoryProduct></SubcategoryProduct>
      }
      ,
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/LearnTabs",
        element: <LearnTabs />
      },
      {
        path: "/LearnCardRelatedPage",
        element: <LearnCardRelatedPage />
      },
      {
        path: "/Profile",
        element: <ProtectRout Component={Profile}></ProtectRout>
      },
      {
        path: "/EditProfile",
        element: <EditProfile />
      },
      {
        path: "/FiveZeroThree",
        element: <FiveZeroThree />
      },
      {
        path: "/FourZeroThree",
        element: <FourZeroThree />
      },
      {
        path: "/MyOrder",
        element: <MyOrder />
      },
      {
        path: "/MyOrderProductDetail/:id",
        element: <MyOrderProductDetail />
      },
      {
        path: "/StrainProduct/:type",
        element: <StrainProduct />
      },
      {
        path: "/Blogs/:id",
        element: <Blogs />
      },

      {
        path: "/DashBoardMap",
        element: <DashBoardMap />
      },
      {
        path: "/FeaturedBrandSkeleton",
        element: <FeaturedBrandSkeleton />
      },
      {
        path: "/HomePageDealSignupSkeleton",
        element: <HomePageDealSignupSkeleton />
      },
      {
        path: "/StrainTypeCardSkeleton",
        element: <StrainTypeCardSkeleton />
      },
      {
        path: "/LatestServicesSkeleton",
        element: <LatestServicesSkeleton />
      },
      {
        path: "/Variants",
        element: <Variants />
      },
      {
        path: "/OpenDispensoriesSkeleton",
        element: <OpenDispensoriesSkeleton />
      },
      {
        path: "/DeliveryItemsCardSkeleton",
        element: <DeliveryItemsCardSkeleton />
      },
      {
        path: "/LawStateDescription",
        element: <LawStateDescription />
      },
      {
        path: "/WhisLists",
        element: <ProtectRout Component={WhisLists} ></ProtectRout>
      },
      // ends
      {
        path: "*",
        element: <FourZeroFour />
      }


    ],
  },
]

export default routesConfig