import TextInput from "@/components/chatroom/textInput";
import InfoMessage from "@/components/infoMessage/infoMessage";
import UserMessage from "@/components/userMessage/userMessage";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45.5rem;
  margin: 0 auto;
`

const MessagesWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const ChatroomBody = () => {
    return (
        <Wrapper>
            <MessagesWrapper>
                <InfoMessage title={'Channel was created'}/>
                <InfoMessage title={'31 october'}/>
                <UserMessage position={'start'} text={'hellohell ellohellohe llohellohel lohellohellohellohellohe llohellohe llohellohellohelloh ellohello hellohel lohello'}/>
                <UserMessage position={'end'} text={'hello'}/>
            </MessagesWrapper>
            <TextInput/>
        </Wrapper>
    );
};

export default ChatroomBody;
