import type { AppActions } from 'store/actions/appAction'

export const APP_THEME_SET = 'APP_THEME_SET'

export interface AppStateProps {
  theme: 'light' | 'dark'
}

export const appState: AppStateProps = {
  theme: 'light',
}

const appReducer = (state: AppStateProps, action: AppActions) => {
  switch (action.type) {
    case APP_THEME_SET:
      return {
        ...state,
        theme: action.payload,
      }

    default:
      return state
  }
}

export default appReducer
