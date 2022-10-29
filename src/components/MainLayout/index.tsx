import { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import { css } from "@emotion/css";
import LeftColumn from "@/components/leftColumn";
import Contacts from "../contacts";

interface MainLayoutProps {
    children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box
            height={"100vh"}
            className={
                "relative w-screen flex h-screen overflow-hidden antialiased"
            }
        >
            <div className="md:flex-2">
                <LeftColumn />
            </div>
            <div style={{ flex: 3 }}>{children}</div>
        </Box>
    );
};

export default MainLayout;
