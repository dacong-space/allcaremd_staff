import React, { useRef, useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Avatar,
  Chip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails
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
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'


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
    src: "/images/20250521_2115_Elderly Joy in Park_simple_compose_01jvtrwkyce12r2h5px5v4fs7r.png",
    alt: "Allcare Health Care 专业医疗团队",
    title: "多元化医疗团队"
  },
  {
    src: "/images/20250521_2114_Joyful Elderly Gathering_simple_compose_01jvtrv0n3fj19ech0z9097j60.png",
    alt: "Allcare Health Care 客户快乐生活",
    title: "快乐的老年人聚会"
  },
  {
    src: "/images/20250521_2107_Diverse Healthcare Team_simple_compose_01jvtrew1ee0zs0ad3k3csjh2g.png",
    alt: "Allcare Health Care 户外护理服务",
    title: "老年人在公园的快乐时光"
  }
];

// 统计数据
const statistics = [
  {
    number: '200+',
    label: 'Serving Families',
    description: 'Providing care and compassion to over 200 families and counting',
    icon: <SchoolIcon />,
    color: '#5B9BD5', // 匹配图片中的蓝色
  },
  {
    number: '100%',
    label: 'Customer Satisfaction',
    description: 'Our clients give us a perfect score for care and service',
    icon: <SecurityIcon />,
    color: '#5B9BD5', // 匹配图片中的蓝色
  },
  {
    number: '24/7',
    label: 'Service Availability',
    description: 'Always available when you need us most \u00A0\u00A0\u00A0\u00A0',
    icon: <SupportIcon />,
    color: '#5B9BD5', // 匹配图片中的蓝色
  },
  {
    number: '25+',
    label: 'Professionally Team',
    description: 'Licensed, trained, and trusted to deliver quality care',
    icon: <FavoriteIcon />,
    color: '#5B9BD5', // 匹配图片中的蓝色
  },
]

// 合并护理服务和培训平台特色 - 统一使用匹配的蓝色
const servicesAndFeatures = [
  {
    icon: <HomeIcon sx={{ fontSize: 48 }} />,
    title: '日常生活协助 (ADLs)',
    description: '协助洗澡、穿衣、进食、移动等日常活动',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'service'
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 48 }} />,
    title: '陪伴与情感支持',
    description: '提供友好的陪伴和心理支持服务',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'service'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: '安全监督',
    description: '确保客户在家中的安全和健康',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'service'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '专业护理监督',
    description: '注册护士定期监督和评估护理质量',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'service'
  },
  {
    icon: <ManualIcon sx={{ fontSize: 48 }} />,
    title: '客户信息手册',
    description: 'Allcare Health Care 完整的客户信息手册，包含权利法案、隐私政策等',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'feature'
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'PCA专业培训',
    description: '个人护理助理培训课程，掌握ADLs协助、安全护理等专业技能',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'feature'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: 'CPR & 急救培训',
    description: '心肺复苏术和急救培训，确保紧急情况下的专业应对能力',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'feature'
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    title: '护理监督支持',
    description: '注册护士监督指导，确保护理质量和服务标准',
    color: '#5B9BD5', // 匹配图片中的蓝色
    category: 'feature'
  },
]
// FAQ 常见问题数据
const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide personalized Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) support based on each client's needs. This includes companionship, daily assistance, and routine support to help ensure safety, independence, and comfort at home."
  },
  {
    question: "How do you ensure the quality of care?",
    answer: "We are committed to providing consistent, high-quality care. Our nurses conduct routine home visits, oversee caregiver performance, and ensure each care plan is followed with compassion and precision."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us to determine eligibility. If you’re unsure whether you qualify, we can guide you through the application process step-by-step."
  },
  {
    question: "What if my loved one's condition changes?",
    answer: "Our clinical team will conduct a home reassessment and, if necessary, update the care plan to reflect new needs. Caregivers receive additional training based on the revised plan to ensure continuity of care."
  },
  {
    question: "What qualifications do your caregivers have?",
    answer: "All our caregivers hold valid CPR and First Aid certifications. In addition, they receive annual in-service training, and their performance is regularly supervised by a registered nurse during home visits."
  },
  {
    question: "How can I contact you for support or questions?",
    answer: "You can reach us by phone or email. Our team is here to assist you with any questions or concerns you may have."
  }
]







function Home() {
  const scrollContainerRef = useRef(null)
  const autoScrollRef = useRef(null)

  // 图片轮播状态
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageHovered, setIsImageHovered] = useState(false)

  // FAQ展开状态
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  // 图片切换函数
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  }

  // FAQ展开处理函数
  const handleFAQChange = (panel) => (_, isExpanded) => {
    setExpandedFAQ(isExpanded ? panel : null)
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
          pt: { xs: 2, md: 4 },
          pb: { xs: 6, md: 8 },
          bgcolor: 'white',
          color: 'text.primary',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Grid container spacing={6} alignItems="center" sx={{ minHeight: '70vh' }}>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  py: { xs: 2, md: 4 }
                }}
              >
                <Chip
                  label="Allcare Health Care, LLC"
                  sx={{
                    bgcolor: '#5B9BD5', // 匹配图片中的蓝色
                    color: 'white',
                    mb: 4,
                    fontSize: '0.875rem',
                    px: 3,
                    py: 0.8,
                    fontWeight: 500,
                    alignSelf: 'flex-start'
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.8rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: 'text.primary',
                    mb: 4,
                    letterSpacing: '-0.02em'
                  }}
                >
                  All People.<br />
                  All Heart.<br />
                  <Box component="span" sx={{
                    color: '#5B9BD5',
                    background: 'linear-gradient(135deg, #5B9BD5 0%, #7BB3E0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Allcare.
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 0,
                    color: 'text.secondary',
                    fontSize: { xs: '1.2rem', md: '1.35rem' },
                    lineHeight: 1.7,
                    fontWeight: 400,
                    maxWidth: '95%'
                  }}
                >
                  At Allcare Health Care, we believe that compassionate care begins with genuine connection.
                  We proudly serve seniors, individuals with chronic illnesses, and people with
                  disabilities—including children—with dignity, respect, and heartfelt dedication.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  height: { xs: 450, md: 550 },
                  px: { xs: 2, md: 3 },
                }}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                {/* 左箭头 */}
                <IconButton
                  onClick={prevImage}
                  sx={{
                    position: 'absolute',
                    left: { xs: 12, md: 16 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                    width: 32,
                    height: 32,
                    bgcolor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#5B9BD5',
                    opacity: 0.4,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      opacity: 1,
                      transform: 'translateY(-50%) scale(1.1)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 16 }} />
                </IconButton>

                {/* 右箭头 */}
                <IconButton
                  onClick={nextImage}
                  sx={{
                    position: 'absolute',
                    right: { xs: 12, md: 16 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 3,
                    width: 32,
                    height: 32,
                    bgcolor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#5B9BD5',
                    opacity: 0.4,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      opacity: 1,
                      transform: 'translateY(-50%) scale(1.1)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </IconButton>

                {/* 图片容器 */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 6,
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                    mx: { xs: 2, md: 3 },
                    border: '1px solid rgba(255, 255, 255, 0.1)',
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
                      bottom: 16,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: 1,
                      zIndex: 3,
                      background: 'rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                      opacity: 0.6,
                      '&:hover': {
                        opacity: 1,
                      },
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    {HERO_IMAGES.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          width: index === currentImageIndex ? 20 : 6,
                          height: 6,
                          borderRadius: 3,
                          background: index === currentImageIndex
                            ? 'rgba(255, 255, 255, 0.9)'
                            : 'rgba(255, 255, 255, 0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.4s ease',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.8)',
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

      {/* Who we really are & why choose us Section */}
      <Box sx={{
        bgcolor: '#f5f5f5',
        py: 8
      }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6.5}>
            <Box
              sx={{
                borderRadius: 6,
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                height: { xs: 450, md: 550 },
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <img
                src="/images/20250521_2107_Diverse Healthcare Team_simple_compose_01jvtrew1ee0zs0ad3k3csjh2g.png"
                alt="Gentle Caregiving Moment"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 4,
                color: 'text.primary',
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.2
              }}
            >
              Who we really are &<br />
              why choose us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: '1.15rem',
                maxWidth: '90%'
              }}
            >
              At Allcare Health Care, we are more than caregivers.
              We are companions, advocates, and trusted support
              for your daily life. Our mission is to bring reliable,
              respectful, and heart-centered care into every home
              we serve.
            </Typography>

            {/* Checkbox List */}
            <Box sx={{ mb: 4 }}>
              {[
                "We prioritize your loved one's well-being with our expert support for Activities of Daily Living (ADLs).",
                "Our skilled nursing team ensures that care is delivered with the highest standards and attention to detail.",
                "We offer ongoing support and check-ins to ensure that all needs are met effectively.",
                "Your satisfaction is our priority, and we are committed to delivering outstanding service with a focus on quality and reliability."
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 3,
                    pl: 0
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      border: '2px solid #5B9BD5',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      mt: 0.2,
                      bgcolor: '#5B9BD5',
                      flexShrink: 0
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 10,
                        border: '2px solid white',
                        borderTop: 'none',
                        borderLeft: 'none',
                        transform: 'rotate(45deg)',
                        mt: -0.5
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.secondary',
                      fontSize: '1.05rem',
                      fontWeight: 400
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>

          </Grid>
        </Grid>
        </Container>
      </Box>

      {/* Steps to Start Your Care Journey Section */}
      <Box sx={{
        bgcolor: '#ffffff',
        py: 8
      }}>

        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              Steps to Start Your Care Journey with Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Our professional team will guide you through every step to ensure you receive the care that best fits your needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: '01',
                title: 'Understanding Your Needs',
                description: 'Contact us to explore your eligibility and care options. Whether you need help applying for services or identifying the right level of Activities of Daily Living support, our team is here to guide you every step of the way.'
              },
              {
                step: '02',
                title: 'Personalized Care Planning',
                description: 'Once everything is in place, we will match you with a caregiver and arrange an in-home visit. Our professional team will design a care plan and train the caregiver to meet your unique needs and goals.'
              },
              {
                step: '03',
                title: 'Ongoing Support & Quality Assurance',
                description: 'We stay by your side throughout your care journey. With regular check-ins and home visits, we ensure that your care remains consistent, high-quality, and responsive to your changing needs.'
              }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    willChange: 'transform',
                    transition: 'transform 0.2s ease-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {/* Step number - Square Design */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      background: '#5B9BD5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                      }}
                    >
                      {item.step}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 3,
                        fontSize: '1.25rem',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>


        </Container>
      </Box>

      {/* Services and Features Section with Horizontal Scroll - COMMENTED OUT */}
      {/*
      <Box sx={{ bgcolor: '#ffffff', py: 8 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
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
          {/*
          <Box sx={{ position: 'relative', px: 6, py: 2 }}>
            {/* Left Soft Fade Overlay */}
            {/*
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
            {/*
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
            {/*
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
                  color: 'rgba(0,0,0,0.8)',
                },
                transition: 'background 0.2s ease-out, color 0.2s ease-out',
              }}
            >
              <ArrowBackIcon
                sx={{
                  fontSize: 22,
                }}
              />
            </IconButton>

            {/* Right Arrow with Soft Glass Effect */}
            {/*
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
                  color: 'rgba(0,0,0,0.8)',
                },
                transition: 'background 0.2s ease-out, color 0.2s ease-out',
              }}
            >
              <ArrowForwardIcon
                sx={{
                  fontSize: 22,
                }}
              />
            </IconButton>

            {/* Scrollable Cards Container */}
            {/*
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
                    background: '#ffffff',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    willChange: 'transform',
                    transition: 'transform 0.15s ease-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
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
      */}

      {/* Statistics Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Our Commitment to Quality Care
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'text.secondary', textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            Showcasing Our Professionalism and Quality Through Measurable Results
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
                    willChange: 'transform',
                    transition: 'transform 0.15s ease-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
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
      <Box sx={{ bgcolor: '#ffffff', py: 8 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
              textAlign: 'center',
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
              textAlign: 'center',
              mb: 6,
            }}
          >
            We provide compassionate in-home support to help clients maintain safety, comfort, and independence in their daily lives
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
                  willChange: 'transform',
                  transition: 'transform 0.15s ease-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#5B9BD5',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(91, 155, 213, 0.4)',
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
                      Care Plans Designed Just for You
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 2 }}
                    >
                      We create customized care plans based on each client’s unique needs, with periodic updates to ensure the highest level of service quality and client safety.
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
                              bgcolor: '#5B9BD5',
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
                  willChange: 'transform',
                  transition: 'transform 0.15s ease-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#5B9BD5',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(91, 155, 213, 0.4)',
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
                      Expert Supervision and Continuous Training
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
                              bgcolor: '#5B9BD5',
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
                  willChange: 'transform',
                  transition: 'transform 0.15s ease-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#5B9BD5',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(91, 155, 213, 0.4)',
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
                      Your Safety, Our Priority                    </Typography>
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
                              bgcolor: '#5B9BD5',
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
                  willChange: 'transform',
                  transition: 'transform 0.15s ease-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: '#5B9BD5',
                      color: 'white',
                      mr: 3,
                      boxShadow: '0 4px 16px rgba(91, 155, 213, 0.4)',
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
                      Committed to Constant Improvement                    </Typography>
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
                              bgcolor: '#5B9BD5',
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



      {/* FAQ Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Some common questions
          </Typography>
          {/* <Typography
            variant="h4"
            component="h3"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            were often asked
          </Typography> */}

          <Grid container spacing={3}>
            {faqData.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Accordion
                  expanded={expandedFAQ === `panel${index}`}
                  onChange={handleFAQChange(`panel${index}`)}
                  sx={{
                    background: '#ffffff',
                    border: '1px solid rgba(226, 232, 240, 0.6)',
                    borderRadius: 3,
                    boxShadow: 'none',
                    mb: 2,
                    overflow: 'hidden',
                    willChange: 'transform, box-shadow, border-color',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                      background: '#ffffff',
                      border: '1px solid rgba(91, 155, 213, 0.3)',
                      boxShadow: '0 4px 20px rgba(91, 155, 213, 0.08)',
                      transform: 'translateY(-2px) translateZ(0)',
                    },
                    '&:hover': {
                      border: '1px solid rgba(91, 155, 213, 0.4)',
                      boxShadow: '0 2px 12px rgba(91, 155, 213, 0.06)',
                    },
                    transition: 'all 0.2s ease-out',
                    '& .MuiCollapse-root': {
                      transition: 'height 0.2s ease-out !important',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          fontSize: 28,
                          transition: 'transform 0.15s ease-out, color 0.15s ease-out',
                          transform: expandedFAQ === `panel${index}` ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: expandedFAQ === `panel${index}` ? '#4A90C2' : '#5B9BD5',
                        }}
                      />
                    }
                    sx={{
                      px: 3,
                      py: 2,
                      minHeight: 64,
                      willChange: 'background-color',
                      '& .MuiAccordionSummary-content': {
                        margin: '12px 0',
                        transition: 'margin 0.2s ease-out',
                      },
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'none !important', // 禁用默认的旋转
                      },
                      '&:hover': {
                        bgcolor: 'rgba(91, 155, 213, 0.06)',
                      },
                      '&.Mui-expanded': {
                        bgcolor: 'rgba(91, 155, 213, 0.04)',
                        borderBottom: '1px solid rgba(91, 155, 213, 0.1)',
                      },
                      transition: 'background-color 0.2s ease-out',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: '1.1rem',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                      pt: 2,
                      bgcolor: 'rgba(91, 155, 213, 0.02)',
                      borderTop: '1px solid rgba(91, 155, 213, 0.08)',
                      opacity: expandedFAQ === `panel${index}` ? 1 : 0,
                      transition: 'opacity 0.15s ease-out',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 8 }}>

      </Container>


    </Box>
  )
}

export default Home

