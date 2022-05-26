import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { commentFetch } from 'redux/actions/comment'
import { snackbarOpenSet } from 'redux/actions/snackbar'

import { homeSelector } from './homeSelector'
import HomeView from './HomeView'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const homeState = useSelector(homeSelector, shallowEqual)

  useEffect(() => {
    dispatch(commentFetch(1))
    dispatch(snackbarOpenSet(true))
  }, [dispatch])

  const text = 'This is home'

  const viewProps = {
    ...homeState,
    text,
  }

  return <HomeView {...viewProps} />
}

export default HomeContainer
