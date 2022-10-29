import { FC } from 'react'
import { Box, Button, Input, InputLabel } from '@mui/material'
import AddCoverImage from '../addCoverImage'
import { styled } from "@mui/material/styles"
import { ModalContrButtons, setBoolState } from '../wrapper'

interface Props {
    setOpenModal: setBoolState
}

const FormBody = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const CreateGroup: FC<Props> = ({setOpenModal}) => {
    return (
        <>
            <Box>
                <form>
                    <FormBody>
                        <AddCoverImage />
                        <div>
                            <InputLabel htmlFor="name-input" color="info">
                                group name
                            </InputLabel>
                            <Input id='name-input' type='text'/>
                        </div>
                    </FormBody>
                </form>
            </Box>
            <ModalContrButtons setOpenModal={setOpenModal}/>
        </>
    )
}

export default CreateGroup