import React, { useEffect, useContext } from 'react'

import { AppContext } from 'App'

import HomeView from './HomeView'

const HomeContainer = () => {
  const { snackbarContext } = useContext(AppContext)
  const { isOpen, handleSnackbarOpen } = snackbarContext

  useEffect(() => {
    if (!isOpen) {
      handleSnackbarOpen(true)
    }
  }, [])

  return <HomeView />
}

export default HomeContainer
