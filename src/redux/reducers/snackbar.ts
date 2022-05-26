import createReducer from 'utils/createReducer'

export const SNACKBAR_OPEN_SET = 'snackbar/OPEN_SET'
export const SNACKBAR_MESSAGE_SET = 'snackbar/MESSAGE_SET'
export const SNACKBAR_DURATION_SET = 'snackbar/DURATION_SET'

export interface SnakcbarInitialState {
  duration: number
  isOpen: boolean
  message: string
}

const INITIAL_STATE: SnakcbarInitialState = {
  duration: 5000,
  isOpen: false,
  message: '',
}

export default createReducer(INITIAL_STATE, {
  [SNACKBAR_OPEN_SET]: (state, action) => {
    state.isOpen = action.payload
  },
  [SNACKBAR_MESSAGE_SET]: (state, action) => {
    state.message = action.payload
  },
  [SNACKBAR_DURATION_SET]: (state, action) => {
    state.duration = action.payload
  },
})
