import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  Stack,
  useTheme,
} from '@mui/material'
import {
  School as SchoolIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  MenuBook as ManualIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material'

const features = [
  {
    icon: <ManualIcon sx={{ fontSize: 48 }} />,
    title: '老人护理手册',
    description: '详细的老人护理指南，包含日常护理、安全注意事项等重要内容',
    color: '#377dff',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'PCA培训',
    description: '个人护理助理培训课程，掌握专业护理技能和操作规范',
    color: '#00c9a7',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'CPR培训',
    description: '心肺复苏术培训，学习紧急救护技能，确保工作安全',
    color: '#ffb946',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '在线支持',
    description: '24/7在线培训支持，随时获取帮助和指导',
    color: '#de4437',
  },
]

const stats = [
  { number: '100%', label: '员工覆盖', icon: <PeopleIcon /> },
  { number: '24/7', label: '在线访问', icon: <SupportIcon /> },
  { number: '实时', label: '内容更新', icon: <CheckIcon /> },
  { number: '专业', label: '培训内容', icon: <SchoolIcon /> },
]

function Home() {
  const theme = useTheme()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 16 },
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                RSA 员工培训平台
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                为新员工提供全面的入职培训，包括老人护理手册、PCA培训、CPR培训等专业内容
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  开始培训
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  查看手册
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                    background: 'linear-gradient(135deg, #377dff 0%, #00c9a7 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '120%',
                      height: '120%',
                      background: 'linear-gradient(135deg, rgba(55, 125, 255, 0.1) 0%, rgba(0, 201, 167, 0.1) 100%)',
                      borderRadius: '50%',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box textAlign="center" sx={{ color: 'white' }}>
                    <BusinessIcon sx={{ fontSize: { xs: 60, md: 80 }, mb: 2 }} />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                      RSA
                    </Typography>
                    <Typography variant="h6">
                      专业护理服务
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mx: 'auto',
                    mb: 2,
                    background: `linear-gradient(135deg, ${features[index]?.color || '#6366f1'} 0%, ${features[index]?.color || '#8b5cf6'} 100%)`,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography variant="h3" component="div" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom>
            我们的优势
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            为什么选择我们的培训服务？我们提供专业、全面、高质量的培训体验
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${feature.color}, ${feature.color}aa)`,
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Company Info Section */}
        <Card sx={{ p: 6, mb: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                关于我们
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                我们是一家专注于提供高质量培训服务的专业机构，致力于为个人和企业提供专业的培训服务，
                帮助提升技能水平和职业发展。
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                通过系统化的课程设计和实践导向的教学方法，我们已经成功培训了众多学员，
                涵盖PCA培训、CPR培训、技能认证、企业内训等多个领域。
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button variant="contained" size="large" sx={{ mr: 2 }}>
                  了解更多
                </Button>
                <Button variant="outlined" size="large">
                  联系我们
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 300,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Box textAlign="center">
                  <SchoolIcon sx={{ fontSize: 80, mb: 2 }} />
                  <Typography variant="h4" gutterBottom>
                    专业培训
                  </Typography>
                  <Typography variant="h6">
                    成就每一个学员的梦想
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* CTA Section */}
        <Card
          sx={{
            p: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h3" gutterBottom>
            开始您的学习之旅
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            立即联系我们，了解更多培训课程信息，开启职业发展新篇章
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              立即报名
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 2,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              咨询详情
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  )
}

export default Home
