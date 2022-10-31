import { IconButton, Button, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useState, MouseEvent, KeyboardEvent } from 'react'
import theme from '@/styles/theme'
import RightColumn from '@/components/rightColumn'
import styled from 'styled-components'
import avatarImg from '@/assets/images/avatar.jpg'
import ToolsPopover from '@/components/chatroom/header/toolsPopover'

const Wrapper = styled.div`
    padding: 8px 13px 8px 24px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
    object-fit: cover;
    border-radius: 50%;
`
const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
`

const Title = styled.h4`
    white-space: nowrap;
`

const Status = styled.p`
    white-space: nowrap;
`

const RightNav = styled.div`
    display: flex;
`

const ChatroomHeader = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const toggleDrawer =
        (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return
            }
            setIsDrawerOpened(open)
        }

    return (
        <>
            <Wrapper>
                <Avatar src={avatarImg} />
                <TitleBlock onClick={toggleDrawer(true)}>
                    <Title> Karen </Title>
                    <Status> Online </Status>
                </TitleBlock>
                <RightNav>
                    <IconButton aria-describedby={id} onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                </RightNav>
                <ToolsPopover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
                <RightColumn
                    isOpen={isDrawerOpened}
                    toggleDrawer={toggleDrawer}
                />
            </Wrapper>
        </>
    )
}

export default ChatroomHeader