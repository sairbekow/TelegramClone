import { Box, Button, Fab, List, ListItemButton, ListItemText, Popover } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { ModalWrapper } from '../createModals/wrapper';
import CreateGroup from '../createModals/createGroup';
import CreateChannel from '../createModals/createChannel';
import { styled } from '@mui/material/styles';

const Main = styled(Box)`
    position: absolute;
    bottom: 30px;
    right: 30px;
`;

const PopContainer = styled(Box)`
    padding: 8px;
`;

const CreatorButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [groupModal, setGroupModal] = useState<boolean>(false)
    const [channelModal, setChannelModal] = useState<boolean>(false)
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <Main>
        <Fab aria-describedby={id} color="primary" onClick={handleClick}>
            <EditIcon/>
        </Fab>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <PopContainer> 
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton onClick={() => {
                        handleClose();
                        setChannelModal(true)
                    }}>
                        <ListItemText primary="Create Channel" />
                    </ListItemButton>
                    <ListItemButton onClick={() => {
                        handleClose();
                        setGroupModal(true)    
                    }}>
                        <ListItemText primary="Create Group" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClose}>
                        <ListItemText primary="Contacts" />
                    </ListItemButton>
                </List>
            </PopContainer>
        </Popover>
        <ModalWrapper open={groupModal} setOpen={setGroupModal}>
            <CreateGroup setOpenModal={setGroupModal}/>
        </ModalWrapper>
        <ModalWrapper open={channelModal} setOpen={setChannelModal}>
            <CreateChannel setOpenModal={setChannelModal}/>
        </ModalWrapper>
      </Main>
    );
};

export default CreatorButton;