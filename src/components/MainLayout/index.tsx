import {FC} from "react";
import {Box} from "@mui/material";
import LeftColumn from "@/components/leftColumn";
import {styled} from "@mui/material/styles";
import {Outlet} from "react-router-dom";

interface MainLayoutProps {
}

const Main = styled(Box)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const LeftBlock = styled(Box)`
  @media screen and (min-width: 768px) {
    flex-grow: 2;
  }
`

const ChatContent = styled(Box)`
    flex: 3;
`

const MainLayout: FC<MainLayoutProps> = () => {
    return (
        <Main>
            <LeftBlock>
                <LeftColumn/>
            </LeftBlock>
            <ChatContent>
                <Outlet/>
            </ChatContent>
        </Main>
    );
};

export default MainLayout;
