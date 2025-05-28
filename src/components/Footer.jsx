import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Chip,
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material'
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
      <Container maxWidth="lg">
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
              Allcare
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

          {/* 产品 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              产品
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
                培训平台
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavigation('/training/elderly-manual')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                客户手册
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavigation('/files')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                文档库
              </Link>
            </Box>
          </Grid>

          {/* 关于 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              关于
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
                关于我们
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
                PCA培训
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
                CPR培训
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
              服务
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                居家护理
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                ADLs协助
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                护理监督
              </Typography>
            </Box>
          </Grid>

          {/* 其他 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'white',
              }}
            >
              其他
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                电话: (240) 668-4666
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                邮箱: allcaremd@outlook.com
              </Typography>
              <Link
                href="https://allcaremd.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                allcaremd.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'white',
              mb: 2,
            }}
          >
            需要帮助？
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
            }}
          >
            联系我们获取培训支持或技术帮助
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              icon={<PhoneIcon />}
              label="电话: (240) 668-4666"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem',
                py: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
                '& .MuiChip-icon': {
                  color: 'white',
                },
              }}
            />
            <Chip
              icon={<EmailIcon />}
              label="邮箱: allcaremd@outlook.com"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem',
                py: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
                '& .MuiChip-icon': {
                  color: 'white',
                },
              }}
            />
          </Box>
        </Box>

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
            Copyright © 2024 The Project by{' '}
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
              Allcare
            </Link>
            . All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
