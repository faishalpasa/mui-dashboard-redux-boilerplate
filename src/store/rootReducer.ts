import appReducer from './reducers/appReducer'
import snackbarReducer from './reducers/snackbarReducer'

import type { AppActions } from './actions/appAction'
import type { SnackbarActions } from './actions/snackbarAction'
import type { RootState } from './rootState'
import type { RootAction } from './rootAction'

const rootReducer = ({ app, snackbar }: RootState, action: RootAction) => ({
  app: appReducer(app, action as AppActions),
  snackbar: snackbarReducer(snackbar, action as SnackbarActions),
})

export default rootReducer
