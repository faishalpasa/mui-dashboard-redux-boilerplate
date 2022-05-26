import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { createTheme } from '@mui/material/styles'

import { getItem } from 'utils/localStorage'
import { appThemeSet } from 'redux/reducers/app'
import { snackbarClose } from 'redux/reducers/snackbar'
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

  const handleSnackbarClose = () => {
    dispatch(snackbarClose())
  }

  useEffect(() => {
    const localStorageTheme = getItem('theme') ?? 'light'
    if (localStorageTheme === 'dark' || localStorageTheme === 'light') {
      dispatch(appThemeSet(localStorageTheme))
    }
  }, [dispatch])

  const viewProps = {
    ...layoutState,
    children,
    handleSnackbarClose,
    isOpenSnackbar,
    muiTheme,
  }

  return (<LayoutView {...viewProps} />)
}

export default LayoutContainer
