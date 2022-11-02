import { useAppSelector } from '@/hooks/redux'
import { Box, Slide } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 500px;
  min-width: 200px;
  overflow-x: hidden;
`
const Line = styled.div`
  position: absolute;
  cursor: col-resize;
  width: 2px;
  height: 100%;
  background: #c4c9cc;
`

const WrapperSlide = styled(Box)`
  width: inherit;
  overflow-x: hidden;
  overflow-y: hidden;
`

const LeftColumn = () => {
  const ref = useRef<any>(null)
  const refRight = useRef<any>(null)
  const SideBarRoute = useAppSelector((store) => store.sideBarRoute)

  useEffect(() => {
    const resizeableEle = ref.current
    const styles = window.getComputedStyle(resizeableEle)
    let width = parseInt(styles.width, 10)
    let x = 0

    resizeableEle.style.top = '50px'
    resizeableEle.style.left = '50px'

    const onMouseMoveRightResize = (event: any) => {
      const dx = event.clientX - x
      x = event.clientX
      width = width + dx
      resizeableEle.style.width = `${width}px`
    }

    const onMouseUpRightResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveRightResize)
    }

    const onMouseDownRightResize = (event: any) => {
      x = event.clientX
      resizeableEle.style.left = styles.left
      resizeableEle.style.right = null
      document.addEventListener('mousemove', onMouseMoveRightResize)
      document.addEventListener('mouseup', onMouseUpRightResize)
    }

    const resizerRight = refRight.current
    resizerRight.addEventListener('mousedown', onMouseDownRightResize)

    return () => {
      resizerRight.removeEventListener('mousedown', onMouseDownRightResize)
    }
  }, [])

  return (
    <Wrapper ref={ref}>
      {SideBarRoute.map((elem, index) => (
        <Slide
          direction="left"
          in={SideBarRoute.length - 1 === index}
          appear={true}
          unmountOnExit
          timeout={{
            appear: 500,
            enter: 400,
            exit: 300,
          }}
        >
          <WrapperSlide>{<elem.component />}</WrapperSlide>
        </Slide>
      ))}
      <Line ref={refRight} className="resizer resizer-r" />
    </Wrapper>
  )
}

export default LeftColumn
