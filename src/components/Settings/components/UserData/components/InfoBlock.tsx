import { Alert, Box, Snackbar, Typography } from "@mui/material"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { ReactNode, useState } from "react";
import useClipboard from "react-use-clipboard";
import styled from "styled-components";

interface IInfoBlock {
  data: {
    name: string,
    title: string,
    icon: ReactNode
  }
}

const Wrapper = styled.div`
  cursor: pointer;
  gap: 2rem;
  padding: 1rem 1rem;
  border-radius: 0.75rem;
  display: flex;
  align-items:center;
  width: 100%;
`

const Title = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.palette.base.dark};
  line-height: 1.25rem;
`
const Description = styled.p`
  margin: 0px;
  font-size: .825rem;
  line-height: 1.25rem;
  color: rgb(112,117,121);
`


export const InfoBlock = ({ data }: IInfoBlock) => {
  const [isCopied, setCopied] = useClipboard(data.title);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);

  const onCopy = () => {
    setCopied();
    setOpenSuccess(true);
    setTimeout(() => setOpenSuccess(false), 2000)
  }

  return (
    <Wrapper onClick={onCopy}>
      {data.icon}
      <Box flexDirection={"column"}>
        <Title>{data.title}</Title>
        <Description>{data.name}</Description>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        message={`${data.name} was copied`}
      />
    </Wrapper>
  )
}