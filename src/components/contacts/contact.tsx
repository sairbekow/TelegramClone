import React from "react";

type Props = {};

export default function Contact({}: Props) {
    return (
        <div
            className="flex items-center gap-2 p-3 w-full cursor-pointer hover:rounded-lg"
            sx={{
                backgroundColor: "#c4c9cc",
                "&:hover": {
                    background: "red",
                },
            }}
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&usqp=CAU"
                alt=""
                className="w-14 h-14 object-cover rounded-full"
            />
            <div className="">
                <p className="font-medium text-base truncate w-full ">
                    Арген Саирбеков
                </p>
                <p className="text-sm">онлайн</p>
            </div>
        </div>
    );
}
