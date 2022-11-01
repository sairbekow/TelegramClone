import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import styled from "styled-components"

const ModeLabel = styled(FormControlLabel)`
  display:flex;
  font-size: 16px;
  font-weight: 500;
`

const ChangeModeWrapper = styled(FormControl)`
  padding: 10px 1rem;
`


export const ChangeTheme = () => {
  return (
    <ChangeModeWrapper className={"py-[10px] px-[1rem] "}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      > 
        <ModeLabel value="female" control={<Radio sx={{
          color: "icons.light", '&.Mui-checked': {
            color: "primary.light",
          },
        }} />} label="Light" />
        <ModeLabel value="male" control={<Radio sx={{
          color: "icons.light", '&.Mui-checked': {
            color: "primary.light",
          },
        }} />} label="Dark" />
      </RadioGroup>
    </ChangeModeWrapper>
  )
}