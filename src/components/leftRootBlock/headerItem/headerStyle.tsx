import { InputBase } from '@mui/material';
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.375rem 0.8125rem 0.5rem 0.8125rem;
    gap: 16px;
    color: white;
    justify-content: space-between;
        
`
export const StyledInputBase = styled(InputBase)(() => ({
    width: "100%",
    outline: "none",
    background: "#f4f4f5",
    color: "black",
    border: "none",
    lineHeight: "1.25rem",
    cursor: "pointer",
    fontSize: "1rem",
    "& .MuiInputBase-input": {
        padding: "0px",
    },
}));

export const Form = styled.form`
    padding: 7px 15px 7px 10px;
    gap: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 1.375rem;
    width: 100%;
    background-color:#f4f4f5;
    border: 2px solid #f4f4f5;
` 