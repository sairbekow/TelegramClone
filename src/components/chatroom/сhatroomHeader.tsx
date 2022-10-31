import {Box, IconButton, Button, Popover, Typography} from "@mui/material"
import ArrowBack from "@mui/icons-material/ArrowBack"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import {useState, MouseEvent, KeyboardEvent} from "react"
import theme from "@/styles/theme"
import RightColumn from "@/components/rightColumn";

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

    const toggleDrawer = (open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
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
            <div className="relative flex flex-col flex-1">
                <div className="z-20 flex flex-grow-0 flex-shrink-0 w-full pr-3 bg-white border-b align-center">
                    <div
                        className="w-12 h-12 mx-4 my-2 bg-blue-500 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer"
                        style={{backgroundImage: `url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50)`}}>
                    </div>
                    <div className="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer"
                         onClick={toggleDrawer(true)}>
                        <div
                            className="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap">
                            Karen
                        </div>
                        <div
                            className="overflow-hidden text-sm font-medium leading-tight text-gray-600 whitespace-no-wrap">
                            Online
                        </div>
                    </div>
                    <div className="flex">
                        <IconButton aria-describedby={id} onClick={handleClick}>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{top: 10}}
                    >
                        <Button sx={{p: "12px 14px", width: "100%", justifyContent: 'start'}}>
                            <NotificationsOffOutlinedIcon color={'icons'}
                                                          sx={{marginRight: 4}}/>
                            <span style={{color: theme.palette.icons.light}}>Mute</span>
                        </Button>
                        <Button sx={{p: "12px 14px", width: "100%", justifyContent: 'start'}}>
                            <DeleteOutlineOutlinedIcon color={'error'}
                                                       sx={{marginRight: 4}}/>
                            <span style={{color: theme.palette.error.main}}>Delete and Exit</span>
                        </Button>
                    </Popover>
                    <RightColumn isOpen={isDrawerOpened} toggleDrawer={toggleDrawer}/>
                </div>
            </div>
        </>
    )
}

export default ChatroomHeader