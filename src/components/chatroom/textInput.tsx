import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { IconButton } from '@mui/material'
import MicNoneIcon from '@mui/icons-material/MicNone'
import { styled } from '@mui/material/styles'

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`

const InputWrapper = styled('div')`
  width: 100%;
  padding: 7px 0;
  border-radius: 12px;
  display: flex;
  background: ${(props) => props.theme.palette.base.light};
`

const Input = styled('input')`
  display: flex;
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const SmileButton = styled(IconButton)`
  padding: 10px;
  margin-left: 5px;
`

const FileButton = styled(IconButton)`
  margin-right: 5px;
  color: ${(props) => props.theme.palette.icons.light}
`

const MicroButton = styled(IconButton)`
  width: 56px;
  height: 56px;
  margin-left: 8px;
  background: ${(props) => props.theme.palette.base.light};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.palette.primary.light};

    & svg {
      color: #fff;
    }
  }
`

const ChatroomTextInput = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <SmileButton type="button">
          <SentimentSatisfiedAltIcon />
        </SmileButton>
        <Input autoComplete="off" />
        <FileButton
          type="button"
          aria-label="upload picture"
          component="label"
        >
          <AttachFileIcon sx={{ transform: 'rotate(30deg)' }} />
          <input hidden accept="image/*" type="file" />
        </FileButton>
      </InputWrapper>
      <MicroButton>
        <MicNoneIcon />
      </MicroButton>
    </Wrapper>
  )
}

export default ChatroomTextInput
