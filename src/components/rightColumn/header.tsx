import { MouseEventHandler } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from "@mui/material/styles";
import { Box, Button } from '@mui/material';

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

const ButtonIcon = styled(Button)(
    ({theme}) => `
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        outline: none;

        &:hover{
            background: ${theme.palette.icons.main};
        }
    `
)


const RightColumnHeader = ({toggleDrawer}: Props) => {
  return (
    <Main>
        <ButtonIcon onClick={toggleDrawer(false)}>
            <CloseIcon/>
        </ButtonIcon>
        <span className="ml-4 mr-auto text-lg font-medium">Profile</span>
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