import {FC, MouseEventHandler} from "react";
import Drawer from '@mui/material/Drawer'
import Detailed from "@/components/rightColumn/detailed";
import { ModalWrapper } from "../createModals/wrapper";

interface RightColumnProps {
    isOpen: boolean
    toggleDrawer: (bool: boolean) => MouseEventHandler<HTMLButtonElement> | undefined
}

const RightColumn: FC<RightColumnProps> = ({isOpen, toggleDrawer}) => {
    const anchor = "right"

    return (
        <div>
            <Drawer
                anchor={anchor}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                {
                    // content
                    <Detailed toggleDrawer={toggleDrawer}/>
                }
            </Drawer>
        </div>
    )
}

export default RightColumn
