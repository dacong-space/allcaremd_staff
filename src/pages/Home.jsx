import React, { useRef, useEffect } from 'react'
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
    color: '#f8a5c2', // 淡雅粉色马卡龙
  },
  {
    title: '尊严与尊重',
    description: '以尊严、尊重和真诚的奉献精神为每位客户服务',
    icon: <CheckIcon />,
    color: '#c8a2c8', // 淡雅紫色马卡龙
  },
  {
    title: '专业护理',
    description: '提供专业的ADLs协助和个性化护理计划',
    icon: <StarIcon />,
    color: '#a8d8ea', // 淡雅蓝色马卡龙
  },
  {
    title: '可靠支持',
    description: '我们是陪伴者、倡导者，是您日常生活中值得信赖的支持',
    icon: <PeopleIcon />,
    color: '#b8e6b8', // 淡雅绿色马卡龙
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
  const autoScrollRef = useRef(null)

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

  // 自动滚动功能
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const maxScroll = container.scrollWidth - container.clientWidth

          if (container.scrollLeft >= maxScroll) {
            // 滚动到最右边时，回到开始
            container.scrollTo({
              left: 0,
              behavior: 'smooth'
            })
          } else {
            // 继续向右滚动
            container.scrollBy({
              left: 350,
              behavior: 'smooth'
            })
          }
        }
      }, 3000) // 每3秒自动滚动
    }

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }

    // 开始自动滚动
    startAutoScroll()

    // 鼠标悬停时停止自动滚动
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('mouseenter', stopAutoScroll)
      container.addEventListener('mouseleave', startAutoScroll)
    }

    // 清理函数
    return () => {
      stopAutoScroll()
      if (container) {
        container.removeEventListener('mouseenter', stopAutoScroll)
        container.removeEventListener('mouseleave', startAutoScroll)
      }
    }
  }, [])

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

          {/* Carousel Container with Soft Fade Effects */}
          <Box sx={{ position: 'relative', px: 6 }}>
            {/* Left Soft Fade Overlay */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 100,
                background: 'linear-gradient(to right, #f8f9fa 0%, rgba(248,249,250,0.9) 30%, rgba(248,249,250,0.6) 60%, rgba(248,249,250,0.2) 80%, transparent 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Right Soft Fade Overlay */}
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: 100,
                background: 'linear-gradient(to left, #f8f9fa 0%, rgba(248,249,250,0.9) 30%, rgba(248,249,250,0.6) 60%, rgba(248,249,250,0.2) 80%, transparent 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Left Arrow with Soft Glass Effect */}
            <IconButton
              onClick={scrollLeft}
              sx={{
                position: 'absolute',
                left: 15,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                width: 52,
                height: 52,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(8px) saturate(180%)',
                WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1)',
                color: 'rgba(0,0,0,0.65)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                  transform: 'translateY(-50%) scale(1.08)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.15)',
                  color: 'rgba(0,0,0,0.8)',
                  '& .arrow-icon': {
                    transform: 'translateX(-1px)',
                  }
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(1.02)',
                },
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <ArrowBackIcon
                className="arrow-icon"
                sx={{
                  fontSize: 22,
                  transition: 'transform 0.25s ease-out'
                }}
              />
            </IconButton>

            {/* Right Arrow with Soft Glass Effect */}
            <IconButton
              onClick={scrollRight}
              sx={{
                position: 'absolute',
                right: 15,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                width: 52,
                height: 52,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(8px) saturate(180%)',
                WebkitBackdropFilter: 'blur(8px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1)',
                color: 'rgba(0,0,0,0.65)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                  transform: 'translateY(-50%) scale(1.08)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.15)',
                  color: 'rgba(0,0,0,0.8)',
                  '& .arrow-icon': {
                    transform: 'translateX(1px)',
                  }
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(1.02)',
                },
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <ArrowForwardIcon
                className="arrow-icon"
                sx={{
                  fontSize: 22,
                  transition: 'transform 0.25s ease-out'
                }}
              />
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
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    borderRadius: 4,
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    backdropFilter: 'blur(6px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(6px) saturate(120%)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 6px rgba(0,0,0,0.04)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 100%)',
                      backdropFilter: 'blur(8px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(140%)',
                      boxShadow: `0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06), 0 0 0 1px ${item.color}20`,
                      border: `1px solid ${item.color}30`,
                      '& .card-icon': {
                        transform: 'scale(1.08) rotate(3deg)',
                      },
                      '& .card-badge': {
                        transform: 'scale(1.03)',
                      },
                      '& .soft-glow': {
                        opacity: 0.6,
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${item.color}80, ${item.color}60)`,
                      borderRadius: '4px 4px 0 0',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at 50% 0%, ${item.color}06, transparent 60%)`,
                      pointerEvents: 'none',
                      borderRadius: 4,
                    }
                  }}
                >
                  {/* Soft Glow Effect */}
                  <Box
                    className="soft-glow"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      pointerEvents: 'none',
                      borderRadius: 4,
                    }}
                  />


                  <Avatar
                    className="card-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      mt: 2,
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                      backdropFilter: 'blur(4px) saturate(130%)',
                      WebkitBackdropFilter: 'blur(4px) saturate(130%)',
                      color: item.color,
                      border: `1px solid rgba(255, 255, 255, 0.4)`,
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      boxShadow: `0 6px 20px ${item.color}15, 0 2px 8px rgba(0,0,0,0.04)`,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle at 30% 30%, ${item.color}08, transparent 70%)`,
                        borderRadius: '50%',
                      }
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
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>

        {/* Core Values Section */}
        <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                mb: 2
              }}
            >
              我们的核心价值观
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}
            >
              指导我们护理服务的核心原则
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-out',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        '& .value-card': {
                          background: 'linear-gradient(145deg, #ffffff 0%, #f1f3f4 100%)',
                          boxShadow: `
                            0 16px 48px rgba(0,0,0,0.12),
                            0 8px 24px rgba(0,0,0,0.08),
                            inset 0 2px 0 rgba(255,255,255,0.95),
                            inset 0 -2px 0 rgba(0,0,0,0.03),
                            0 0 0 1px ${value.color}20
                          `,
                          border: `2px solid ${value.color}50`,
                          transition: 'all 0.2s ease-out',
                          '&::before': {
                            boxShadow: `0 4px 12px ${value.color}60`,
                          }
                        },
                        '& .value-icon': {
                          transform: 'scale(1.08) translateY(-2px)',
                          boxShadow: `
                            0 8px 24px ${value.color}25,
                            0 4px 12px rgba(0,0,0,0.08),
                            inset 0 2px 0 rgba(255,255,255,0.3)
                          `,
                          transition: 'all 0.2s ease-out',
                        },
                        '& .value-number': {
                          opacity: 0.7,
                          transform: 'scale(1.05)',
                          transition: 'all 0.2s ease-out',
                        },
                        '& .floating-elements': {
                          opacity: 0.6,
                          transform: 'scale(1.2)',
                          transition: 'all 0.2s ease-out',
                        }
                      }
                    }}
                  >
                    {/* Floating Background Elements */}
                    <Box
                      className="floating-elements"
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        width: 40,
                        height: 40,
                        background: `radial-gradient(circle, ${value.color}25, transparent 70%)`,
                        borderRadius: '50%',
                        opacity: 0,
                        transition: 'opacity 0.2s ease-out',
                        zIndex: 0,
                      }}
                    />

                    <Card
                      className="value-card"
                      sx={{
                        textAlign: 'center',
                        p: 4,
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                        border: `2px solid ${value.color}30`,
                        borderRadius: 3,
                        boxShadow: `
                          0 8px 32px rgba(0,0,0,0.08),
                          0 4px 16px rgba(0,0,0,0.04),
                          inset 0 1px 0 rgba(255,255,255,0.9),
                          inset 0 -1px 0 rgba(0,0,0,0.02)
                        `,
                        transition: 'all 0.2s ease-out',
                        transform: 'translateZ(0)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background: `linear-gradient(90deg, ${value.color} 0%, ${value.color}80 100%)`,
                          borderRadius: '3px 3px 0 0',
                          boxShadow: `0 2px 8px ${value.color}40`,
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${value.color}03 0%, transparent 50%, ${value.color}05 100%)`,
                          borderRadius: 3,
                          pointerEvents: 'none',
                        }
                      }}
                    >
                      {/* Value Number */}
                      <Typography
                        className="value-number"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontSize: '2.5rem',
                          fontWeight: 300,
                          color: `${value.color}30`,
                          opacity: 0,
                          transform: 'scale(0.9)',
                          transition: 'all 0.2s ease-out',
                          zIndex: 0,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Typography>

                      <Avatar
                        className="value-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 3,
                          mt: 1,
                          background: `linear-gradient(145deg, ${value.color}20 0%, ${value.color}10 50%, ${value.color}15 100%)`,
                          border: `2px solid ${value.color}30`,
                          borderRadius: '50%',
                          boxShadow: `
                            0 6px 20px ${value.color}15,
                            0 2px 8px rgba(0,0,0,0.06),
                            inset 0 2px 0 rgba(255,255,255,0.4),
                            inset 0 -2px 0 rgba(0,0,0,0.05)
                          `,
                          transition: 'all 0.2s ease-out',
                          position: 'relative',
                          zIndex: 1,
                          color: value.color,
                          transform: 'translateZ(0)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -3,
                            left: -3,
                            right: -3,
                            bottom: -3,
                            background: `conic-gradient(from 0deg, ${value.color}20, transparent 50%, ${value.color}15, transparent)`,
                            borderRadius: '50%',
                            zIndex: -1,
                            opacity: 0.6,
                          }
                        }}
                      >
                        {value.icon}
                      </Avatar>

                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                          mb: 2,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {value.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Card>
                  </Box>
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
