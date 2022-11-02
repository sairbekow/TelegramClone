import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

interface IDataSetting {
  icon: JSX.Element
  title: string
  path: string
}

export const DataSetting: IDataSetting[] = [
  {
    icon: <BookmarkBorderIcon sx={{ color: '#707579' }} />,
    title: 'Saved Messages',
    path: 'settings',
  },
  {
    icon: <ArchiveOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Archived Chats',
    path: 'settings',
  },
  {
    icon: <PersonOutlineOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Contacts',
    path: 'contacts',
  },
  {
    icon: <SettingsOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Settings',
    path: 'settings',
  },
  {
    icon: <ModeNightOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Night Mode',
    path: 'settings',
  },
  {
    icon: <HelpOutlineOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Telegram Features ',
    path: 'settings',
  },
  {
    icon: <BugReportOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Report Bug ',
    path: 'settings',
  },
  {
    icon: <AddCircleOutlineOutlinedIcon sx={{ color: '#707579' }} />,
    title: 'Install App ',
    path: 'settings',
  },
]
