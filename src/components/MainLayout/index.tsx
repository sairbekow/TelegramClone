import { FC } from 'react'
import LeftColumn from '@/components/leftColumn'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import styled from 'styled-components'

const Main = styled(Box)`
  position: relative;
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const MainLayout: FC = () => {
  return (
    <Main>
      <LeftColumn />
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </Main>
  )
}

export default MainLayout