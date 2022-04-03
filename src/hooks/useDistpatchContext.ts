import { useContext } from 'react'
import { StateContext } from 'store/StoreProvider'

const useDispatchContext = () => {
  const { dispatch } = useContext(StateContext)
  return dispatch
}

export default useDispatchContext
