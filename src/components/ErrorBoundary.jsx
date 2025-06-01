import React from 'react'
import { Box, Typography, Button, Container, Fade } from '@mui/material'
import { Refresh as RefreshIcon, Home as HomeIcon, ErrorOutline as ErrorIcon } from '@mui/icons-material'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleRefresh = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: 'calc(100vh - 64px)', // 减去导航栏高度
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            mt: 0, // 确保没有顶部边距
          }}
        >
          {/* 背景装饰 */}
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(60px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              filter: 'blur(40px)',
            }}
          />

          <Container maxWidth="sm">
            <Fade in={true} timeout={800}>
              <Box
                sx={{
                  textAlign: 'center',
                  color: 'white',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* 错误图标 */}
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 4,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <ErrorIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>

                {/* 标题 */}
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                >
                  Oops! Something went wrong
                </Typography>

                {/* 描述 */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    maxWidth: 500,
                    mx: 'auto',
                  }}
                >
                  We're sorry for the inconvenience. Please try refreshing the page or return to the homepage.
                </Typography>

                {/* 按钮组 */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<RefreshIcon />}
                    onClick={this.handleRefresh}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Refresh Page
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<HomeIcon />}
                    onClick={this.handleGoHome}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Go Home
                  </Button>
                </Box>

                {/* 底部提示 */}
                <Typography
                  variant="body2"
                  sx={{
                    mt: 6,
                    opacity: 0.7,
                    fontSize: '0.9rem',
                  }}
                >
                  If the problem persists, please contact our support team
                </Typography>
              </Box>
            </Fade>
          </Container>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
