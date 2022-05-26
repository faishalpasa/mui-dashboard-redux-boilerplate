import {
  APP_THEME_SET,
} from 'redux/reducers/app'

import type { AppInitialState } from 'redux/reducers/app'

export const appThemeSet = (theme: AppInitialState['theme']) => ({
  type: APP_THEME_SET,
  payload: theme,
})
