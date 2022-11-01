import React, { useState, MouseEvent } from 'react'
import { AllChat, AllChatDescr, AllChatText, BlockDelete, BlockFolder, BlockYourChats, Button, ButtonCreate, ChatFolder, FolderText, RightBlock, TitleFolder, Wrapper, YourChat } from './CreateFolderStyle'
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Popover, TextField } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import folder from '@/assets/images/folder.png'
import folders from '@/assets/images/folders.png'

export const CreateFolder = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Wrapper>
      <BlockFolder>
        <img src={folder} alt="img" style={{ width: "100px", height: "100px", marginBottom: "2.5rem" }} />
        <FolderText>Choose chats or types of chats that will appear in this folder.</FolderText>
        <TextField id="outlined-basic" label="Folder name" variant="outlined"
          sx={{
            width: "100%",
            ".MuiInputBase-input": {
              height: "54px",
              color: 'black',
              padding: "0 10px",
              fontSize: '1rem',
            }
          }}

        />
      </BlockFolder>
      <ChatFolder style={{
        padding: "1.5rem 10px 1rem",
      }}>
        <TitleFolder style={{
          paddingLeft: "14px",
        }}>Included Chats</TitleFolder>
        <ButtonCreate>
          <AddIcon sx={{ fill: "#3390ec", width: "24px", height: "24px", }} />
          Add Chats
        </ButtonCreate>
        <TitleFolder>Included Chats</TitleFolder>
        <ButtonCreate>
          <AddIcon sx={{ fill: "#3390ec", width: "24px", height: "24px", }} />
          Add Chats
        </ButtonCreate>
      </ChatFolder>
    </Wrapper>

    // <Wrapper>
    //   <BlockFolder>
    //     <img src={folders} alt="img" style={{ width: "100px", height: "100px", marginBottom: "2.5rem" }} />
    //     <FolderText>Create folders for different groups of chats and quickly switch between them.</FolderText>
    //     <Button>
    //       <AddIcon sx={{ fill: "white", width: "24px", height: "24px", }} />
    //       Create New Folder
    //     </Button>
    //   </BlockFolder>

    //   <ChatFolder>
    //     <TitleFolder>Chat Folders</TitleFolder>
    //     <AllChat>
    //       <AllChatText>
    //         All Chats
    //       </AllChatText>
    //       <AllChatDescr>
    //         All unarchived chats
    //       </AllChatDescr>
    //     </AllChat>

    //     <BlockYourChats>
    //       <YourChat>
    //         <div>
    //           <AllChatText>
    //             Новые
    //           </AllChatText>
    //           <AllChatDescr>
    //             24 chats
    //           </AllChatDescr>
    //         </div>
    //         <RightBlock>
    //           <MenuIcon sx={{ width: "24px", height: "24px", cursor: 'pointer' }} />
    //           <IconButton
    //             aria-label="delete"
    //             aria-describedby={id}
    //             onClick={handleClick}
    //             sx={{
    //               width: "24px",
    //               height: "24px",
    //               borderRadius: "50%",
    //               cursor: 'pointer'
    //             }}
    //           >
    //             <MoreVertIcon />
    //           </IconButton>
    //         </RightBlock>
    //       </YourChat>
    //       <YourChat>
    //         <div>
    //           <AllChatText>
    //             Новые
    //           </AllChatText>
    //           <AllChatDescr>
    //             24 chats
    //           </AllChatDescr>
    //         </div>
    //         <RightBlock>
    //           <MenuIcon sx={{ width: "24px", height: "24px", cursor: 'pointer' }} />
    //           <IconButton
    //             aria-label="delete"
    //             aria-describedby={id}
    //             onClick={handleClick}
    //             sx={{
    //               width: "24px",
    //               height: "24px",
    //               borderRadius: "50%",
    //             }}
    //           >
    //             <MoreVertIcon />
    //           </IconButton>
    //         </RightBlock>
    //       </YourChat>
    //     </BlockYourChats>

    //   </ChatFolder>
    //   <Popover
    //     id={id}
    //     open={open}
    //     anchorEl={anchorEl}
    //     onClose={handleClose}
    //     anchorOrigin={{
    //       vertical: "bottom",
    //       horizontal: "left",
    //     }}
    //     sx={{ top: 10, width: "240px" }}
    //   >
    //     <BlockDelete>
    //       <DeleteOutlineIcon sx={{
    //         fill: "red", width: "24px",
    //         height: "24px",
    //         cursor: 'pointer'
    //       }} />
    //       <p>Delete</p>
    //     </BlockDelete>
    //   </Popover>
    // </Wrapper>
  )
}
