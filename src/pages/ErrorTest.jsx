import React, { useState } from 'react'
import { Box, Typography, Button, Container, Card, Grid } from '@mui/material'
import { Error as ErrorIcon, BugReport as BugIcon, Warning as WarningIcon } from '@mui/icons-material'

function ErrorTest() {
  const [shouldThrowError, setShouldThrowError] = useState(false)

  // 这会触发ErrorBoundary
  if (shouldThrowError) {
    throw new Error('This is a test error to demonstrate the ErrorBoundary component')
  }

  const triggerError = () => {
    setShouldThrowError(true)
  }

  const triggerNotFound = () => {
    window.location.href = '/non-existent-page-test'
  }

  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#2c3e50',
              mb: 2,
            }}
          >
            Error Page Testing
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Click the buttons below to test different error page designs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* ErrorBoundary Test */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                borderRadius: 3,
                border: '1px solid rgba(239, 68, 68, 0.2)',
                boxShadow: '0 4px 20px rgba(239, 68, 68, 0.1)',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(239, 68, 68, 0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(239, 68, 68, 0.2)',
                }}
              >
                <ErrorIcon sx={{ fontSize: '2rem', color: '#ef4444' }} />
              </Box>
              
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  mb: 2,
                }}
              >
                Application Error
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Test the ErrorBoundary component that catches JavaScript errors in the application
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<BugIcon />}
                onClick={triggerError}
                sx={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#dc2626',
                  },
                }}
              >
                Trigger Error
              </Button>
            </Card>
          </Grid>

          {/* 404 Test */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                textAlign: 'center',
                height: '100%',
                borderRadius: 3,
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow: '0 4px 20px rgba(168, 85, 247, 0.1)',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(168, 85, 247, 0.15)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                <WarningIcon sx={{ fontSize: '2rem', color: '#a855f7' }} />
              </Box>
              
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  mb: 2,
                }}
              >
                404 Not Found
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Test the 404 page that appears when visiting a non-existent URL
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<WarningIcon />}
                onClick={triggerNotFound}
                sx={{
                  backgroundColor: '#a855f7',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#9333ea',
                  },
                }}
              >
                Go to 404 Page
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* 说明 */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 3,
            bgcolor: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, color: '#2c3e50' }}
          >
            Testing Instructions:
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            • <strong>Application Error:</strong> Triggers the ErrorBoundary component with a modern gradient design<br/>
            • <strong>404 Not Found:</strong> Shows the custom 404 page with glassmorphism effects<br/>
            • Both pages feature beautiful animations, responsive design, and professional styling
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default ErrorTest
