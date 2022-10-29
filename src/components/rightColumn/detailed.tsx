import { Box, List } from "@mui/material";
import {FC, MouseEventHandler} from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import photo from "@/assets/images/bg-chatroom-dark.jpg"
import RightColumnHeader from "./header";
import RightColumnGalerally from "./gallery";
import RightColumnInfoItem from "./infoItem";
import RightColumnNavItem from "./navItems";
import { styled } from "@mui/material/styles";
interface DetailedProps {
    toggleDrawer: (bool: boolean) => MouseEventHandler<HTMLButtonElement> | undefined
}

const Main = styled(Box)(
    ({theme}) => {
        console.log(theme);
        
        return (`
        position: relative;
        right: 0;
        display: flex;
        flex-direction: column;
        display: none;
        padding-bottom: 8px;
        background-color: ${theme.palette.info.light};
        width: 24rem;

        @media screen and (max-width: 1280px) {
            display: block;
        }
    `) }
);

const Detailed:FC<DetailedProps> = ({toggleDrawer}) => {
    return (
        <Main>
            <RightColumnHeader toggleDrawer={toggleDrawer}/>
            <RightColumnGalerally images={[photo]}/>
            <RightColumnInfoItem Icon={ErrorOutlineIcon} field={"Bio"} value={"25 y.o traveler"}/>
            <RightColumnInfoItem Icon={AlternateEmailIcon} field={"Username"} value={"@karen"}/>
            <RightColumnInfoItem Icon={LocalPhoneIcon} field={"Phone"} value={"+1 38594 38538"}/>
            <RightColumnInfoItem Icon={CheckBoxIcon} field={"Notification"} value={"Enabled"}/>
            <List className="flex flex-row items-center justify-around px-3 mb-1 list-none border-b select-none">
                <RightColumnNavItem text={"Media"} />
                <RightColumnNavItem text={"Docs"} />
                <RightColumnNavItem text={"Links"} />
                <RightColumnNavItem text={"Audio"} />
            </List>
        </Main>
    );
};

export default Detailed;
