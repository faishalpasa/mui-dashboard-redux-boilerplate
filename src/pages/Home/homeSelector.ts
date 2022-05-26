import type { RootState } from 'redux/rootReducer'

export const homeSelector = ({ comment }: RootState) => ({
  isLoading: comment.isLoading,
  data: comment.data,
})

export type PropsFromSelector = ReturnType<typeof homeSelector>
