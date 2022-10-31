import NotFound from "@/pages/404";
import Auth from "@/pages/auth";
import Chatroom from "@/pages/chatroom";
import { routePath } from "@/utils/routePath";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface RouteObj {
    path: string;
    component: FC;
}

const routes: RouteObj[] = [
    {
        path: routePath.CHATROOM,
        component: Chatroom,
    },
    {
        path: routePath.NOT_FOUND,
        component: NotFound,
    },
];

const AppRouter = () => {
    const auth = true;
    return (
        <Routes>
            {auth ? (
                routes.map((obj) => (
                    <Route path={obj.path} element={<obj.component />} />
                ))
            ) : (
                <Route path={"*"} element={<Auth />} />
            )}
        </Routes>
    );
};

export default AppRouter;
