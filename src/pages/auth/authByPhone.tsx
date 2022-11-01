import theme from '@/styles/theme'
import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}

const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`

const Title = styled.h1`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  text-align: center;
`

const CountryBox = styled.div`
  & > img {
    margin-right: number;
    flex-shrink: number;
  }
`

const P = styled.p`
  padding-top: 1.5rem /* 24px */;
  padding-bottom: 1.5rem /* 24px */;
  text-align: center;
`
const countries: readonly CountryType[] = [
  { code: 'KG', label: 'Кыргызстан', phone: '996' },
  { code: 'KZ', label: 'Казахстан', phone: '7' },
  { code: 'RU', label: 'Российская Федерация', phone: '7' },
  { code: 'TR', label: 'Турция', phone: '90' },
  { code: 'UZ', label: 'Узбекистан', phone: '998' },
]

function AuthByPhone() {
  const [phone, setPhone] = useState()

  const handleChange = (params) => {
    setPhone(params)
    console.log('set', params.inputProps.value)
  }
  console.log('phone', phone)

  return (
    <MyBox>
      <img
        src="https://web.telegram.org/z/telegram-logo.1b2bb5b107f046ea9325.svg"
        alt="Telegram"
        className="mb-10 w-52"
      />

      <MyBox>
        <Title>Telegram 2.0</Title>
        <P>Проверьте код страны и введите свой номер телефона.</P>

        <Autocomplete
          disableClearable
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          // getOptionLabel={(option) => setPhone(option.phone)}
          onClick={(e) => console.log(e)}
          renderOption={(props, option) => (
            <div>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt={option.label}
              />
              {option.label}+{option.phone}
            </div>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Страна"
              // inputProps={{
              //     ...params.inputProps,
              //     autoComplete: "new-password", // disable autocomplete and autofill
              //     ...params.inputProps,
              // }}
              onClick={() => {
                handleChange(params)
              }}
            />
          )}
        />
        <TextField
          className="mt-5"
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
          sx={{ width: 300 }}
          defaultValue="996"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
        {console.log(phone)}
      </MyBox>
    </MyBox>
  )
}

export default AuthByPhone
