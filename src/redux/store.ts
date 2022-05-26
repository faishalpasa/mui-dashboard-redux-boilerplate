import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './rootReducer'

const logger = createLogger({ collapsed: true })
const middleware = process.env.NODE_ENV !== 'production'
  ? [thunk, logger]
  : [thunk]

export const store = configureStore({ reducer, middleware })
