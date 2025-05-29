import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

function LoadingSpinner({ message = '加载中...' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        gap: 2,
      }}
    >
      <CircularProgress 
        size={40} 
        sx={{ color: '#87ceeb' }}
      />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}

export default LoadingSpinner
