import theme from '@/styles/theme'
import { Button, DialogActions, TextField } from '@mui/material'
import { FC, MouseEventHandler, ReactNode } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { setBoolState } from '../createModals/wrapper'

interface Props {
  setOpen: setBoolState
}

const Box = styled.div`
  width: 500px;

  @media screen and (max-width: 575px) {
    width: calc(100vw - 100px);
    /* padding: 0 20px; */
  }
`

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 500;
`

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: 25% 73%;
  gap: 10px;

  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ContactAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${theme.palette.primary.dark};
`
const AvatarText = styled.h2`
  color: ${theme.palette.base.main};
  font-size: 25px;
  text-transform: uppercase;
`
function AddNewContact({ setOpen }: Props) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  function getPhoneNumber(e) {
    setPhoneNumber(e.target.value)
  }

  function getName(e) {
    setName(e.target.value)
  }
  function getSurname(e) {
    setSurname(e.target.value)
  }
  console.log(name[0], surname[0])

  return (
    <Box>
      <Title>Новый контакт</Title>
      <ContactBox>
        <LeftBlock>
          <ContactAvatar>
            <AvatarText>{name[0]}</AvatarText>
            <AvatarText>{surname[0]}</AvatarText>
          </ContactAvatar>
        </LeftBlock>
        <RightBlock>
          <TextField
            prefix={'+'}
            type="number"
            defaultValue="+"
            id="outlined-basic"
            label="Номер телефона"
            variant="outlined"
            autoFocus
            onChange={(e) => getPhoneNumber(e)}
          />
          <TextField
            id="outlined-basic"
            label="Имя (обязательно)"
            variant="outlined"
            onChange={(e) => getName(e)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Фамилия (необязательно)"
            variant="outlined"
            onChange={(e) => getSurname(e)}
          />
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Отмена</Button>
            <Button
              autoFocus
              disabled={phoneNumber.length && name.length ? false : true}
              onClick={() => setOpen(false)}
            >
              Готово
            </Button>
          </DialogActions>
        </RightBlock>
      </ContactBox>
    </Box>
  )
}

export default AddNewContact
