import { FC, ReactElement } from 'react'
// import { Box } from '@mui/material'
import LeftColumn from '@/components/leftColumn'
// import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from "../../hooks/redux";
import { Box, Grow, Slide } from "@mui/material";
import { css, keyframes } from "styled-components";
import styled from "styled-components";

interface MainLayoutProps {
}

const Main = styled(Box)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`


const Wrapper = styled(Box)`
  width: 100%;
  background: #f4f4f5;
  overflow-x: hidden;
`



const WrapperSlide = styled.div`
  width: 100%;
  background: #f4f4f5;
`

const MainLayout: FC<MainLayoutProps> = () => {
  const SideBarRoute = useAppSelector(store => store.sideBarRoute);
  return (
    <Main>
      <LeftColumn/>
      {/* <Wrapper>
        {
          SideBarRoute.map((elem, index) => (
            <Slide direction="left" in={SideBarRoute.length - 1 === index} appear={true} unmountOnExit timeout={{
              appear: 500,
              enter: 400,
              exit: 300,
            }}>
              <WrapperSlide>
                {<elem.component />}
              </WrapperSlide>
            </Slide>
          ))
        }
      </Wrapper > */}
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </Main>
  );
};

export default MainLayout
