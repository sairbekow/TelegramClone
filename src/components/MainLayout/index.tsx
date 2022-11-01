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

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Main>
            <LeftColumn />
            <div style={{ width: "100%" }}
            >{children}</div>
        </Main>
    );
};

export default MainLayout;
