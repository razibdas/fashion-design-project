import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../pages/AddProduct";
import AllFashionCards from "../pages/AllFashionCards";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://fashion-design-project-server.vercel.app/newBrands')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/allFashionBrands/:brandName',
                element: <AllFashionCards></AllFashionCards>,
                loader: () => fetch('https://fashion-design-project-server.vercel.app/allFashionBrands')
            }
        ]
    }
])

export default routes;