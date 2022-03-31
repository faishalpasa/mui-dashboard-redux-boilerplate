/* eslint-disable no-unused-vars */
import React, {
  useState, useMemo, useEffect, createContext,
} from 'react'
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material/'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

import Layout from 'components/Layout'
import Pages from 'pages/Index'
import { lightTheme, darkTheme } from 'styles/theme'
import { getItem, setItem } from 'utils/localStorage'

dayjs.locale('id')

export const AppContext = createContext({
  snackbarContext: {
    handleSnackbarOpen: (open: boolean) => {},
    isOpen: false,
  },
  themeContext: {
    handleToggleThemeColor: () => {},
    themeColor: '',
  },
})

const App = () => {
  const [themeColor, setThemeColor] = useState<'light' | 'dark'>('light')
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)

  const themeContext = useMemo(() => ({
    handleToggleThemeColor: () => {
      const newThemeColorMode = themeColor === 'light' ? 'dark' : 'light'
      setThemeColor(newThemeColorMode)
      setItem('theme', newThemeColorMode)
    },
    themeColor,
  }), [themeColor])

  const snackbarContext = useMemo(() => ({
    handleSnackbarOpen: (open: boolean) => {
      console.log('open', open)
      setIsSnackbarOpen(open)
    },
    isOpen: isSnackbarOpen,
  }), [isSnackbarOpen])

  const appContext = useMemo(() => ({
    themeContext,
    snackbarContext,
  }), [themeContext, snackbarContext])

  const theme = useMemo(
    () => createTheme({
      palette: {
        ...themeColor === 'light' ? lightTheme : darkTheme,
        mode: themeColor,
      },
    }),
    [themeColor],
  )

  // console.log('themeColor', themeColor)
  console.log('isSnackbarOpen', isSnackbarOpen)

  useEffect(() => {
    const localStorageTheme = getItem('theme') ?? 'light'
    if (localStorageTheme === 'dark' || localStorageTheme === 'light') {
      setThemeColor(localStorageTheme)
    }
  }, [setThemeColor])
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <AppContext.Provider value={appContext}>
        <ThemeProvider theme={theme}>
          <Layout>
            <BrowserRouter>
              <Pages />
            </BrowserRouter>
          </Layout>
        </ThemeProvider>
      </AppContext.Provider>
    </StyledEngineProvider>
  )
}

export default App
