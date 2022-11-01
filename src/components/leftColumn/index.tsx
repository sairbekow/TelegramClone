import Header from "@/components/leftColumn/header";
import CreatorButton from "@/components/creatorButton";
import ChatItem from "@/components/chatItem/ChatItem";
import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { isContacts, noContacts } from "@/redux/slices/contacts";

import styled from "styled-components"
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };z
}



const LeftColumn = () => {

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };


    const ref = useRef<any>(null);
    const refRight = useRef<any>(null);

    useEffect(() => {
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizeableEle);
        let width = parseInt(styles.width, 10);
        let x = 0;

        resizeableEle.style.top = "50px";
        resizeableEle.style.left = "50px";

        const onMouseMoveRightResize = (event: any) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width = width + dx;
            resizeableEle.style.width = `${width}px`;
        };

        const onMouseUpRightResize = (event: any) => {
            document.removeEventListener("mousemove", onMouseMoveRightResize);
        };

        const onMouseDownRightResize = (event: any) => {
            x = event.clientX;
            resizeableEle.style.left = styles.left;
            resizeableEle.style.right = null;
            document.addEventListener("mousemove", onMouseMoveRightResize);
            document.addEventListener("mouseup", onMouseUpRightResize);
        };

        const resizerRight = refRight.current;
        resizerRight.addEventListener("mousedown", onMouseDownRightResize);

        return () => {
            resizerRight.removeEventListener(
                "mousedown",
                onMouseDownRightResize
            );
        };
    }, []);


    const [active, setactive] = useState(false)

    // const cont = useSelector((state) => state);
    // console.log("Contact", cont);


    const Wrapper = styled.div`
        display: flex;
        flex-direction: row-reverse;
        max-width: 500px;
        min-width: 200px;
    `

    const Line = styled.div`
        position: absolute;
        cursor: col-resize;
        width: 2px;
        height: 100%;
        background: #c4c9cc;
    `

    const LeftBlock = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: rgb(255 255 255);
        border-right-width: 1px;
        border-color: rgb(209 213 219);
    `
    return (
        <Wrapper
            ref={ref}
        >
            <LeftBlock

                style={{
                    // overflow: 'hidden',
                    width: "100%",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '500ms',
                }}
            >
                <Header />
                <Box sx={{ width: "100%" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        sx={{
                            ".MuiTabs-scroller": {
                                overflow: "scroll !important",
                            },
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            padding: "0 0.5625rem 1px 0.5625rem",
                            borderBottom: 0,
                            zIndex: 1,
                            gap: "8px",
                            alignItems: "flex-end",
                            fontSize: ".875rem",
                            fontWeight: "500",
                            flexWrap: "nowrap",
                            boxShadow: "0 2px 2px rgba(114,114,114,0.168627)",
                            background: "white",
                            ".MuiTabs-scroller::-webkit-scrollbar": {
                                width: 0,
                                height: 0,
                            }
                        }}
                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <Tab
                                    label={`ITEM ${index}`}
                                    {...a11yProps(index)}
                                    key={item}
                                    sx={{
                                        flexShrink: 0,
                                        gap: "8px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "0",
                                        padding: "0",
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        color: active ? "rgb(51,144,236)" : "rgb(112,117,121)",
                                        borderTopRightRadius: "0.375rem;",
                                        borderTopLeftRadius: "0.375rem;",
                                        position: "relative",
                                        "&:hover": {
                                            background: "rgb(228,228,229)",
                                        }
                                    }}
                                />
                            ))
                        }
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={value}
                        onChangeIndex={handleChangeIndex}

                    >
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <>
                                    <TabPanel value={value} index={index} dir={theme.direction}>
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                paddingTop: "8px",
                                                marginBottom: '16px',
                                                overflowX: "hidden",
                                                overflowY: "auto",
                                                scrollbarWidth: "thin",
                                                "&::-webkit-scrollbar": {
                                                    width: "0.4em",
                                                },
                                                "&::-webkit-scrollbar-track": {
                                                    background: "#f1f1f1",
                                                },
                                                "&::-webkit-scrollbar-thumb": {
                                                    backgroundColor: "#c4c9cc",
                                                    borderRadius: "10px"

                                                },
                                                "&::-webkit-scrollbar-thumb:hover": {
                                                    background: "#555"
                                                },
                                                height: "calc(100vh - 105px)",
                                                width: "100%",

                                            }}>
                                            <ul
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    width: '100%',
                                                    height: '100%',
                                                    padding: "0 8px",
                                                    userSelect: 'none',
                                                }}>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11  ].map(item => (
                                                        <ChatItem key={item} />
                                                    ))
                                                }
                                            </ul>
                                        </Box>
                                    </TabPanel>
                                </>
                            ))
                        }
                    </SwipeableViews>
                </Box>
                <CreatorButton />
            </LeftBlock>
            <Line ref={refRight} className="resizer resizer-r"></Line>
        </Wrapper>
    );
};

export default LeftColumn;


