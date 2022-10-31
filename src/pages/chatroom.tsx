import ChatroomHeader from '@/components/chatroom/header/header'
import ChatroomBody from '@/components/chatroom/body'
import ChatroomBackground from '@/components/chatroom/background'
import styled from 'styled-components'

const ChatroomWrapper = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const Chatroom = () => {
    return (
        <ChatroomWrapper>
            <ChatroomHeader />
            <ChatroomBody />
            <ChatroomBackground />
        </ChatroomWrapper>
    )
}

export default Chatroom
