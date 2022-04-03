import React from 'react'
import styled from 'styled-components'
import { Box, Typography, Paper } from '@mui/material'

import Breadcrumbs from 'components/Breadcrumbs'

const breadcrumbs = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Not Found',
    link: '/',
  },
]

const StyledPaper = styled(Paper)`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
`

const NotFoundView = () => (
  <Box display="flex" flexDirection="column" height="100%" gap={2}>
    <Breadcrumbs items={breadcrumbs} />
    <StyledPaper elevation={1}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h1">404</Typography>
        <br />
        <Typography variant="body1">Page Not Found</Typography>
      </Box>
    </StyledPaper>
  </Box>
)

export default NotFoundView
