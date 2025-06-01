import React, { useState, useRef } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Avatar,
  Chip,
  Divider,
  Paper,
  IconButton,
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
  Business as BusinessIcon,
  Star as StarIcon,
  CheckCircle as CheckIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  People as PeopleIcon,
  Favorite as HeartIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@mui/icons-material'





// 团队成员
const teamMembers = [
  {
    name: 'Ray Gao',
    position: 'CEO',
    description: 'Founder and CEO with expertise in management, software, and system architecture.',
    avatar: '👨‍💻',
    credentials: ['CS', 'Web', 'App'],
    experience: '10 years',
    specialties: ['Management', 'Web Development', 'Software Engineering'],
  },
  {
    name: 'Erin Xie',
    position: 'Supervising Nurse',
    description: '10 years of clinical nursing experience, focused on quality assurance in home care.',
    avatar: '👩‍⚕️',
    credentials: ['RN', 'BSN', 'First Aid', 'CPR'],
    experience: '15 years',
    specialties: ['Clinical Care', 'Quality Management', 'Team Training'],
  },
  {
    name: 'Michael Chen',
    position: 'RN',
    description: 'Senior training expert responsible for caregiver development and certification.',
    avatar: '👨‍🏫',
    credentials: ['CNA', 'CPR', 'First Aid'],
    experience: '12 years',
    specialties: ['Caregiver Training', 'ADL Assistance', 'Safety Supervision'],
  },
  {
    name: 'David Kim',
    position: 'HR Manager',
    description: 'Oversees service quality monitoring and continuous improvement initiatives.',
    avatar: '👨‍💻',
    credentials: ['QA', 'Six Sigma'],
    experience: '8 years',
    specialties: ['Quality Control', 'Process Optimization', 'Data Analysis'],
  },
  // 超过4个就会变成滑动卡片
  // {
  //   name: 'Rui Gao',
  //   position: 'CEO',
  //   description: '公司创始人兼首席执行官，致力于提供高质量的护理服务',
  //   avatar: '👨‍💼',
  //   credentials: ['CS', 'Web', 'App'],
  //   experience: '10年',
  //   specialties: ['管理', '网站开发', '软件开发'],
  // },
]



// 公司信息
const companyInfo = {
  founded: '2018',
  location: 'Maryland',
  employees: '50+',
  certifications: ['State Licensed', 'Medicare Certified', 'Medicaid Certified'],
  serviceAreas: ['Baltimore', 'Annapolis', 'Columbia', 'Silver Spring'],
  contact: {
    phone: '(240) 668-4666',
    email: 'allcaremd@outlook.com',
    address: 'Harvest Glen Way, Germanton, MD 20874',
  }
}



// 核心价值观数据
const values = [
  {
    title: 'Compassion',
    description: 'We believe compassionate care begins with genuine connection—listening attentively and building trust to deliver warm, personalized support.',
    icon: <HeartIcon />,
    color: '#5B9BD5', // 匹配首页的蓝色
    // details: 'We listen to each client’s needs and build trust through empathy, delivering warm and attentive support.',
  },
  {
    title: 'Respect & Dignity',
    description: 'We honor each client’s privacy, choices, and background with respectful, person-centered care grounded in integrity and understanding.',
    icon: <CheckIcon />,
    color: '#5B9BD5', // 匹配首页的蓝色
    // details: '尊重客户的文化背景、个人偏好和生活方式选择',
  },
  {
    title: 'Professional Care',
    description: 'We provide expert ADLs support and individualized care plans, backed by ongoing training and certified best practices to ensure quality.',
    icon: <StarIcon />,
    color: '#5B9BD5', // 匹配首页的蓝色
    // details: '持续的专业培训和认证，运用循证护理实践',
  },
  {
    title: 'Dependable Support',
    description: 'As trusted companions, we build lasting care relationships and offer consistent, reliable support in clients’ everyday lives.',
    icon: <PeopleIcon />,
    color: '#5B9BD5', // 匹配首页的蓝色
    // details: '建立长期的护理关系，提供持续稳定的支持服务',
  },
]

// 发展历程数据
const milestones = [
  {
    year: 'Established',
    title: 'Allcare Health Care Founded',
    description: 'Founded in Maryland, dedicated to delivering high-quality in-home care services.',
  },
  {
    year: 'Certified',
    title: 'Professional Accreditation Achieved',
    description: 'Received Maryland Residential Service Agency certification, becoming a state-recognized care provider.',
  },
  {
    year: 'Expanded',
    title: 'Service Area Growth',
    description: 'Expanded services to support seniors, individuals with chronic conditions, and people with disabilities.',
  },
  {
    year: 'Training',
    title: 'Staff Training System Established',
    description: 'Developed a complete PCA training system to ensure all caregivers are CPR- and First Aid-certified.',
  },
  {
    year: 'Quality',
    title: 'Quality Assurance System Launched',
    description: 'Established RN supervision procedures with scheduled home visits and care quality assessments.',
  },
  {
    year: 'Today',
    title: 'Continuing Service',
    description: 'Continuing to provide exceptional in-home care across Maryland communities, helping clients live safely and comfortably.',
  },
]

// 服务区域数据
const serviceAreas = [
  {
    name: 'Montgomery County',
    description: 'Montgomery County',
    cities: ['Rockville', 'Bethesda', 'Silver Spring', 'Gaithersburg', 'Germantown'],
    color: '#5B9BD5',
  },
  {
    name: 'Prince George\'s County',
    description: 'George\'s County',
    cities: ['College Park', 'Bowie', 'Laurel', 'Greenbelt', 'Hyattsville'],
    color: '#98d8c8',
  },
  {
    name: 'Frederick County',
    description: 'Frederick County',
    cities: ['Frederick', 'Urbana', 'Middletown', 'Brunswick', 'Walkersville'],
    color: '#f7dc6f',
  },
  {
    name: 'Washington County',
    description: 'Washington County',
    cities: ['Hagerstown', 'Williamsport', 'Boonsboro', 'Smithsburg', 'Hancock'],
    color: '#bb8fce',
  },
  {
    name: 'Carroll County',
    description: 'Carroll County',
    cities: ['Westminster', 'Eldersburg', 'Sykesville', 'Mount Airy', 'Taneytown'],
    color: '#85c1e9',
  },
  {
    name: 'Howard County',
    description: 'Howard County',
    cities: ['Columbia', 'Ellicott City', 'Clarksville', 'Fulton', 'Highland'],
    color: '#f8c471',
  },
]



function About() {
  const [teamScrollPosition, setTeamScrollPosition] = useState(0)
  const teamScrollRef = useRef(null)

  // 团队成员滑动功能
  const handleTeamScroll = (direction) => {
    if (teamScrollRef.current) {
      const containerWidth = teamScrollRef.current.offsetWidth
      const cardWidth = containerWidth / 4 // 每张卡片占容器宽度的1/4
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      const newPosition = teamScrollPosition + scrollAmount
      const maxScroll = (teamMembers.length - 4) * cardWidth // 最多显示4个卡片

      const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll))
      setTeamScrollPosition(clampedPosition)

      teamScrollRef.current.scrollTo({
        left: clampedPosition,
        behavior: 'smooth'
      })
    }
  }

  // 判断是否需要滑动功能
  const needsTeamScrolling = teamMembers.length > 4

  return (
    <Box sx={{
      bgcolor: '#fafafa',
      minHeight: '100vh',
      // 优化滚动性能
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
    }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(91, 155, 213, 0.1) 0%, rgba(91, 155, 213, 0.1) 50%, rgba(91, 155, 213, 0.1) 100%)',
          pt: { xs: 4, md: 8 },
          pb: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 背景装饰 */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(91, 155, 213, 0.15), rgba(91, 155, 213, 0.1))',
            filter: 'blur(40px)',
            willChange: 'auto',
            transform: 'translateZ(0)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(91, 155, 213, 0.1), rgba(91, 155, 213, 0.1))',
            filter: 'blur(30px)',
            willChange: 'auto',
            transform: 'translateZ(0)',
          }}
        />

        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #2c3e50 0%, #5B9BD5 50%, #5B9BD5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              Allcare Health Care
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: 1.6,
                fontWeight: 400,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              <Box component="span" sx={{ color: '#5B9BD5', fontWeight: 500 }}>
                Maryland’s Trusted Provider of In-Home Care Services
              </Box>
              <br />
              Delivering compassionate, professional care to every home we serve
            </Typography>


          </Box>
        </Container>
      </Box>

      {/* Company Overview */}
      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 8 }}>
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 8,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 3,
                  }}
                >
                  All People. All Heart.{' '}
                  <Box component="span" sx={{ color: '#5B9BD5' }}>
                    Allcare.
                  </Box>
                </Typography>
              </Box>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                At Allcare Health Care, we believe that compassionate care begins with genuine connection. 
                We proudly serve seniors, individuals with chronic conditions, and people with disabilities—including 
                children—with respect, dignity, and unwavering dedication.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                We are more than caregivers — we are companions, guides, and trusted support in daily life. 
                Our mission is to bring dependable, respectful, and person-centered care to every home we serve.
              </Typography>

              {/* 公司信息卡片 */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" sx={{ color: '#5B9BD5', fontWeight: 700 }}>
                      {companyInfo.founded}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Established
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" sx={{ color: '#5B9BD5', fontWeight: 700 }}>
                      {companyInfo.employees}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Professionally Team
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: 400,
                  background: 'linear-gradient(135deg, #5B9BD5 0%, #5B9BD5 50%, #5B9BD5 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
                  <BusinessIcon sx={{ fontSize: 80, mb: 3, opacity: 0.9 }} />
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                    Allcare Health Care
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
                    A Trusted Leader in Home Care Services Across Maryland
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {companyInfo.certifications.map((cert, index) => (
                      <Chip
                        key={index}
                        label={cert}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>





        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontStyle: 'italic' }}
            >
              Guiding our care philosophy and shaping our service culture
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    background: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    willChange: 'transform, box-shadow',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      mx: 'auto',
                      mb: 3,
                      bgcolor: value.color,
                      color: 'white',
                      boxShadow: `0 8px 24px ${value.color}40`,
                    }}
                  >
                    {value.icon}
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
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {value.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      mt: 2,
                    }}
                  >
                    {value.details}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Our Professional Team
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontStyle: 'italic' }}
            >
              A diverse team of experienced<br></br> professionals across care, management, and operations
            </Typography>
          </Box>

          {/* 团队成员卡片 */}
          {needsTeamScrolling ? (
            // 可滑动布局（超过4个卡片时）
            <Box sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              backgroundColor: '#fafafa',
              p: 2,
            }}>
              {/* 滑动容器 */}
              <Box
                ref={teamScrollRef}
                sx={{
                  display: 'flex',
                  gap: 3,
                  overflowX: 'hidden',
                  scrollBehavior: 'smooth',
                  pb: 2,
                  backgroundColor: '#fafafa', // 与网页背景色一致
                  width: '100%',
                  '&::-webkit-scrollbar': {
                    display: 'none',
                  },
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                }}
              >
                {teamMembers.map((member) => (
                  <Card
                    key={member.name}
                    sx={{
                      minWidth: 'calc(25% - 18px)', // 4张卡片，减去gap的空间
                      maxWidth: 'calc(25% - 18px)',
                      textAlign: 'center',
                      p: 4,
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <Box sx={{ fontSize: '4rem', mb: 3 }}>
                      {member.avatar}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 500, mb: 2 }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {member.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Experience:</strong> {member.experience}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Credentials:</strong> {member.credentials.join(', ')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Specialties:</strong> {member.specialties.join(', ')}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>

              {/* 左箭头 */}
              <IconButton
                onClick={() => handleTeamScroll('left')}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  color: '#666',
                  width: 40,
                  height: 40,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    transform: 'translateY(-50%) scale(1.05)',
                  },
                  '&:disabled': {
                    opacity: 0.3,
                  },
                }}
                disabled={teamScrollPosition <= 0}
              >
                <ArrowBackIcon sx={{ fontSize: 20 }} />
              </IconButton>

              {/* 右箭头 */}
              <IconButton
                onClick={() => handleTeamScroll('right')}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(128, 128, 128, 0.3)',
                  color: '#666',
                  width: 40,
                  height: 40,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    transform: 'translateY(-50%) scale(1.05)',
                  },
                  '&:disabled': {
                    opacity: 0.3,
                  },
                }}
                disabled={teamScrollPosition >= (teamMembers.length - 4) * 320}
              >
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          ) : (
            // 普通Grid布局（4个或以下卡片时）
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <Box sx={{ fontSize: '4rem', mb: 3 }}>
                      {member.avatar}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: 500, mb: 2 }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {member.description}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ textAlign: 'left' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Experience:</strong> {member.experience}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Credentials:</strong> {member.credentials.join(', ')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Specialties:</strong> {member.specialties.join(', ')}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>

      {/* Timeline Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Company Milestones
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontStyle: 'italic' }}
            >
              Tracing the Growth of Allcare Health Care
            </Typography>
          </Box>

          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: '#5B9BD5', // 使用首页主蓝色
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  {index < milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(91, 155, 213, 0.2)',
                      borderRadius: 3,
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(91, 155, 213, 0.15)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#5B9BD5',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {milestone.year}
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                      }}
                    >
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {milestone.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>

      {/* Service Areas */}
      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 8 }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(91, 155, 213, 0.1) 0%, rgba(91, 155, 213, 0.1) 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 4,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 2,
              }}
            >
              Service Areas
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontStyle: 'italic' }}
            >
              We provide professional in-home care services throughout Montgomery County, Maryland and surrounding areas.
            </Typography>
          </Box>

          {/* 服务区域卡片 */}
          <Grid container spacing={4}>
            {serviceAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    height: '100%',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      borderColor: area.color,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: area.color,
                      color: 'white',
                      fontSize: '24px',
                    }}
                  >
                    <LocationIcon />
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {area.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, fontStyle: 'italic' }}
                  >
                    {area.name}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {area.cities.map((city, cityIndex) => (
                      <Chip
                        key={cityIndex}
                        label={city}
                        size="small"
                        sx={{
                          bgcolor: `${area.color}20`,
                          color: area.color,
                          border: `1px solid ${area.color}40`,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
              Contact Us to Learn More About Our Services
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
              <Chip
                icon={<PhoneIcon />}
                label="(240) 668-4666"
                sx={{
                  bgcolor: 'rgba(91, 155, 213, 0.1)',
                  color: '#5B9BD5',
                  border: '1px solid rgba(91, 155, 213, 0.3)',
                  '&:hover': {
                    bgcolor: 'rgba(91, 155, 213, 0.2)',
                  },
                }}
              />
              <Chip
                icon={<EmailIcon />}
                label="allcaremd@outlook.com"
                sx={{
                  bgcolor: 'rgba(91, 155, 213, 0.1)',
                  color: '#5B9BD5',
                  border: '1px solid rgba(91, 155, 213, 0.3)',
                  '&:hover': {
                    bgcolor: 'rgba(91, 155, 213, 0.2)',
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default About
