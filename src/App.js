import { productData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'
import Login from "./pages/Login";
import ErrorPage from "./components/Error";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productData,
        errorElement: <ErrorPage />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <ErrorPage />
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorPage />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

function App() {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
