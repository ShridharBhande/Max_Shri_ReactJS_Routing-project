import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import Product from "./Product";
import RootLayout from "./Root";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Product /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
