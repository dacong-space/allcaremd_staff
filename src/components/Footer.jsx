import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2d3748',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
        <Grid container spacing={4}>
          {/* Logo and Company Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'white',
              }}
            >
              Allcare Health Care
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
              }}
            >
              马里兰州专业居家护理服务提供商，致力于为客户提供高质量的护理服务。
            </Typography>
          </Grid>



          {/* 培训项目 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              Training Projects
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavigation('/training')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                Training Overview
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavigation('/training/pca')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                PCA Training
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavigation('/training/cpr')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                CPR Training
              </Link>
            </Box>
          </Grid>

          {/* 服务 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Home Care
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                ADLs Assistance
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Nursing Supervision
              </Typography>
            </Box>
          </Grid>



          {/* 关于我们 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              About Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => handleNavigation('/about')}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    textAlign: 'left',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Contact Us
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.8rem',
                  }}
                >
                  Phone: (240) 668-4666
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.8rem',
                  }}
                >
                  Email: allcaremd@outlook.com
                </Typography>
                <Link
                  href="https://allcaremd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Web: allcaremd.com
                </Link>
            </Box>
          </Grid>

          {/* 扫码访问 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              Scan to visit the website
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}>
              <Box
                component="img"
                src="/images/QR_Allcare.png"
                alt="Allcare QR Code"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  p: .5,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
              {/* <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.8rem',
                  textAlign: 'center',
                }}
              >
                扫描二维码访问官网
              </Typography> */}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center',
            }}
          >
            Copyright © 2025{' '}
            <Link
              href="https://allcaremd.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              Allcare Health Care, LLC
            </Link>
            . Designed and developed by {' '}
            <Link
              href="https://allcaremd.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                },
              }}
            >
              Rui Gao
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
