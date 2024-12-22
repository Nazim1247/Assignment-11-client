import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import ErrorPage from "../errorPage/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";
import TutorDetails from "../pages/TutorDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/findTutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/addTutorials',
                element: <AddTutorials></AddTutorials>
            },
            {
                path: '/myTutorials',
                element: <MyTutorials></MyTutorials>
            },
            {
                path: '/myBookedTutorials',
                element: <MyBookedTutors></MyBookedTutors>
            },
            {
                path: '/details',
                element: <TutorDetails></TutorDetails>
            },
        ]
    }
])

export default router;