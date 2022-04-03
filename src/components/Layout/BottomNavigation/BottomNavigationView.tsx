import React, { useMemo } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import { pageMenus } from 'config/pageMenus'

const BottomNavigationView = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentPath = useMemo(() => location.pathname, [location.pathname])

  const onClickMenu = (path: string) => {
    if (path && (currentPath !== path)) {
      return navigate(path)
    }
    return null
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: {
          xs: 'block',
          sm: 'none',
        },
        border: '1px solid rgba(0,0,0,0.12)',
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentPath}
      >
        {pageMenus.map((pageMenu) => (
          <BottomNavigationAction
            key={pageMenu.id}
            label={pageMenu.name}
            icon={<pageMenu.icon />}
            value={pageMenu.path}
            onClick={() => onClickMenu(pageMenu.path)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNavigationView
