import React from 'react'
import { Snackbar, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

interface SnackbarProps {
  isAutohide?: boolean
  isOpen: boolean
  message: string
  onClose?: () => void
}

const SnackbarView = ({
  isOpen,
  onClose,
  message,
  isAutohide,
}: SnackbarProps) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={isOpen}
    onClose={onClose}
    message={message}
    autoHideDuration={isAutohide ? 5000 : undefined}
    action={(
      <IconButton onClick={onClose}>
        <CloseIcon sx={{ color: (theme) => theme.palette.primary.contrastText }} />
      </IconButton>
    )}
  />
)

export default SnackbarView
