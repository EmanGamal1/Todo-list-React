import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import CreateTodo from "./Pages/CreateTodo/CreateTodo";
import EditTodo from "./Pages/EditTodo/EditTodo";
import Navbar from "./Components/Navbar/Navbar";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: [<Navbar/>, <Home/>] ,
    },
    {
        path: '/details/:id',
        element: [<Navbar/>,<Details/>] ,
    },
    {
        path: '/add-todo',
        element: [<Navbar/>, <CreateTodo/>] ,
    },
    {
        path: '/edit-todo/:id',
        element: [<><Navbar/><EditTodo/></>] ,
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
]);

export default Routes;