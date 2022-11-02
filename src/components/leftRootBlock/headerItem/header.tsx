import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button, Popover } from '@mui/material'
import { useState, MouseEvent } from 'react'
import { DataSetting } from './data'
import { Form, StyledInputBase, Wrapper } from './headerStyle'
import { useAppDispatch } from '@/hooks/redux'
import { changeSlide } from '@/redux/slices/sideBarRoute'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [pathName, setPathName] = useState<string>('')

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const dispatch = useAppDispatch()
  const onChangeLeftSlide = (path: string) => {
    dispatch(changeSlide(path))
    setPathName(path)
  }
  console.log(pathName)

  return (
    <Wrapper>
      {pathName === 'contacts' ? (
        <IconButton
          aria-label="delete"
          aria-describedby={id}
          onClick={handleClick}
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton
          aria-label="delete"
          aria-describedby={id}
          onClick={handleClick}
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ top: 10, width: '240px' }}
      >
        {DataSetting.map((item, index) => (
          <Button
            key={index}
            sx={{
              p: '12px 14px',
              width: '100%',
              justifyContent: 'start',
              gap: '10px',
            }}
            onClick={() => onChangeLeftSlide(item.path || 'root')}
          >
            {item.icon}
            <span style={{ color: 'black' }}>{item.title}</span>
          </Button>
        ))}
      </Popover>
      <Form className="header__input">
        <SearchIcon
          sx={{
            width: '20px',
            height: '20px',
            fill: 'rgb(112,117,121)',
          }}
        />
        <StyledInputBase
          type="search"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Form>
    </Wrapper>
  )
}

export default Header
