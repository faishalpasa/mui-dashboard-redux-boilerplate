import React, { useEffect, useContext } from 'react'

import { snackbarOpenSet } from 'store/actions/snackbarAction'
import { StateContext } from 'store/StoreProvider'

import HomeView from './HomeView'

const HomeContainer = () => {
  const { state, dispatch } = useContext(StateContext)
  const { snackbar: { isOpen } } = state

  useEffect(() => {
    if (!isOpen) {
      dispatch(snackbarOpenSet(true))
    }
  }, [dispatch])

  return <HomeView />
}

export default HomeContainer
