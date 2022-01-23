import React from 'react'
import { LinearProgress } from '@mui/material'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff85;
  z-index: 50000;
`

const StyledLinearProgress = styled(LinearProgress)`
  height: 5px;
`

const LoadingOverlay = () => (
  <StyledContainer>
    <StyledLinearProgress />
  </StyledContainer>
)

export default LoadingOverlay
