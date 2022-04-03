import { useContext } from 'react'
import { StateContext } from 'store/StoreProvider'

const useState = () => {
  const { state } = useContext(StateContext)
  return {
    ...state,
  }
}

export default useState
