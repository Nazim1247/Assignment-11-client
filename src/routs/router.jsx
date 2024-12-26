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
import UpdateTutor from "../pages/UpdateTutor";
import PrivateRoute from "./PrivateRoute";

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
                path: '/find-tutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/addTutorials',
                element: <PrivateRoute>
                    <AddTutorials></AddTutorials>
                </PrivateRoute>
            },
            {
                path: '/myTutorials',
                element: <PrivateRoute>
                    <MyTutorials></MyTutorials>
                </PrivateRoute>
            },
            {
                path: '/myBookedTutorials',
                element: <PrivateRoute>
                    <MyBookedTutors></MyBookedTutors>
                </PrivateRoute>
            },
            {
                path: '/updateTutor/:id',
                element: <PrivateRoute>
                    <UpdateTutor></UpdateTutor>
                </PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <TutorDetails></TutorDetails>
                </PrivateRoute>
            },
        ]
    }
])

export default router;