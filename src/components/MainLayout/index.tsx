import { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import LeftColumn from "@/components/leftColumn";
import { styled } from "@mui/material/styles";
import Contacts from "../contacts";

interface MainLayoutProps {
    children: ReactElement;
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

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Main>
            <LeftBlock>
                <LeftColumn />
            </LeftBlock>
            <div style={{ flex: 3 }}>{children}</div>
        </Main>
    );
};

export default MainLayout;
