import React, { FC } from 'react'
import { Button, Popover, Typography } from '@mui/material'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import theme from '@/styles/theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { styled } from '@mui/material/styles'

const PopoverElement = styled(Popover)`
    top: 15px;
    min-width: 13.5rem;
`

const ListButtons = styled('div')`
    display: flex;
    flex-direction: column;
`

const OptionButton = styled(Button)`
    padding: 12px 14px;
    justify-content: flex-start;
    width: 100%;
    text-transform: unset;

    & svg {
        margin-right: 25px;
    }

    & span {
        font-size: 16px;
        font-weight: 400;
    }
`


const Text = styled(Typography)<{ color: string }>`
    color: ${(props) => props.color};
`

interface ToolsPopoverProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ToolsPopover: FC<ToolsPopoverProps> = ({
    id,
    open,
    anchorEl,
    handleClose,
}) => {
    return (
        <div>
            <PopoverElement
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <ListButtons>
                    <OptionButton>
                        <NotificationsOffOutlinedIcon color={'icons'} />
                        <Text color={{ color: theme.palette.icons.light }}>
                            Mute
                        </Text>
                    </OptionButton>
                    <OptionButton>
                        <DeleteOutlineOutlinedIcon color={'error'} />
                        <Text color={{ color: theme.palette.error.main }}>
                            Delete and Exit
                        </Text>
                    </OptionButton>
                </ListButtons>
            </PopoverElement>
        </div>
    )
}

export default ToolsPopover
