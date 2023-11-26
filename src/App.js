import { React, lazy, Suspense } from "react";
import { productData } from "./api/Api";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'))
const Footer = lazy(() => import('./components/Footer'))
const Header = lazy(() => import("./components/Header"))
const Product = lazy(() => import("./components/Product"))
const Cart = lazy(() => import("./pages/Cart"))
const Login = lazy(() => import("./pages/Login"))
const ErrorPage = lazy(() => import("./components/Error"))





const Layout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Header />
        <ScrollRestoration />
        <Outlet />
      </Suspense>
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

console.log(process.env.REACT_APP_AUTH0_DOMAIN)

function App() {
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
