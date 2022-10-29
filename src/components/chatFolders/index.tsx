import { Box } from "@mui/material";
import { useState } from "react";



const ChatFolders = () => {

    const [active, setactive] = useState(false)

    return (
        <Box
            sx={{
                gap: "8px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                margin: '0',
                padding: '0.625rem 0.25rem',
                fontWeight: '500',
                cursor: 'pointer',
                color: active ? "rgb(51,144,236)" : "rgb(112,117,121)",
                borderTopRightRadius: '0.375rem;',
                borderTopLeftRadius: '0.375rem;',
                position: "relative",
                "&::after": {
                    position: "absolute",
                    content: active && '""',
                    left: 0,
                    width: "100%",
                    bottom: 0,
                    height: "0.1875rem",
                    background: "rgb(51,144,236)",
                    borderRadius: "0.1875rem 0.1875rem 0 0",
                },
                "&:hover": {
                    background: "rgb(228,228,229)",
                }
            }}
            onClick={() => setactive(!active)}
        >

            <span>Artem</span>
            <span
                style={{
                    background: "rgb(51,144,236)",
                    minWidth: "1.25rem",
                    height: "1.25rem",
                    borderRadius: "0.75rem",
                    padding: "0 0.3125rem",
                    color: "#fff",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                }}
            >24</span>
        </Box>
    );
};

export default ChatFolders;
