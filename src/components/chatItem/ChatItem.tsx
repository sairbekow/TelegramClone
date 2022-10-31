import { red } from '@mui/material/colors';
import { useState } from 'react'
import { Avatar, BlockText, Button, IconInformation, Img, Text } from './ChatItemStyle';

const ChatItem = () => {
    const [active, setactive] = useState(false)

    return (
        <Button onClick={() => setactive(!active)}
            style={{
                color: active ? "white" : "black",
                background: active ? " #3390ec" : "white"
            }}>
            <Avatar>
                <Img
                    src="https://images.unsplash.com/photo-1433588616917-dcbcc63429f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w="
                    alt="img" />
            </Avatar>
            <BlockText>
                <Text>
                    <h2
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",

                        }}>
                        Lauri Edmon</h2>
                    <div style={{
                        display: "flex",
                    }}>
                        <svg
                            style={{
                                width: "16px",
                                height: "16px",
                                fill: "rgb(34 197 94)",
                            }}
                            xmlns="http://www.w3.org/2000/svg" width="19" height="14"
                            viewBox="0 0 19 14">
                            <path fillRule="nonzero"
                                d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z" />
                        </svg>
                        <svg style={{
                            width: "16px",
                            height: "16px",
                            fill: "blue",
                        }} xmlns="http://www.w3.org/2000/svg"
                            width="19" height="14" viewBox="0 0 19 14">
                            <path fillRule="nonzero"
                                d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z" />
                        </svg>
                        <span style={{
                            color: active ? "white" : "black",
                            marginLeft: "4px",
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            fontWeight: 500,

                        }}>12.52</span>
                    </div>
                </Text>
                <IconInformation>
                    <span
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >Привет2222222222222222222222222</span>
                    <span v-else
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            lineHeight: '1rem',
                            textAlign: 'right',
                            color: 'white',
                            background: 'rgb(34 197 94)',
                            borderRadius: '50%',
                            minWidth: "20px",
                            minHeight: "20px"
                        }}>2</span>
                </IconInformation>
            </BlockText>
        </Button>
    );
};

export default ChatItem;
