import {
  SNACKBAR_OPEN_SET,
  SNACKBAR_DURATION_SET,
  SNACKBAR_MESSAGE_SET,
} from 'store/reducers/snackbarReducer'

export interface SnakcbarOpenSet {
  type: typeof SNACKBAR_OPEN_SET
  payload: boolean
}
export interface SnakcbarMessageSet {
  type: typeof SNACKBAR_MESSAGE_SET
  payload: string
}
export interface SnakcbarDurationSet {
  type: typeof SNACKBAR_DURATION_SET
  payload: number
}

export const snackbarOpenSet = (isOpen: boolean): SnakcbarOpenSet => ({
  type: SNACKBAR_OPEN_SET,
  payload: isOpen,
})
export const snackbarMessageSet = (message: string): SnakcbarMessageSet => ({
  type: SNACKBAR_MESSAGE_SET,
  payload: message,
})
export const snackbarDurationSet = (duration: number): SnakcbarDurationSet => ({
  type: SNACKBAR_DURATION_SET,
  payload: duration,
})

export type SnackbarActions = SnakcbarOpenSet | SnakcbarMessageSet | SnakcbarDurationSet
