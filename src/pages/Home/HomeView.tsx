import React from 'react'
import { Box } from '@mui/material'

import Breadcrumbs from 'components/Breadcrumbs'

const breadcrumbs = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Home',
    link: '/',
  },
]

const HomeView = () => (
  <Box>
    <Breadcrumbs items={breadcrumbs} />
    Home
  </Box>
)

export default HomeView
