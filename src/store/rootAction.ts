import type { AppActions } from 'store/actions/appAction'
import type { SnackbarActions } from 'store/actions/snackbarAction'

export type RootAction = AppActions | SnackbarActions
