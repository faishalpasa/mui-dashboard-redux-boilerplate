import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

import Layout from 'components/Layout'
import Pages from 'pages/Index'
import { store } from 'redux/store'

dayjs.locale('id')

const App = () => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </Provider>
  </StyledEngineProvider>
)

export default App
