import ChatRoomTextInput from "@/components/chatroom/chatroomTextInput";

const ChatroomBody = () => {
    return (
        <div
            className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover"
            style={{height: '90vh'}}>
            <div className="self-center flex-1 w-full max-w-3xl">
                <div className="relative flex flex-col px-3 py-1 m-auto">
                    <div
                        className="self-center px-2 py-1 mx-0 my-1 text-sm text-white text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">Channel
                        was created
                    </div>
                    <div
                        className="self-center px-2 py-1 mx-0 my-1 text-sm text-white text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">May
                        6
                    </div>
                    <div className="self-start my-2">
                        <div className="p-4 text-base bg-white rounded-t-lg rounded-r-lg shadow">
                            Don`t forget to check on all responsive sizes.
                        </div>
                    </div>
                    <div className="self-end my-2">
                        <div className="p-4 text-base bg-white rounded-t-lg rounded-l-lg shadow">
                            Use the buttons above the editor to test on them
                        </div>
                    </div>
                </div>
            </div>
            <ChatRoomTextInput/>
        </div>
    );
};

export default ChatroomBody;
