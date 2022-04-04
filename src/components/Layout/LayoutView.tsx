import React, { memo } from 'react'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import type { Theme } from '@mui/material/styles'

import Snackbar from 'components/Snackbar'
import { DRAWER_WIDTH, APPBAR_HEIGHT, BOTTOM_NAVIGATION_HEIGHT } from 'constants/layout'

import AppBar from './AppBar'
import BottomNavigation from './BottomNavigation'
import Drawer from './Drawer'

interface Layout {
  children: React.ReactNode
  handleSnackbarOpen: (open: boolean) => void
  isSnackbarOpen: boolean
  muiTheme: Theme
}

const LayoutView = ({
  children,
  handleSnackbarOpen,
  isSnackbarOpen,
  muiTheme,
}: Layout) => (
  <ThemeProvider theme={muiTheme}>
    <Box>
      <AppBar />
      <Drawer />
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

export default memo(LayoutView)
