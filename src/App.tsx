import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material/'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

import Layout from 'components/Layout'
import Pages from 'pages/Index'
import { StateProvider } from 'store/StoreProvider'

dayjs.locale('id')

const App = () => (
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <StateProvider>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </StateProvider>
  </StyledEngineProvider>
)

export default App
