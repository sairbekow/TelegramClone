import { Box, SvgIconTypeMap, Typography } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { styled } from "@mui/material/styles";

interface Props {
    Icon: OverridableComponent<SvgIconTypeMap>
    field: string 
    value: string
}

const Main = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
`

const IconBlock = styled(Box)`
    padding: 0 8px;
    border-radius: 50%;
`

const FieldText = styled(Typography)(
    ({theme}) => `
        margin-right: auto;
        font-size: 14px;
        color: ${theme.palette.icons.dark};
    `
)
const FieldValue = styled(Typography)(
    ({theme}) => `
        margin-right: auto;
        font-size: 14px;
        color: ${theme.palette.icons.light};
        font-weight: 600;
    `
)

const RightColumnInfoItem = ({Icon, field, value}: Props) => {
  return (
    <Main>
        <IconBlock>
            <Box sx={{width: "24px", height: "24px"}}>
                <Icon sx={{width: "100%", height: "100%"}}/>
            </Box>
        </IconBlock>
        <Box style={{marginLeft: "12px"}}>
            <FieldValue>{value}</FieldValue>
            <FieldText>{field}</FieldText>
        </Box>
    </Main>
  )
}

export default RightColumnInfoItem