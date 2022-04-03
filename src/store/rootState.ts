import * as app from './reducers/appReducer'
import * as snackbar from './reducers/snackbarReducer'

export interface RootState {
  app: app.AppStateProps
  snackbar: snackbar.SnakcbarStateProps
}

const rootState: RootState = {
  app: app.appState,
  snackbar: snackbar.snackbarState,
}

export default rootState
