import {
  Box,
  Button,
  CssBaseline,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Outlet } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import { Assessment, Close, Event, Home, Logout } from '@mui/icons-material'
import theme from '../theme'
const drawerWidth = 240
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const mobileTheme = createTheme()
  const isMobileBreakpoint = useMediaQuery(mobileTheme.breakpoints.down('md'))

  useEffect(() => {
    setSidebarOpen(!isMobileBreakpoint)
  }, [isMobileBreakpoint])

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  return (
    <Box display="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Main open={isSidebarOpen}>
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Box p={2}>
          <Outlet />
        </Box>
      </Main>
    </Box>
  )
}

const Sidebar = ({ isOpen, onClose }: any) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      anchor="left"
    >
      <List>
        <Box textAlign="right">
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <ListItem>
          <Link to="dashboard">
            <Box display="flex" gap={1} alignItems="center">
              <Home color="primary" />
              <ListItemText primary="Dashboard" />
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="calendar">
            <Box display="flex" gap={1} alignItems="center">
              <Event color="primary" />
              <ListItemText primary="Calendar" color="primary" />
            </Box>
          </Link>
        </ListItem>
        <ListItem divider>
          <Link to="reports">
            <Box display="flex" gap={1} alignItems="center">
              <Assessment color="primary" />
              <ListItemText primary="Reports" />
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Box display="flex" gap={1} alignItems="center">
            <Logout />
            <ListItemText primary="Logout" />
          </Box>
        </ListItem>
      </List>
    </Drawer>
  )
}

const Navbar = ({ isSidebarOpen, toggleSidebar }: any) => {
  return (
    <Box
      bgcolor="black"
      width="100%"
      height="3rem"
      display="flex"
      alignItems="center"
    >
      {!isSidebarOpen && (
        <IconButton onClick={toggleSidebar}>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
      )}
    </Box>
  )
}

export default Layout
