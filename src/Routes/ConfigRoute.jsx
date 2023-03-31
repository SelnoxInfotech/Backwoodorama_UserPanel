import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import Product from "../Components/Page/Product/Product";
import ProductDetail from "../Components/Page/Product/ProductDetails"
import AddToCart from "../Components/Page/Product/AddToCart"
const routesConfig = [
  
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
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
          }
        ],
      },
]

  export default routesConfig