import { FC } from "react"
import { Box, Input, InputLabel } from "@mui/material"
import { styled } from "@mui/material/styles";
import AddCoverImage from "../addCoverImage";
import { ModalContrButtons, setBoolState } from "../wrapper";

interface Props {
    setOpenModal: setBoolState
}

const FormBody = styled(Box)`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`

const CreateChannel: FC<Props> = ({setOpenModal}) => {

    return (
        <>
        <Box>
            <form>
                <FormBody>
                    <AddCoverImage />
                    <div>
                        <InputLabel htmlFor="name-input" color="info">
                            Channel name
                        </InputLabel>
                        <Input id='name-input' type='text'/>
                    </div>
                    <div>
                        <Input placeholder='Description (optional)' type='text'/>
                    </div>
                </FormBody>
            </form>
        </Box>
        <ModalContrButtons setOpenModal={setOpenModal}/>
        </>
    )
}

export default CreateChannel