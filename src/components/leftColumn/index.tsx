import Header from "@/components/leftColumn/header";
import CreatorButton from "@/components/creatorButton";
import ChatItem from "@/components/chatItem";
import ChatFolders from "@/components/chatFolders";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";

const LeftColumn = () => {
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

    // const cont = useSelector((state) => state);
    // console.log("Contact", cont);

    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                flexDirection: "row-reverse",
                maxWidth: "500px",
                minWidth: "200px",
            }}
        >
            <div
                className="relative flex flex-col h-vh90 bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
                style={{
                    width: "100%",
                }}
            >
                <Header />
                <Box
                    className="TabList no-selection no-scrollbar"
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "0 0 1px 0.5625rem",
                        borderBottom: 0,
                        zIndex: 1,
                        gap: "8px",
                        alignItems: "flex-end",
                        fontSize: ".875rem",
                        fontWeight: "500",
                        flexWrap: "nowrap",
                        boxShadow: "0 2px 2px rgba(114,114,114,0.168627)",
                        background: "white",
                        overflowX: "auto",
                        overflowY: "hidden",
                        "&::-webkit-scrollbar": {
                            width: 0,
                            height: 0,
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <ChatFolders key={item} />
                    ))}
                </Box>
                <Box
                    className="relative pt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm"
                    sx={{
                        overflow: "auto",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": {
                            width: "0.4em",
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "#f1f1f1",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#c4c9cc",
                            borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            background: "#555",
                        },
                        height: "calc(100% - 105px)",
                        width: "100%",
                    }}
                >
                    <ul className="flex flex-col w-full h-full px-2 select-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                            (item) => (
                                <ChatItem key={item} />
                            )
                        )}
                    </ul>
                </Box>
                <CreatorButton />
            </div>
            <div
                style={{
                    position: "absolute",
                    cursor: "col-resize",
                    width: "1px",
                    height: "100%",
                    background: "#c4c9cc",
                }}
                ref={refRight}
                className="resizer resizer-r"
            ></div>
        </div>
    );
};

export default LeftColumn;
