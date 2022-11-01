import styled from 'styled-components'
import { FC } from 'react'

const Wrapper = styled.div<{ position: string }>`
    align-self: ${(props) => props.position};
    margin-bottom: 10px;
`

const Text = styled.p`
    padding: 5px 8px 6px;
    border-radius: 12px;
    background: ${(props => props.theme.palette.base.light)};
    max-width: 29rem;
`

interface UserMessageProps {
    position: 'start' | 'end'
    text: string
}

const UserMessage: FC<UserMessageProps> = ({ position, text }) => {
    return (
        <Wrapper position={position} className="self-start my-2">
            <div>
                <Text>{text}</Text>
            </div>
        </Wrapper>
    )
}

export default UserMessage
