import React, { useRef } from 'react'
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
  Paper,
  IconButton
} from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
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
  Email as EmailIcon,
  Star as StarIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

// 合并护理服务和培训平台特色
const servicesAndFeatures = [
  {
    icon: <HomeIcon sx={{ fontSize: 48 }} />,
    title: '日常生活协助 (ADLs)',
    description: '协助洗澡、穿衣、进食、移动等日常活动',
    color: '#377dff',
    category: 'service'
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 48 }} />,
    title: '陪伴与情感支持',
    description: '提供友好的陪伴和心理支持服务',
    color: '#e91e63',
    category: 'service'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: '安全监督',
    description: '确保客户在家中的安全和健康',
    color: '#ff9800',
    category: 'service'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '专业护理监督',
    description: '注册护士定期监督和评估护理质量',
    color: '#4caf50',
    category: 'service'
  },
  {
    icon: <ManualIcon sx={{ fontSize: 48 }} />,
    title: '客户信息手册',
    description: 'Allcare Health Care 完整的客户信息手册，包含权利法案、隐私政策等',
    color: '#6366f1',
    category: 'feature'
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'PCA专业培训',
    description: '个人护理助理培训课程，掌握ADLs协助、安全护理等专业技能',
    color: '#00c9a7',
    category: 'feature'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'CPR & 急救培训',
    description: '心肺复苏术和急救培训，确保紧急情况下的专业应对能力',
    color: '#ffb946',
    category: 'feature'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '护理监督支持',
    description: '注册护士监督指导，确保护理质量和服务标准',
    color: '#de4437',
    category: 'feature'
  },
]

// 核心价值观数据
const values = [
  {
    title: '富有同情心',
    description: '我们相信富有同情心的护理始于真诚的连接',
    icon: <SchoolIcon />,
  },
  {
    title: '尊严与尊重',
    description: '以尊严、尊重和真诚的奉献精神为每位客户服务',
    icon: <CheckIcon />,
  },
  {
    title: '专业护理',
    description: '提供专业的ADLs协助和个性化护理计划',
    icon: <StarIcon />,
  },
  {
    title: '可靠支持',
    description: '我们是陪伴者、倡导者，是您日常生活中值得信赖的支持',
    icon: <PeopleIcon />,
  },
]

// 专业团队数据
const teamMembers = [
  {
    name: 'Allcare 护理团队',
    position: '注册护士监督',
    description: '持有RN执照的专业护士，负责监督和指导护理质量',
    avatar: '👩‍⚕️',
  },
  {
    name: 'PCA培训专家',
    position: '个人护理助理培训师',
    description: '资深PCA培训师，专注于ADLs协助和安全护理培训',
    avatar: '👨‍🏫',
  },
  {
    name: 'CPR认证讲师',
    position: '急救培训专家',
    description: '持有CPR和急救认证的专业培训师',
    avatar: '👩‍⚕️',
  },
  {
    name: '客户服务团队',
    position: '护理协调员',
    description: '负责客户关系维护和护理计划协调',
    avatar: '👨‍💼',
  },
]

// 发展历程数据
const milestones = [
  {
    year: '成立',
    title: 'Allcare Health Care 成立',
    description: '在马里兰州成立，专注于提供高质量的居家护理服务',
  },
  {
    year: '认证',
    title: '专业认证获得',
    description: '获得马里兰州居家护理服务认证，成为官方认可的护理服务提供商',
  },
  {
    year: '扩展',
    title: '服务范围扩展',
    description: '扩大服务范围，为老年人、慢性疾病患者和残疾人士提供全面护理',
  },
  {
    year: '培训',
    title: '员工培训体系建立',
    description: '建立完善的PCA培训体系，确保所有护理人员持有CPR和急救认证',
  },
  {
    year: '质量',
    title: '质量保证体系',
    description: '建立注册护士监督体系，定期进行家访和护理质量评估',
  },
  {
    year: '现在',
    title: '持续服务',
    description: '继续为马里兰州社区提供优质的居家护理服务，帮助客户在家中安全舒适地生活',
  },
]

function Home() {
  const theme = useTheme()
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      })
    }
  }

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

      {/* Services and Features Section with Horizontal Scroll */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 600 }}
          >
            我们的护理服务与培训特色
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            专业的居家护理服务与全面的员工培训体系，为您提供高质量的护理体验
          </Typography>

          {/* Carousel Container */}
          <Box sx={{ position: 'relative', px: 6 }}>
            {/* Left Arrow */}
            <IconButton
              onClick={scrollLeft}
              sx={{
                position: 'absolute',
                left: -10,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'white',
                boxShadow: theme.shadows[4],
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-50%) scale(1.1)',
                  boxShadow: theme.shadows[8],
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onClick={scrollRight}
              sx={{
                position: 'absolute',
                right: -10,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'white',
                boxShadow: theme.shadows[4],
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  transform: 'translateY(-50%) scale(1.1)',
                  boxShadow: theme.shadows[8],
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>

            {/* Scrollable Cards Container */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                pb: 2,
                px: 2,
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {servicesAndFeatures.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 320,
                    maxWidth: 320,
                    textAlign: 'center',
                    p: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.03)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${item.color}20`,
                      borderColor: item.color,
                      '& .card-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .card-badge': {
                        transform: 'scale(1.05)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${item.color}05, transparent 50%)`,
                      pointerEvents: 'none',
                    }
                  }}
                >
                  <Box
                    className="card-badge"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: item.category === 'service' ? 'success.main' : 'info.main',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      boxShadow: theme.shadows[2],
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  >
                    {item.category === 'service' ? '护理服务' : '培训特色'}
                  </Box>
                  <Avatar
                    className="card-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      mt: 2,
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`,
                      color: item.color,
                      border: `2px solid ${item.color}20`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 8px 24px ${item.color}20`,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Navigation Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
            {Array.from({ length: Math.ceil(servicesAndFeatures.length / 3) }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: index === 0 ? 'primary.main' : 'grey.300',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    transform: 'scale(1.2)',
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* Core Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            我们的核心价值观
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            指导我们护理服务的核心原则
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                    }}
                  >
                    {value.icon}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            我们的专业团队
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            经验丰富的护理专业人员和培训师团队
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ fontSize: '4rem', mb: 2 }}>
                    {member.avatar}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            我们的发展历程
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Allcare Health Care 的成长足迹
          </Typography>
          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="filled" />
                  {index < milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

      </Container>


    </Box>
  )
}

export default Home
