import Layout from "../Layout/Layout"

import Dashboard from "../Components/Page/Dashboard/Dashboard";
import ProductCategory from "../Components/Page/Dashboard/Delivery/Product/ProductCategory";

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
        ],
      },
]

  export default routesConfig