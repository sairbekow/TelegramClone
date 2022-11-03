import theme from '@/styles/theme'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import VerifyByCode from './verifyByCode'

interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}

export interface IPhoneObj {
  code: string
  number: string
}

const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`

const Img = styled.img`
  width: 200px;
  margin-bottom: 50px;
`

const Title = styled.h1`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  text-align: center;
`

const CountryBox = styled(Autocomplete)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const CountryList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`

const P = styled.p`
  padding-top: 1.5rem /* 24px */;
  padding-bottom: 1.5rem /* 24px */;
  text-align: center;
`

const NextButton = styled(Button)`
  width: 100%;
  background: ${theme.palette.primary.main};
  color: ${theme.palette.base.main};
  padding: 10px 20px;
  margin-top: 20px;

  &:hover {
    background: ${theme.palette.primary.main};
  }
`
const countries: readonly CountryType[] = [
  { code: 'KG', label: 'Кыргызстан', phone: '+996' },
  { code: 'KZ', label: 'Казахстан', phone: '+7' },
  { code: 'RU', label: 'Российская Федерация', phone: '+7' },
  { code: 'TR', label: 'Турция', phone: '+90' },
  { code: 'UZ', label: 'Узбекистан', phone: '+998' },
]

function AuthByPhone() {
  const [phone, setPhone] = useState<IPhoneObj>({ code: '', number: '' })
  const [isOpenVerifyWindow, setIsOpenVerifyWindow] = useState<boolean>(false)

  const getPhoneCode = (option: CountryType) => {
    setPhone({ ...phone, code: option.phone })
  }

  const getPhoneNumber = (e) => {
    const phoneNum = e.target.value.replace(phone.code, '')
    setPhone({ ...phone, number: phoneNum })
  }
  const openVerifyWindow = () => {
    setIsOpenVerifyWindow(true)
  }

  console.log(phone)

  return (
    <MyBox>
      <Img
        src="https://web.telegram.org/z/telegram-logo.1b2bb5b107f046ea9325.svg"
        alt="Telegram"
      />

      <MyBox>
        <Title>Telegram 2.0</Title>
        <P>Проверьте код страны и введите свой номер телефона.</P>

        <CountryBox
          disableClearable
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          renderOption={(props, option) => (
            <div onClick={() => getPhoneCode(option)}>
              <CountryList {...props}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt={option.label}
                />
                <div>{option.label}</div>
                <div>{option.phone}</div>
              </CountryList>
            </div>
          )}
          renderInput={(params) => <TextField {...params} label="Страна" />}
        />
        <TextField
          className="mt-5"
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
          type="text"
          sx={{ width: 300 }}
          onChange={(e) => getPhoneNumber(e)}
          value={[phone.code, phone.number].join('')}
        />
      </MyBox>
      {phone.number.length >= 9 && (
        <NextButton onClick={openVerifyWindow}>Продолжить</NextButton>
      )}

      {isOpenVerifyWindow && (
        <VerifyByCode phone={phone} setState={setIsOpenVerifyWindow} />
      )}
    </MyBox>
  )
}

export default AuthByPhone
