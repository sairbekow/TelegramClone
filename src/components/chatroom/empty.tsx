import React from 'react'
import ChatroomBackground from '@/components/chatroom/background'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  margin-left: auto;
  position: relative;
`

const EmptyChatroom = () => {
  return (
    <Wrapper>
      <ChatroomBackground />
    </Wrapper>
  )
}

export default EmptyChatroom
