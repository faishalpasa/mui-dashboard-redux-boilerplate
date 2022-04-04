import React, { useMemo } from 'react'
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { pageMenus } from 'config/pageMenus'
import { DRAWER_WIDTH } from 'constants/layout'

const SideMenuView = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentPath = useMemo(() => location.pathname, [location.pathname])

  const handleMenuClick = (path: string) => {
    if (path && (currentPath !== path)) {
      return navigate(path)
    }
    return null
  }
  const checkMenuSelected = (path: string) => {
    const splittedCurrentPath = currentPath.split('/')
    const spliitedPath = path.split('/')
    return splittedCurrentPath[1] === spliitedPath[1]
  }

  return (
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
              onClick={() => handleMenuClick(pageMenu.path)}
              key={pageMenu.id}
              sx={{
                color: (theme) => (checkMenuSelected(pageMenu.path)
                  ? theme.palette.primary.main : undefined),
              }}
            >
              <ListItemIcon
                sx={{
                  color: (theme) => (checkMenuSelected(pageMenu.path)
                    ? theme.palette.primary.main : undefined),
                }}
              >
                {pageMenu.icon && <pageMenu.icon />}
              </ListItemIcon>
              <ListItemText primary={pageMenu.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideMenuView
