import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 55px;
    background-color: rgb(244,244,245);
`
export const BlockFolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 1.5rem 1rem;
    text-align: center;
    background-color: white;
    box-shadow: inset 0 -0.0625rem 0 0 #e4e4e5;
    margin-bottom: 0.625rem;
    width: 100%;
`
export const FolderText = styled.p`
    font-size: .875rem;
    color: #707579;
    margin-top: -0.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

`

export const Button = styled.button`
    height: 2.5rem;
    border-radius: 1.25rem;
    padding: 0.3125rem 1rem;
    line-height: 1.2;
    cursor: pointer;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #3390ec;
    color:white;
    outline: none;
    transition: 0.4s;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    &:hover {
        background-color: rgb(74,149,214);
        transform: scale(0.98);
}
`

export const ButtonCreate = styled.button`
    color: #3390ec;
    width: 100%;
    background-color: white;
    border: none ;
    box-shadow: none;
    outline: none;
    display: flex;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5rem;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    gap:2rem;
    border-radius: 10px;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    &:hover {
        background-color: rgb(244,244,245);
    }

`
export const ChatFolder = styled.div`
    width: 100%;
    padding: 1.5rem 1.5rem 1rem;
    box-shadow: inset 0 -0.0625rem 0 0 #e4e4e5;
    margin-bottom: 0.625rem;
    background-color: white;
`

export const TitleFolder = styled.div`
    font-size: 1rem;
    color: #707579;
    position: relative;
    margin-bottom: 1rem;
    font-weight: 500;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    
`

export const AllChat = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    background-color:white;
    border: none ;
    box-shadow: none ;
    outline: none ;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    line-height: 1.5rem;
    white-space: nowrap;
    color: black;
    border-radius:  0.75rem;
    --ripple-color: rgba(0, 0, 0, 0.08);
    font-weight: 400;
`
export const YourChat = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    background-color:white;
    border: none ;
    box-shadow: none ;
    outline: none ;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    line-height: 1.5rem;
    white-space: nowrap;
    color: black;
    border-radius:  0.75rem;
    --ripple-color: rgba(0, 0, 0, 0.08);
    font-weight: 400;
`

export const AllChatText = styled.p`
    line-height: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: initial;
    unicode-bidi: plaintext;
    font-size: 16px;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

export const AllChatDescr = styled.p`
    font-size: .875rem;
    line-height: 1.5rem;
    color:#707579;
    unicode-bidi: plaintext;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: initial;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`
export const BlockYourChats = styled.div`
`
export const BlockDelete = styled.div`
    width: 100%;
    background: none;
    border: none ;
    box-shadow: none ;
    outline: none ;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    position: relative;
    overflow: hidden;
    line-height: 1.5rem;
    white-space: nowrap;
    color: red;
    --ripple-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
    unicode-bidi: plaintext;
    gap:20px;
`
export const RightBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
