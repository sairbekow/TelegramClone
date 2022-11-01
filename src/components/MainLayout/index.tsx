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
  children: ReactElement;
}

const Main = styled(Box)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const LeftBlock = styled(Box)`
    @media screen and (min-width: 768px) {
        flex-grow: 2;
    }
`
const Wrapper = styled(Box)`
  position: absolute;
  left: 0px;
  top 0px;
  z-index: 3;
  width: 100%;
  background: #f4f4f5;
  overflow: hidden;
`

const WrapperSlide = styled.div`
  width: 100%;
  background: #f4f4f5;
  overflow: hidden;
`

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const SideBarRoute = useAppSelector(store => store.sideBarRoute);
  return (
    <Main>
      <LeftBlock>
        <Wrapper>
          {
            SideBarRoute.map((elem, index) => (
              // index === SideBarRoute.length - 2 ?
              //   <Grow
              //     in={SideBarRoute[SideBarRoute.length-2]===elem}
              //     style={{ transformOrigin: "0 0 0" }}
              //     {...(true ? { timeout: 300 } : {})}
              //     mountOnEnter
              //     unmountOnExit
              //   >
              //     <Box>
              //       {<elem.component />}
              //     </Box>
              //   </Grow> :
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
        </Wrapper >
      </LeftBlock>
      <div style={{ flex: 3 }}>{children}</div>
    </Main>
  );
};

export default MainLayout
