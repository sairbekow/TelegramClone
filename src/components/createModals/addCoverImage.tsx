import { ChangeEvent, useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from "@mui/material/styles"
import { Input, InputLabel, Box } from '@mui/material';

interface Props {}

const LabelSelectImg = styled(InputLabel)`
    display: inline-block;
    background-color: #2F6EA5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

        & svg {
            position: absolute;
            width: 60%;
            height: 60%;
            * {
                fill: #fff
            }
        }
`;

const ImgBox = styled(Box)`
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
`;

const AddCoverImage = ({}: Props) => {

    const [coverImage, setCovarImage] = useState<any>(null);

    const selectImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files !== null) {
          reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = function () {
            if (reader.result) {
                setCovarImage(reader.result as string)
            }
        }
    }
    
    return (
        <div>
            <LabelSelectImg htmlFor="select-cover">
                {
                    coverImage ? 
                        <ImgBox component={"img"} src={coverImage} alt="image"/>
                        : null
                }
                <CameraAltIcon />
            </LabelSelectImg>
            <Input style={{display: "none"}} id='select-cover' type='file' onChange={selectImage}/>
        </div>
  )
}

export default AddCoverImage