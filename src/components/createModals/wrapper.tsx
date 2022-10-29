import { FC, MouseEventHandler, ReactNode } from 'react'
import { Box, Button, Modal } from '@mui/material'
import { styled } from "@mui/material/styles";

export type setBoolState = (bool: boolean) => void;
export interface IChangeBoolState {
    [key: string]: setBoolState
}
interface Props {
    children: ReactNode
    open: boolean;
    setOpen: setBoolState
}

const Main = styled(Box)`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 50;
`

const ModalContainer = styled(Box)(
    ({ theme }) => `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: ${theme.palette.background.paper};
        box-shadow: 0 0 8px ${theme.palette.base.dark};
        padding: 26px;
        outline: none;
        border-radius: 12px;
`);

const ButtonsBox = styled(Box)`
    margin-top: 24px;
    margin-left: auto;
    text-align: right;
`;

export const ModalWrapper: FC<Props> = ({children, open, setOpen}) => {
    const handleClose = () => setOpen(false);
    return (
        <Main>
            <Modal
                open={open ? true : false}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContainer>
                    {children}
                </ModalContainer>
            </Modal>
        </Main>
    )
}

export const ModalContrButtons = ({setOpenModal}: IChangeBoolState) => {
    return (
        <ButtonsBox>
            <Button variant="text" onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button variant="text">Next</Button>
        </ButtonsBox>
    )
}