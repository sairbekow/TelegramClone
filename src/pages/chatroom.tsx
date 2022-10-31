import ChatroomHeader from "@/components/chatroom/сhatroomHeader";
import { Box } from "@mui/material";
import ChatroomBody from "@/components/chatroom/chatroomBody";
import ChatroomBackground from "@/components/chatroom/chatroomBackground";

const Chatroom = () => {
    return (
        <Box height={'100vh'}
            marginLeft={'auto'}
            position={'relative'}
        >
            <ChatroomHeader />
            <ChatroomBody />
            <ChatroomBackground />
        </Box>
    )
}

export default Chatroom
