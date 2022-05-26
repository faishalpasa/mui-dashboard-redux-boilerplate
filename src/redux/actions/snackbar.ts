import {
  SNACKBAR_OPEN_SET,
  SNACKBAR_DURATION_SET,
  SNACKBAR_MESSAGE_SET,
} from 'redux/reducers/snackbar'

import type { SnakcbarInitialState } from 'redux/reducers/snackbar'

export const snackbarOpenSet = (isOpen: SnakcbarInitialState['isOpen']) => ({
  type: SNACKBAR_OPEN_SET,
  payload: isOpen,
})
export const snackbarMessageSet = (message: SnakcbarInitialState['message']) => ({
  type: SNACKBAR_MESSAGE_SET,
  payload: message,
})
export const snackbarDurationSet = (duration: SnakcbarInitialState['duration']) => ({
  type: SNACKBAR_DURATION_SET,
  payload: duration,
})
