import Layout from "../Layout/Layout"
import Dashboard from "../Components/Page/Home/Dashboard/Dashboard";
import ProductCategory from "../Components/Page/Home/Dashboard/ComponentDashboard/Category/CategoryProduct";
import AddProduct from "../Components/Page/Product/AddProduct"
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
          // {
          //   path:"/AddProductCart",
          //   element:<AddProductCart/>
          // }
        ],
      },
]

  export default routesConfig