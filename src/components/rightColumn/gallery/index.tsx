import { Box, Typography } from "@mui/material"
import {} from "react"
import RightColumnPreview from "./preview"
import RightColumnSlider from "./slider"
import { styled } from "@mui/material/styles"

interface Props {
    images: string[]
}

interface UserFieldProps{
    weight: number;
    size: number;
}

const Main = styled(Box)`
    position: relative;
    min-height: 280px;
    max-height: 400px;
    margin-bottom: 30px;
`

const Gallery = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`

const UserInfo = styled(Box)`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    padding: 16px;
`

const UserField = styled(Typography)<UserFieldProps>`
    font-size: ${({ size = 24 }) => size + 'px'};
    font-weight: ${({ weight = 500 }) => weight};
`

const RightColumnGallery = ({images}: Props) => {
  return (
    <Main>
        <Gallery>
            {
                images?.length > 1 
                ? <RightColumnSlider images={images}/>
                : <RightColumnPreview image={images[0]}/>
            }
        </Gallery>
        <UserInfo>
            <UserField size={24} weight={500} color="base.light">
                Karen J.
            </UserField>
            <UserField color="primary.main" size={18} weight={400}>
                online
            </UserField>
        </UserInfo>    
    </Main>
  )
}

export default RightColumnGallery