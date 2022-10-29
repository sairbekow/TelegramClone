import { Box, Typography } from '@mui/material'
import {} from 'react'
import { styled } from "@mui/material/styles"

interface Props {
    image: string
}

const Main = styled(Box)`
    width: 100%;
    height: 100%;
    z-index: 1;
        *{
            top: 0;
            left: 0;
            width: 100% !important;
            height: 100% !important;
            z-index: 1;
        }

        img{
            object-fit: cover;
        }
`

const RightColumnPreview = ({image}: Props) => {
  return (
    <Main>
        <img src={image} alt="Image" />    
    </Main>   
  )
}

export default RightColumnPreview