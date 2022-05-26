import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { createTheme } from '@mui/material/styles'

import { getItem } from 'utils/localStorage'
import { appThemeSet } from 'redux/actions/app'
import { snackbarOpenSet } from 'redux/actions/snackbar'
import { lightTheme, darkTheme } from 'styles/theme'

import { layoutSelector } from './layoutSelector'
import LayoutView from './LayoutView'

interface LayoutContainerProps {
  children: React.ReactNode
}

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  const dispatch = useDispatch()
  const layoutState = useSelector(layoutSelector, shallowEqual)

  const { isOpenSnackbar, theme: themeColor } = layoutState
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
    isOpenSnackbar,
    muiTheme,
  }

  return (<LayoutView {...viewProps} />)
}

export default LayoutContainer
