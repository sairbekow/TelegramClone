import {} from 'react'
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customDots.css"
// import { CustomDots } from './customDots';


interface Props {
    images: string[]
}

const Main = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
    & div{
      height: 100%;
    }

`

const ImgBlock = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;

  & div{
    height: 100%;
  }

  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const RightColumnSlider = ({images}: Props) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,

    // customPaging: CustomDots(images.length),
  };

  return (
    <Main>
      <Slider {...settings}>
        {
          images.length ? 
          images.map((img) => (
            <ImgBlock>
              <img src={img} alt="image" />
            </ImgBlock>
          ))
          : null
        }
      </Slider>
    </Main>
  )
}

export default RightColumnSlider