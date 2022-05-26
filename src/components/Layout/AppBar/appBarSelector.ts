import type { RootState } from 'redux/rootReducer'

export const appBarSelector = ({ app }: RootState) => ({
  theme: app.theme,
})

export type PropsFromSelector = ReturnType<typeof appBarSelector>
