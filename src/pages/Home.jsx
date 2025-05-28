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
  Chip,
  Paper
} from '@mui/material'
import {
  School as SchoolIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  MenuBook as ManualIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  CheckCircle as CheckIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    icon: <ManualIcon sx={{ fontSize: 48 }} />,
    title: '客户信息手册',
    description: 'Allcare Health Care 完整的客户信息手册，包含权利法案、隐私政策等',
    color: '#377dff',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'PCA专业培训',
    description: '个人护理助理培训课程，掌握ADLs协助、安全护理等专业技能',
    color: '#00c9a7',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'CPR & 急救培训',
    description: '心肺复苏术和急救培训，确保紧急情况下的专业应对能力',
    color: '#ffb946',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '护理监督支持',
    description: '注册护士监督指导，确保护理质量和服务标准',
    color: '#de4437',
  },
]

const services = [
  {
    icon: <HomeIcon sx={{ fontSize: 40 }} />,
    title: '日常生活协助 (ADLs)',
    description: '协助洗澡、穿衣、进食、移动等日常活动',
    color: '#377dff',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: '陪伴与情感支持',
    description: '提供友好的陪伴和心理支持服务',
    color: '#e91e63',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: '安全监督',
    description: '确保客户在家中的安全和健康',
    color: '#ff9800',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: '专业护理监督',
    description: '注册护士定期监督和评估护理质量',
    color: '#4caf50',
  },
]

const stats = [
  { number: '100%', label: 'CPR认证', icon: <SecurityIcon /> },
  { number: '24/7', label: '护理支持', icon: <SupportIcon /> },
  { number: 'RN', label: '护士监督', icon: <CheckIcon /> },
  { number: '专业', label: 'PCA培训', icon: <SchoolIcon /> },
]

function Home() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 16 },
          bgcolor: 'white',
          color: 'text.primary',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="Allcare Health Care, LLC"
                sx={{
                  bgcolor: 'primary.light',
                  color: 'white',
                  mb: 3,
                  fontSize: '0.875rem',
                  px: 2,
                  py: 0.5
                }}
              />
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                All People. All Heart.{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Allcare.
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Allcare 将使您的培训体验现代化和专业化，同时为您节省宝贵的时间。
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/training/elderly-manual')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                  }}
                >
                  查看客户手册
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/training')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                  }}
                >
                  开始培训
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
                  height: { xs: 300, md: 400 },
                }}
              >
                {/* 模拟多个页面卡片的效果 */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* 背景卡片 */}
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Paper
                      key={index}
                      elevation={3}
                      sx={{
                        position: 'absolute',
                        width: { xs: 200, md: 250 },
                        height: { xs: 140, md: 180 },
                        borderRadius: 2,
                        bgcolor: 'white',
                        transform: `rotate(${(index - 3) * 8}deg) translateX(${(index - 3) * 20}px) translateY(${(index - 3) * 10}px)`,
                        zIndex: 6 - index,
                        opacity: index === 3 ? 1 : 0.7,
                        border: '1px solid',
                        borderColor: 'grey.200',
                        display: 'flex',
                        flexDirection: 'column',
                        p: 2,
                      }}
                    >
                      {index === 3 && (
                        <>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'primary.main',
                                mr: 1,
                              }}
                            >
                              <FavoriteIcon sx={{ fontSize: 20 }} />
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              Allcare
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Health Care, LLC
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            马里兰州专业居家护理服务
                          </Typography>
                        </>
                      )}
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Allcare Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, mb: 3 }}
            >
              关于 Allcare Health Care
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              马里兰州值得信赖的居家护理服务提供商
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              在 Allcare Health Care，我们相信富有同情心的护理始于真诚的连接。我们自豪地为老年人、慢性疾病患者和残疾人士（包括儿童）提供服务，以尊严、尊重和真诚的奉献精神为他们服务。
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              我们不仅仅是护理人员，我们是陪伴者、倡导者，是您日常生活中值得信赖的支持。我们的使命是将可靠、尊重和以心为中心的护理带到我们服务的每一个家庭。
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/about')}
              sx={{ px: 4 }}
            >
              了解更多
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: theme.palette.primary.light,
                borderRadius: 2,
                p: 4,
                textAlign: 'center'
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                我们的服务理念
              </Typography>
              <Typography variant="h6" sx={{ color: 'white', opacity: 0.9 }}>
                "以客户为中心，用心护理每一天"
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            我们的护理服务
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: `${service.color}20`,
                        color: service.color,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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

        {/* Platform Features Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h2" gutterBottom>
            培训平台特色
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            为 Allcare Health Care 员工提供专业、全面、高质量的培训体验
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
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8]
                    },
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


      </Container>


    </Box>
  )
}

export default Home
