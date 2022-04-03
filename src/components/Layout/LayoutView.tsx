import React, {
  useEffect, useState, useMemo, memo,
} from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  AccountCircle as AccountCircleIcon,
  Settings as SettingIcon,
  Mail as MailIcon,
  Logout as LogoutIcon,
  MoveToInbox as InboxIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useLocation, useNavigate } from 'react-router-dom'

import { getItem } from 'utils/localStorage'
import Snackbar from 'components/Snackbar'
import config from 'config'
import { pageMenus } from 'config/pageMenus'
import useDispatchContext from 'hooks/useDistpatchContext'
import useStateContext from 'hooks/useStateContext'
import { appThemeSet } from 'store/actions/appAction'
import { snackbarOpenSet } from 'store/actions/snackbarAction'
import { lightTheme, darkTheme } from 'styles/theme'
import { acronym } from 'utils/string'

import BottomNavigation from './BottomNavigation'

const APPBAR_HEIGHT = 64
const BOTTOM_NAVIGATION_HEIGHT = 64
const DRAWER_WIDTH = 240

interface Layout {
  children: React.ReactNode
}

const LayoutView = ({ children }: Layout) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatchContext()
  const { app, snackbar } = useStateContext()
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)
  const [themeColor, setThemeColor] = useState<'light' | 'dark'>('light')

  const { isOpen: isSnackbarOpen } = snackbar
  const currentPath = useMemo(() => location.pathname, [location.pathname])
  const muiTheme = useMemo(
    () => createTheme({
      palette: {
        ...themeColor === 'light' ? lightTheme : darkTheme,
        mode: themeColor,
      },
    }),
    [themeColor],
  )

  const handleToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorMenuEl(null)
  }
  const onClickMenu = (path: string) => {
    if (path && (currentPath !== path)) {
      return navigate(path)
    }
    return null
  }
  const handleToggleThemeColor = () => {
    dispatch(appThemeSet(themeColor === 'light' ? 'dark' : 'light'))
  }
  const handleSnackbarOpen = (open: boolean) => {
    dispatch(snackbarOpenSet(open))
  }
  const handleSelectedMenu = (path: string) => {
    const splittedCurrentPath = currentPath.split('/')
    const spliitedPath = path.split('/')
    return splittedCurrentPath[1] === spliitedPath[1]
  }

  useEffect(() => {
    const localStorageTheme = getItem('theme') ?? 'light'
    if (localStorageTheme === 'dark' || localStorageTheme === 'light') {
      setThemeColor(localStorageTheme)
    }
  }, [setThemeColor])

  useEffect(() => {
    setThemeColor(app.theme)
  }, [app.theme])

  return (
    <ThemeProvider theme={muiTheme}>
      <Box>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {config.appName}
            </Typography>
            <Box>
              <IconButton onClick={handleToggleThemeColor} color="inherit">
                {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggleMenu}
              >
                <Avatar sx={{ width: 32, height: 32 }}>{acronym('Muhammad Faishal Pasa')}</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorMenuEl}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    minWidth: 200,
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 23,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                open={Boolean(anchorMenuEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem>
                  <Box display="flex" flexDirection="column">
                    <Typography>Muhammad Faishal Pasa</Typography>
                    <Typography variant="caption">Admin</Typography>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">Profile</Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SettingIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">Settings</Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="body2">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' },
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
          PaperProps={{
            elevation: 1,
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {pageMenus.map((pageMenu) => (
                <ListItemButton
                  onClick={() => onClickMenu(pageMenu.path)}
                  key={pageMenu.id}
                  sx={{
                    color: (theme) => (handleSelectedMenu(pageMenu.path)
                      ? theme.palette.primary.main : undefined),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: (theme) => (handleSelectedMenu(pageMenu.path)
                        ? theme.palette.primary.main : undefined),
                    }}
                  >
                    {pageMenu.icon && <pageMenu.icon />}
                  </ListItemIcon>
                  <ListItemText primary={pageMenu.name} />
                </ListItemButton>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItemButton key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: `${APPBAR_HEIGHT}px`,
            pl: {
              xs: 0,
              sm: `${DRAWER_WIDTH}px`,
            },
            pb: {
              xs: `${BOTTOM_NAVIGATION_HEIGHT}px`,
              sm: 0,
            },
            height: '100vh',
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Box p={2} height="100%">
            {children}
          </Box>
        </Box>

        <BottomNavigation />

        <Snackbar isOpen={isSnackbarOpen} message="Some message" isAutohide onClose={() => handleSnackbarOpen(false)} />
      </Box>
    </ThemeProvider>
  )
}

export default memo(LayoutView)
