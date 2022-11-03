import { useState } from 'react'

import Contact from './contact'

import styled from 'styled-components'
import theme from '@/styles/theme'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddNewContact from './addNewContact'
import { ModalWrapper } from '../createModals/wrapper'
import Header from '../leftRootBlock/headerItem/header'

type Props = {}
const MainBox = styled.div`
  position: relative;
`

const ContactBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 5px 10px;
`
const AddUser = styled.div`
  position: absolute;
  bottom: 90px;
  right: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
`

function ContactWrapper({}: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function openWindow() {
    setIsOpenModal(true)
  }
  return (
    <MainBox>
      <Header />
      <ContactBox>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <AddUser>
          <PersonAddIcon
            style={{ color: 'white' }}
            fontSize="medium"
            onClick={openWindow}
          />
        </AddUser>
      </ContactBox>
      <ModalWrapper open={isOpenModal} setOpen={setIsOpenModal}>
        <AddNewContact setOpen={setIsOpenModal} />
      </ModalWrapper>
    </MainBox>
  )
}

export default ContactWrapper
