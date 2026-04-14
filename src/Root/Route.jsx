import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../component/FriendDetails/FriendDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/timeline",
                Component: Timeline
            },
            {
                path: "/ststs",
                Component: Stats
            },
            {
                path: ':friendId',
                Component:FriendDetails
            }
        ]
    }
]);
