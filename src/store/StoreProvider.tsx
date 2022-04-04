import React, { useReducer, useMemo, createContext } from 'react'
import rootReducer from './rootReducer'
import rootState, { RootState } from './rootState'

import type { RootAction } from './rootAction'

export const StateContext = createContext<{
  state: RootState
  dispatch: React.Dispatch<RootAction>
}>({ state: rootState, dispatch: () => undefined })

interface ProviderProps {
  children: React.ReactNode
}

export const StateProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, rootState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  )
}
