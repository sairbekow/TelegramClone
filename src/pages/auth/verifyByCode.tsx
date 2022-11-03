import styled from 'styled-components'
import { IPhoneObj } from './authByPhone'
import { Autocomplete, Button, TextField } from '@mui/material'
import theme from '@/styles/theme'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

type Props = {}
const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #fff;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.35;
  margin-bottom: 3rem;
  color: {props => props.theme.palette.icons.main};
  width: 300px;
  text-align: center;
`

const Title = styled.h2`
  margin-right: 10px;
  display: inline-block;
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
function VerifyByCode({ phone, setState }: IPhoneObj) {
  console.log('phone', phone)

  const closeWindow = () => {
    setState(false)
  }

  return (
    <Box>
      <TitleWrapper>
        <Title>{phone && phone.code + phone.number}</Title>
        <ModeEditIcon onClick={closeWindow} />
      </TitleWrapper>

      <Text>We've sent the code to the Telegram app on your other device.</Text>

      <TextField
        className="mt-5"
        id="outlined-basic"
        label="Code"
        variant="outlined"
        type="text"
        sx={{ width: 300 }}
      />
    </Box>
  )
}

export default VerifyByCode
