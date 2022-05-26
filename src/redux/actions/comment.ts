import axios from 'axios'
import { Dispatch } from 'redux'

import {
  COMMENT_FETCH,
  COMMENT_FETCH_FAILURE,
  COMMENT_FETCH_SUCCESS,
} from 'redux/reducers/comment'

// import type { CommentInitialState } from 'redux/reducers/comment'

export const commentFetch = (postId: number): any => async (dispatch: Dispatch) => {
  dispatch({
    type: COMMENT_FETCH,
  })

  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    dispatch({
      type: COMMENT_FETCH_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: COMMENT_FETCH_FAILURE,
      payload: 'error message',
    })
  }
}
