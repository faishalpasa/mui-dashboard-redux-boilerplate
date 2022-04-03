import { APP_THEME_SET } from 'store/reducers/appReducer'

export interface AppThemeSet {
  type: typeof APP_THEME_SET
  payload: 'light' | 'dark'
}

export const appThemeSet = (theme: 'light' | 'dark'): AppThemeSet => ({
  type: APP_THEME_SET,
  payload: theme,
})

export type AppActions = AppThemeSet
