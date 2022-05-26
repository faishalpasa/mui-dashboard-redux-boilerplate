import React, { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  AccountCircle as AccountCircleIcon,
  Settings as SettingIcon,
  Logout as LogoutIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

import config from 'config'
import { appThemeSet } from 'redux/actions/app'
import { acronym } from 'utils/string'
import { setItem } from 'utils/localStorage'

import { appBarSelector } from './appBarSelector'

const AppBarView = () => {
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const appBarState = useSelector(appBarSelector, shallowEqual)

  const { theme: themeColor } = appBarState

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenuEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorMenuEl(null)
  }
  const handleThemeColorToggle = () => {
    dispatch(appThemeSet(themeColor === 'light' ? 'dark' : 'light'))
    setItem('theme', themeColor === 'light' ? 'dark' : 'light')
  }
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box flex={1}>
          <Typography variant="h6" onClick={() => navigate('/')} sx={{ display: 'inline-block', cursor: 'pointer' }}>
            {config.appName}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={handleThemeColorToggle} color="inherit">
            {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenuOpen}
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
            onClose={handleMenuClose}
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
  )
}

export default AppBarView
