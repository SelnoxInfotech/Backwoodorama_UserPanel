import Layout from "../Layout/Layout"

import Dashboard from "../Components/Page/Dashboard/Dashboard";


const routesConfig = [
  
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
        ],
      },
]

  export default routesConfig