import styled from 'styled-components'
import { FC } from 'react'
import theme from '@/styles/theme'

const Wrapper = styled.div`
  align-self: ${(props) => props.position};
  margin-bottom: 10px;
`

const MessageContent = styled.div``

const Text = styled.p`
  padding: 5px 8px 6px;
  border-radius: 12px;
  background: ${theme.palette.base.light};
  max-width: 29rem;
`

interface UserMessageProps {
  position: 'start' | 'end'
  text: string
}

const UserMessage: FC<UserMessageProps> = ({ position, text }) => {
  return (
    <Wrapper position={position} className="self-start my-2">
      <MessageContent>
        <Text>{text}</Text>
      </MessageContent>
    </Wrapper>
  )
}

export default UserMessage
