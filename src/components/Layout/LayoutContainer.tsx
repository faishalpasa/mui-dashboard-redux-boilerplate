import React, { useEffect, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

import { getItem } from 'utils/localStorage'
import useDispatchContext from 'hooks/useDistpatchContext'
import useStateContext from 'hooks/useStateContext'
import { appThemeSet } from 'store/actions/appAction'
import { snackbarOpenSet } from 'store/actions/snackbarAction'
import { lightTheme, darkTheme } from 'styles/theme'

import LayoutView from './LayoutView'

interface LayoutContainerProps {
  children: React.ReactNode
}

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  const dispatch = useDispatchContext()
  const { app, snackbar } = useStateContext()

  const { isOpen: isSnackbarOpen } = snackbar
  const { theme: themeColor } = app
  const muiTheme = useMemo(
    () => createTheme({
      palette: {
        ...themeColor === 'light' ? lightTheme : darkTheme,
        mode: themeColor,
      },
    }),
    [themeColor],
  )

  const handleSnackbarOpen = (open: boolean) => {
    dispatch(snackbarOpenSet(open))
  }

  useEffect(() => {
    const localStorageTheme = getItem('theme') ?? 'light'
    if (localStorageTheme === 'dark' || localStorageTheme === 'light') {
      dispatch(appThemeSet(localStorageTheme))
    }
  }, [dispatch])

  const viewProps = {
    children,
    handleSnackbarOpen,
    isSnackbarOpen,
    muiTheme,
  }

  return (<LayoutView {...viewProps} />)
}

export default LayoutContainer
