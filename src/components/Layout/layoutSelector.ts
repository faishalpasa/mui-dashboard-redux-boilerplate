import type { RootState } from 'redux/rootReducer'

export const layoutSelector = ({ app, snackbar }: RootState) => ({
  theme: app.theme,
  isOpenSnackbar: snackbar.isOpen,
  messageSnackbar: snackbar.message,
})

export type PropsFromSelector = ReturnType<typeof layoutSelector>
