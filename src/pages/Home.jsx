import React, { useRef, useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Button,
  Avatar,
  Chip,
  IconButton
} from '@mui/material'
import LazyImage from '../components/LazyImage'
import SEOHead from '../components/SEOHead'

import {
  School as SchoolIcon,
  MenuBook as ManualIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

// 图片配置 - 方便快速更换
const HERO_IMAGE = {
  // 使用您上传的本地图片
  src: "/images/20250521_2054_Gentle Caregiving Moment_simple_compose_01jvtqn1m5ev0aph6cw6p15pf0.png",
  alt: "Allcare Health Care 温柔护理服务展示",
  fallback: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
};

// 图片轮播数组 - 包含所有可用图片
const HERO_IMAGES = [
  {
    src: "/images/20250521_2054_Gentle Caregiving Moment_simple_compose_01jvtqn1m5ev0aph6cw6p15pf0.png",
    alt: "Allcare Health Care 温柔护理服务展示",
    title: "温柔护理时刻"
  },
  {
    src: "/images/20250521_2107_Diverse Healthcare Team_simple_compose_01jvtrew1ee0zs0ad3k3csjh2g.png",
    alt: "Allcare Health Care 专业医疗团队",
    title: "多元化医疗团队"
  },
  {
    src: "/images/20250521_2114_Joyful Elderly Gathering_simple_compose_01jvtrv0n3fj19ech0z9097j60.png",
    alt: "Allcare Health Care 客户快乐生活",
    title: "快乐的老年人聚会"
  },
  {
    src: "/images/20250521_2115_Elderly Joy in Park_simple_compose_01jvtrwkyce12r2h5px5v4fs7r.png",
    alt: "Allcare Health Care 户外护理服务",
    title: "老年人在公园的快乐时光"
  }
];

// 统计数据
const statistics = [
  {
    number: '200+',
    label: '服务家庭',
    description: '累计为超过500个家庭提供护理服务',
    icon: <SchoolIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '100%',
    label: '客户满意度',
    description: '客户对我们服务的满意度评分',
    icon: <SecurityIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '24/7',
    label: '全天候服务',
    description: '提供全天候紧急护理支持',
    icon: <SupportIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '25+',
    label: '专业认证',
    description: '团队持有的专业护理认证数量',
    icon: <FavoriteIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
]

// 合并护理服务和培训平台特色 - 统一使用天空蓝色
const servicesAndFeatures = [
  {
    icon: <HomeIcon sx={{ fontSize: 48 }} />,
    title: '日常生活协助 (ADLs)',
    description: '协助洗澡、穿衣、进食、移动等日常活动',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'service'
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 48 }} />,
    title: '陪伴与情感支持',
    description: '提供友好的陪伴和心理支持服务',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'service'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: '安全监督',
    description: '确保客户在家中的安全和健康',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'service'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '专业护理监督',
    description: '注册护士定期监督和评估护理质量',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'service'
  },
  {
    icon: <ManualIcon sx={{ fontSize: 48 }} />,
    title: '客户信息手册',
    description: 'Allcare Health Care 完整的客户信息手册，包含权利法案、隐私政策等',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'feature'
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'PCA专业培训',
    description: '个人护理助理培训课程，掌握ADLs协助、安全护理等专业技能',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'feature'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'CPR & 急救培训',
    description: '心肺复苏术和急救培训，确保紧急情况下的专业应对能力',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'feature'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '护理监督支持',
    description: '注册护士监督指导，确保护理质量和服务标准',
    color: '#87ceeb', // 更蓝的天空蓝色
    category: 'feature'
  },
]







function Home() {
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)
  const autoScrollRef = useRef(null)

  // 图片轮播状态
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageHovered, setIsImageHovered] = useState(false)

  // 图片切换函数
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  }

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

  // 图片自动轮播功能
  useEffect(() => {
    if (isImageHovered) return // 悬停时暂停自动轮播

    const autoImageScroll = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000) // 每5秒自动切换，给用户更多时间欣赏

    return () => clearInterval(autoImageScroll)
  }, [isImageHovered])

  // 服务卡片自动滚动功能
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
    <Box sx={{ bgcolor: '#fafafa' }}>
      <SEOHead
        title="首页"
        description="Allcare Health Care 员工培训平台 - 为马里兰州居家护理服务提供专业的PCA培训、CPR认证和客户手册。All People. All Heart. Allcare."
        keywords={['首页', '员工培训', '护理服务', '培训平台']}
      />
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 1, md: 2 }, // 大幅减少上边距，让整个网页更靠近导航栏
          pb: { xs: 4, md: 6 }, // 减少下边距，缩小与About Section的间距
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
                  bgcolor: '#87ceeb', // 更蓝的天空蓝色
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
                All People.<br />
                All Heart.<br />
                <Box component="span" sx={{ color: '#87ceeb' }}>
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
                Allcare 将使您的培训体验现代化和专业化，同时为您节省宝贵的时间。我们将为您提供最先进的护理培训，确保您在护理领域的专业发展。
              </Typography>

            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  height: { xs: 400, md: 500 }, // 增大尺寸
                  px: { xs: 4, md: 5 }, // 进一步减少左右间距，让箭头更靠近图片
                }}
              >
                {/* 左箭头 - 外部 */}
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    left: { xs: -6, md: -8 }, // 更加靠近图片边界
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                    width: 32, // 进一步缩小尺寸
                    height: 32,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    color: '#87ceeb', // 更蓝的天空蓝色
                    opacity: 1, // 一直显示
                    transition: 'all 0.2s ease-out',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 1)',
                      color: '#87ceeb', // 更蓝的天空蓝色
                    },
                    '&:active': {
                      transform: 'translateY(-50%) scale(0.95)',
                    }
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 16 }} />
                </IconButton>

                {/* 右箭头 - 外部 */}
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    right: { xs: -6, md: -8 }, // 更加靠近图片边界
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                    width: 32, // 进一步缩小尺寸
                    height: 32,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    color: '#87ceeb', // 更蓝的天空蓝色
                    opacity: 1, // 一直显示
                    transition: 'all 0.2s ease-out',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 1)',
                      color: '#87ceeb', // 更蓝的天空蓝色
                    },
                    '&:active': {
                      transform: 'translateY(-50%) scale(0.95)',
                    }
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </IconButton>

                {/* 图片容器 */}
                <Box
                  onMouseEnter={() => setIsImageHovered(true)}
                  onMouseLeave={() => setIsImageHovered(false)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* 图片容器 - 支持淡入淡出效果 */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                    }}
                  >
                    {HERO_IMAGES.map((image, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          opacity: index === currentImageIndex ? 1 : 0,
                          transition: 'opacity 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
                          zIndex: index === currentImageIndex ? 1 : 0,
                        }}
                      >
                        <LazyImage
                          src={image.src}
                          alt={image.alt}
                          fallback={HERO_IMAGE.fallback}
                          width="100%"
                          height="100%"
                          objectFit="cover"
                          borderRadius={0}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* 图片标题覆盖层 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                      color: 'white',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      '.image-container:hover &': {
                        opacity: 1,
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {HERO_IMAGES[currentImageIndex].title}
                    </Typography>
                  </Box>

                  {/* 图片指示器 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1.5,
                      zIndex: 3,
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 3,
                      px: 2,
                      py: 1,
                    }}
                  >
                    {HERO_IMAGES.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          width: index === currentImageIndex ? 24 : 8,
                          height: 8,
                          borderRadius: 4,
                          background: index === currentImageIndex
                            ? 'rgba(255, 255, 255, 0.95)'
                            : 'rgba(255, 255, 255, 0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.8)',
                            transform: 'scale(1.1)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Allcare Section */}
      <Box sx={{
        bgcolor: '#f5f5f5',
        py: 8
      }}>
        <Container maxWidth="lg">
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
            <Typography variant="h6" sx={{ color: '#87ceeb' }} gutterBottom>
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
                background: 'linear-gradient(135deg, #87ceeb 0%, #87ceeb 100%)', // 更蓝的天空蓝色
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
      </Box>

      {/* Statistics Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 600 }}
          >
            我们的服务成果
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            用数据展现我们的专业实力和服务质量
          </Typography>

          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    height: '100%', // 确保所有卡片高度一致
                    minHeight: 200, // 设置最小高度
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: stat.color,
                      color: 'white',
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: stat.color,
                      mb: 1,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.875rem', lineHeight: 1.4 }}
                  >
                    {stat.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Features Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 600 }}
          >
            我们的服务特色
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            专业、全面、个性化的护理服务体系
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(135, 206, 235, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#87ceeb',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(135, 206, 235, 0.4)',
                    }}
                  >
                    <SchoolIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      个性化护理计划
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 2 }}
                    >
                      根据每位客户的具体需求制定专属护理方案
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 9 }}>
                  <Grid container spacing={1}>
                    {['全面健康评估', '定制护理目标', '定期计划调整', '家属参与决策'].map((detail, detailIndex) => (
                      <Grid item xs={6} key={detailIndex}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#87ceeb',
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.875rem' }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(135, 206, 235, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#87ceeb',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(135, 206, 235, 0.4)',
                    }}
                  >
                    <SecurityIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      专业团队监督
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 2 }}
                    >
                      注册护士全程监督，确保护理质量
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 9 }}>
                  <Grid container spacing={1}>
                    {['RN护士监督', '定期质量评估', '持续培训更新', '24小时支持'].map((detail, detailIndex) => (
                      <Grid item xs={6} key={detailIndex}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#87ceeb',
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.875rem' }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(135, 206, 235, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#87ceeb',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(135, 206, 235, 0.4)',
                    }}
                  >
                    <SupportIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      全面安全保障
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 2 }}
                    >
                      完善的安全协议和应急响应机制
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 9 }}>
                  <Grid container spacing={1}>
                    {['安全评估', '应急预案', '医疗协调', '家属沟通'].map((detail, detailIndex) => (
                      <Grid item xs={6} key={detailIndex}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#87ceeb',
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.875rem' }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(135, 206, 235, 0.15)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#87ceeb',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(135, 206, 235, 0.4)',
                    }}
                  >
                    <FavoriteIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      持续质量改进
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 2 }}
                    >
                      不断优化服务流程，提升护理标准
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ pl: 9 }}>
                  <Grid container spacing={1}>
                    {['服务反馈', '流程优化', '技能提升', '创新实践'].map((detail, detailIndex) => (
                      <Grid item xs={6} key={detailIndex}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#87ceeb',
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.875rem' }}
                          >
                            {detail}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services and Features Section with Horizontal Scroll */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
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
          <Box sx={{ position: 'relative', px: 6, py: 2 }}>
            {/* Left Soft Fade Overlay */}
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 16,
                bottom: 16,
                width: 100,
                background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.2) 80%, transparent 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Right Soft Fade Overlay */}
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: 16,
                bottom: 16,
                width: 100,
                background: 'linear-gradient(to left, white 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.2) 80%, transparent 100%)',
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
                  transform: 'translateY(-50%) scale(1.05)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06)',
                  color: 'rgba(0,0,0,0.8)',
                  '& .arrow-icon': {
                    transform: 'translateX(-1px)',
                  }
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(1.02)',
                },
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <ArrowBackIcon
                className="arrow-icon"
                sx={{
                  fontSize: 22,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
                  transform: 'translateY(-50%) scale(1.05)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06)',
                  color: 'rgba(0,0,0,0.8)',
                  '& .arrow-icon': {
                    transform: 'translateX(1px)',
                  }
                },
                '&:active': {
                  transform: 'translateY(-50%) scale(1.02)',
                },
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <ArrowForwardIcon
                className="arrow-icon"
                sx={{
                  fontSize: 22,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
                py: 1,
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
                    background: 'rgba(248, 250, 252, 0.8)',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: 'rgba(248, 250, 252, 0.95)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: item.color,
                      color: 'white',
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '0.875rem', lineHeight: 1.4 }}
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







      </Container>


    </Box>
  )
}

export default Home
