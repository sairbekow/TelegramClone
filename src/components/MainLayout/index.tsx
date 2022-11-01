import {FC} from "react";
import {Box} from "@mui/material";
import LeftColumn from "@/components/leftColumn";
<<<<<<< HEAD
import {styled} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
=======
import { styled } from "@mui/material/styles";
import Contacts from "../contacts";
import ContactWrapper from "../contacts/contactWrapper";
>>>>>>> 5c219987fd8965c4239f771fbedbff78e8002fc4

interface MainLayoutProps {
}

const Main = styled(Box)`
<<<<<<< HEAD
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
=======
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

const LeftBlock = styled(Box)`
    @media screen and (min-width: 768px) {
        flex-grow: 2;
    }
`;
>>>>>>> 5c219987fd8965c4239f771fbedbff78e8002fc4

const ChatContent = styled(Box)`
    flex: 3;
`

const MainLayout: FC<MainLayoutProps> = () => {
    return (
        <Main>
            <LeftBlock>
<<<<<<< HEAD
                <LeftColumn/>
=======
                {/* <LeftColumn /> */}
                <ContactWrapper />
>>>>>>> 5c219987fd8965c4239f771fbedbff78e8002fc4
            </LeftBlock>
            <ChatContent>
                <Outlet/>
            </ChatContent>
        </Main>
    );
};

export default MainLayout;
