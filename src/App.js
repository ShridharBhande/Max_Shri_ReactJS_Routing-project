import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Product from "./Product";
import RootLayout from "./Root";
import ErrorPage from "./ErrorPage";
import ProductDetails from "./ProductDetails";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "products", element: <Product /> },
      { path: "products/:productId", element: <ProductDetails /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
