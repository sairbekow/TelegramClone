import ChatroomTextInput from '@/components/chatroom/textInput'
import InfoMessage from '@/components/infoMessage/infoMessage'
import UserMessage from '@/components/userMessage/userMessage'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 45.5rem;
  margin: 0 auto;
  padding: 0 15px;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MessagesWrapper = styled.div`
  width: 100%;
  flex-grow: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const ChatroomBody = () => {
  return (
    <Wrapper>
      <MessagesWrapper>
        <InfoMessage title={'Channel was created'} />
        <InfoMessage title={'31 october'} />
        <UserMessage position="start" text={'fasdfsaf lohello'} />
        <UserMessage position={'end'} text={'hello'} />
      </MessagesWrapper>
      <ChatroomTextInput />
    </Wrapper>
  )
}

export default ChatroomBody
