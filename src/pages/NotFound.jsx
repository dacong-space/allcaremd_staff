import React from 'react'
import { Box, Typography, Button, Container, Fade } from '@mui/material'
import { Home as HomeIcon, ArrowBack as BackIcon, Search as SearchIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

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

      <Container maxWidth="md">
        <Fade in={true} timeout={800}>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* 404图标 */}
            <Box
              sx={{
                width: 150,
                height: 150,
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
              <SearchIcon sx={{ fontSize: 70, color: 'white' }} />
            </Box>

            {/* 404标题 */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '4rem', md: '6rem' },
                opacity: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              404
            </Typography>

            {/* 主标题 */}
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Page Not Found
            </Typography>

            {/* 描述 */}
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                opacity: 0.9,
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </Typography>

            {/* 按钮组 */}
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                mb: 4,
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                onClick={handleGoHome}
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
                Go Home
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<BackIcon />}
                onClick={handleGoBack}
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
                Go Back
              </Button>
            </Box>

            {/* 快速导航 */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
                mt: 4,
              }}
            >
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Training', path: '/training' },
                { label: 'Documents', path: '/docs' },
                { label: 'Help', path: '/help' },
              ].map((link) => (
                <Button
                  key={link.path}
                  variant="text"
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
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
              Need help? Contact our support team at{' '}
              <Box component="span" sx={{ fontWeight: 600 }}>
                allcaremd@outlook.com
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default NotFound
