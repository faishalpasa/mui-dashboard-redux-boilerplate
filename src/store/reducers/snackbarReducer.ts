import type { SnackbarActions } from 'store/actions/snackbarAction'

export const SNACKBAR_OPEN_SET = 'SNACKBAR_OPEN_SET'
export const SNACKBAR_MESSAGE_SET = 'SNACKBAR_MESSAGE_SET'
export const SNACKBAR_DURATION_SET = 'SNACKBAR_DURATION_SET'

export interface SnakcbarStateProps {
  duration: number
  isOpen: boolean
  message: string
}

export const snackbarState: SnakcbarStateProps = {
  duration: 5000,
  isOpen: false,
  message: '',
}

const snackbarReducer = (state: SnakcbarStateProps, action: SnackbarActions) => {
  switch (action.type) {
    case SNACKBAR_OPEN_SET:
      return {
        ...state,
        isOpen: action.payload,
      }
    case SNACKBAR_MESSAGE_SET:
      return {
        ...state,
        message: action.payload,
      }
    case SNACKBAR_DURATION_SET:
      return {
        ...state,
        duration: action.payload,
      }
    default:
      return state
  }
}

export default snackbarReducer
