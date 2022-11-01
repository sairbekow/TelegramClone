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
            {
                auth ?
                    <Route path="/" element={<Chatroom/>}>
                        {/*<Route index element={<ChatroomDefault/>}/>*/}
                        {/*<Route path=":id" element={<Chatroom/>}/>*/}
                    </Route>
                    : <Route path="/auth" element={<Auth/>}/>
            }
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRouter;
