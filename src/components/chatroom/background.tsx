import backgroundImage from '@/assets/images/bg-chatroom-light.png'
import backgroundColoredImage from "@/assets/images/bg-chatroom-colored.png";
import {styled} from "@mui/material/styles";
import {Box} from '@mui/material';

const Main = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${backgroundColoredImage});
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: top right;
    background-size: 510px auto;
    background-repeat: repeat;
    mix-blend-mode: overlay;
    background-image: url(${backgroundImage});
  }
`

const ChatroomBackground = () => {
    return (
        <Main/>
    );
};

export default ChatroomBackground;
