import { MouseEventHandler } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from "@mui/material/styles";
import { Box, Button, IconButton } from '@mui/material';

interface Props {
    toggleDrawer: (bool: boolean) => MouseEventHandler<HTMLButtonElement> | undefined
}

const Main = styled(Box)(
    ({theme}) => `
        position: sticky;
        z-index: 50;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px;
        background-color: ${theme.palette.base.light};
    `
);

const ButtonIcon = styled(IconButton)(
    ({theme}) => `
        box-sizing: border-box;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        outline: none;

        &:hover{
            background: ${theme.palette.info.main};
        }
    `
)

const DisplayTitle = styled(Box)`
    margin-left: 16px;
    margin-right: auto;
    font-size: 18px;
    font-weight: 500;
`


const RightColumnHeader = ({toggleDrawer}: Props) => {
  return (
    <Main>
        <ButtonIcon onClick={toggleDrawer(false)}>
            <CloseIcon/>
        </ButtonIcon>
        <DisplayTitle component={"span"}>Profile</DisplayTitle>
        <ButtonIcon>
            <EditIcon/>
        </ButtonIcon>
        <ButtonIcon>
           <MoreVertIcon/>
        </ButtonIcon>
    </Main>
  )
}

export default RightColumnHeader