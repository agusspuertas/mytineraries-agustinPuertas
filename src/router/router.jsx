import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Citiespage from "../pages/Citiespage";
import MainLayout from "../layouts/MainLayout";
import Detailpage from "../pages/Detailpage";
import Signinpage from "../pages/SingInpage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/signin',
                element: <Signinpage/>
            },
            // {
            //     path: '/signup',
            //     element: <SignUp />
            // },
            {
                path: '/cities',
                element: <Citiespage />
            },

            {
                path: '/cities/:id',
                element: <Detailpage />
            },

        ]
    }
])

export default router;