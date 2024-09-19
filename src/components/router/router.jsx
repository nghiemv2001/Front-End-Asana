import { BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import MyTaskPage from "../../pages/myTaskPage/MyTask";
import { InboxPage } from "../../pages/inboxPage/InBoxPage";

export const Router = BrowserRouter([
    {
        path : "/",
        element: <HomePage/>,
    },
    {
        path : "/tasks",
        element :<MyTaskPage/>
    },
    {
        path : '/inbox',
        element : <InboxPage/>  
    }
])