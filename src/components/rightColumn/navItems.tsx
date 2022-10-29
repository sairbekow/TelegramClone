import { Link, ListItem } from '@mui/material'
import {} from 'react'
import { styled } from "@mui/material/styles"

interface Props {
    text: string
}

const Main = styled(ListItem)(
  ({theme}) => `
    display: flex;
    flex: 1 1 auto;
    padding: 0 16px;
    margin: 0 4px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    justify-content: center;

    &:hover{
      background: ${theme.palette.icons.main};
    }
  `
)

const MainLink = styled(Link)(
  ({theme}) => `
    display: block; 
    padding: 12px 0;
    font-size: 12px;
    font-weight: 700;
    color: ${theme.palette.primary.main};
    text-transform: uppercase;
    border-bottom: 4px solid ${theme.palette.primary.main};
  `
)

const RightColumnNavItem = ({text}: Props) => {
  return (
    <Main>
        <MainLink>
            {text}
        </MainLink>
    </Main>
  )
}

export default RightColumnNavItem