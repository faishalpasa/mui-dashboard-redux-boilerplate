import React from 'react'
import {
  Box, Paper, Typography, TextField,
} from '@mui/material'
import styled from 'styled-components'

import Breadcrumbs from 'components/Breadcrumbs'

const breadcrumbs = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Form',
    link: '/',
  },
]

const StyledPaper = styled(Paper)`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
`

const StyledForm = styled.form`
  margin: 1rem 0;
`

const FormView = () => (
  <Box display="flex" flexDirection="column" height="100%" gap={2}>
    <Breadcrumbs items={breadcrumbs} />
    <StyledPaper elevation={1}>
      <Typography variant="h5" component="h2">
        Form
      </Typography>
      <StyledForm>
        <TextField
          label="Text Field"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="dense"
        />
      </StyledForm>
    </StyledPaper>
  </Box>
)

export default FormView
