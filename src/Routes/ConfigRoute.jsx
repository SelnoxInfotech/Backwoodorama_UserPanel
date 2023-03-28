import Layout from "../Layout/Layout"

import Dashboard from "../Components/Page/Dashboard/Dashboard";
import ProductCategory from "../Components/Page/Dashboard/Delivery/Product/ProductCategory";
import AddProduct from "../Components/Page/Dashboard/Delivery/Product/AddProduct"
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
            element: <ProductCategory></ProductCategory>,
          },
          {
            path: "/AddProduct",
            element: <AddProduct></AddProduct>,
          },
        ],
      },
]

  export default routesConfig