import styled from "styled-components";
import {FC} from "react";

const Wrapper = styled.div`
  margin: 0.5rem 0 ;
  text-align: center
`

const Text = styled.span`
  display: inline-block;
  background: #4A8E3A8C;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.75;
  padding: 0 0.5rem;
  border-radius: 0.75rem;
  word-break: break-word;
  position: relative;
  z-index: 0;
  text-align: center;
`

interface InfoMessageProps {
    title: string
}

const InfoMessage: FC<InfoMessageProps> = ({title}) => {
    return (
        <Wrapper>
            <Text>
                {title}
            </Text>
        </Wrapper>
    );
};

export default InfoMessage;
