import React, { FC } from 'react'
import { Button, Popover } from '@mui/material'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import theme from '@/styles/theme'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { styled } from '@mui/material/styles'

const PopoverElement = styled(Popover)`
    top: 15px;
    min-width: 13.5rem;
`

const OptionButton = styled(Button)`
  padding: 12px 14px;
  justify-content: flex-start;
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
                <OptionButton>
                    <NotificationsOffOutlinedIcon
                        color={'icons'}
                        sx={{ marginRight: 4 }}
                    />
                    <span style={{ color: theme.palette.icons.light }}>
                        Mute
                    </span>
                </OptionButton>

            </PopoverElement>
        </div>
    )
}

export default ToolsPopover
