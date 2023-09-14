import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Citiespage from "../pages/Citiespage";
import MainLayout from "../layouts/MainLayout";
import Detailpage from "../pages/Detailpage";
import Signinpage from "../pages/SingInpage";
import Signuppage from "../pages/Signuppage";
import ProtectedRoute from "./ProtectedRoute";


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
                element: (<ProtectedRoute path='/'>
                    <Signinpage />
                </ProtectedRoute>)
            },
            {
                path: "/signup",
                element: (
                    <ProtectedRoute path='/'signin>
                        <Signuppage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/cities',
                element: <Citiespage />
            },

            {
                path: '/cities/:id',
                element: <Detailpage />
            },
            {
                path: '/404',
                element: <h1 className="text-4xl">Paginda De Error</h1>
            }

        ]
    }
])

export default router;