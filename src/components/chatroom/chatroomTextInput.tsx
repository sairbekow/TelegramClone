import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {Button, IconButton, Stack} from "@mui/material";
import MicNoneIcon from '@mui/icons-material/MicNone';
import theme from "@/styles/theme";

const ChatRoomTextInput = () => {
    return (
        <div className={'flex items-center self-center w-3/5'}>
            <div
                className="relative flex items-center self-center w-full p-3 overflow-hidden text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                <IconButton type="button" className="p-1 focus:outline-none focus:shadow-none">
                  <SentimentSatisfiedAltIcon/>
                </IconButton>
              </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-6 self-end">
                <IconButton color="icons" aria-label="upload picture" component="label" type="button"
                            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                  <AttachFileIcon sx={{transform: 'rotate(30deg)'}}/>
                        <input hidden accept="image/*" type="file"/>
                </IconButton>
                </span>
                <input type="search"
                       className="w-full py-4 pl-12 text-sm bg-white border border-transparent appearance-none rounded-lg placeholder-gray-800 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                       placeholder="Message..." autoComplete="off"/>
            </div>
            <IconButton sx={{
                width: 55,
                height: 55,
                background: '#fff',
                "&:hover": {
                    background: theme.palette.primary.light
                }
            }}
                        className={'rounded-full'}>
                <MicNoneIcon/>
                    </IconButton>
                    </div>
                    );
                };

                export default ChatRoomTextInput
