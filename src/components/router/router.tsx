import NotFound from '@/pages/404';
import Auth from '@/pages/auth';
import Chatroom from '@/pages/chatroom';
import {Route, Routes} from 'react-router-dom'
import MainLayout from "@/components/MainLayout";
import Empty from "@/components/chatroom/empty";

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

export default AppRouter