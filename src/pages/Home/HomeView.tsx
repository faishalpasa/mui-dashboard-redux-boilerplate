import React from 'react'
import {
  Box, Paper, Typography,
} from '@mui/material'
import styled from 'styled-components'

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

const StyledPaper = styled(Paper)`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
`

const HomeView = () => (
  <Box display="flex" flexDirection="column" height="100%" gap={2}>
    <Breadcrumbs items={breadcrumbs} />
    <StyledPaper elevation={1}>
      <Typography variant="h5" component="h2">
        Home
      </Typography>
    </StyledPaper>
  </Box>
)

export default HomeView
