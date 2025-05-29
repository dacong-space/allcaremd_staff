import React, { useState } from 'react'
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
} from '@mui/icons-material'





// 团队成员
const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: '护理总监 & 注册护士',
    description: '拥有15年临床护理经验，专注于居家护理质量管理',
    avatar: '👩‍⚕️',
    credentials: ['RN', 'BSN', 'CCM'],
    experience: '15年',
    specialties: ['临床护理', '质量管理', '团队培训'],
  },
  {
    name: 'Michael Chen',
    position: 'PCA培训总监',
    description: '资深护理培训专家，负责员工技能发展和认证管理',
    avatar: '👨‍🏫',
    credentials: ['CNA', 'CPR', 'First Aid'],
    experience: '12年',
    specialties: ['员工培训', 'ADL协助', '安全护理'],
  },
  {
    name: 'Emily Rodriguez',
    position: '客户关系经理',
    description: '专注于客户体验优化和护理计划协调',
    avatar: '👩‍💼',
    credentials: ['LSW', 'CCM'],
    experience: '10年',
    specialties: ['客户服务', '护理协调', '家庭支持'],
  },
  {
    name: 'David Kim',
    position: '质量保证专员',
    description: '负责服务质量监控和持续改进项目',
    avatar: '👨‍💻',
    credentials: ['QA', 'Six Sigma'],
    experience: '8年',
    specialties: ['质量控制', '流程改进', '数据分析'],
  },
]



// 公司信息
const companyInfo = {
  founded: '2018',
  location: '马里兰州',
  employees: '50+',
  certifications: ['州政府认证', 'Medicare认证', 'Medicaid认证'],
  serviceAreas: ['巴尔的摩', '安纳波利斯', '哥伦比亚', '银泉'],
  contact: {
    phone: '(410) 555-0123',
    email: 'info@allcaremd.com',
    address: '123 Healthcare Blvd, Baltimore, MD 21201',
  }
}

// 核心价值观数据
const values = [
  {
    title: '富有同情心',
    description: '我们相信富有同情心的护理始于真诚的连接，用心倾听每一位客户的需求',
    icon: <HeartIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: '以同理心为基础，建立信任关系，提供温暖的护理体验',
  },
  {
    title: '尊严与尊重',
    description: '以尊严、尊重和真诚的奉献精神为每位客户服务，维护个人隐私和选择权',
    icon: <CheckIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: '尊重客户的文化背景、个人偏好和生活方式选择',
  },
  {
    title: '专业护理',
    description: '提供专业的ADLs协助和个性化护理计划，确保最高质量的护理标准',
    icon: <StarIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: '持续的专业培训和认证，运用循证护理实践',
  },
  {
    title: '可靠支持',
    description: '我们是陪伴者、倡导者，是您日常生活中值得信赖的支持伙伴',
    icon: <PeopleIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: '建立长期的护理关系，提供持续稳定的支持服务',
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



function About() {
  const [selectedValue, setSelectedValue] = useState(0)

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
          background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(135, 206, 235, 0.1) 50%, rgba(135, 206, 235, 0.1) 100%)',
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
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.15), rgba(135, 206, 235, 0.1))',
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
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(135, 206, 235, 0.1))',
            filter: 'blur(30px)',
            willChange: 'auto',
            transform: 'translateZ(0)',
          }}
        />

        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Chip
              label="关于我们"
              sx={{
                bgcolor: 'rgba(135, 206, 235, 0.15)',
                color: '#87ceeb',
                mb: 3,
                fontSize: '0.875rem',
                px: 3,
                py: 0.5,
                border: '1px solid rgba(135, 206, 235, 0.3)',
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #2c3e50 0%, #87ceeb 50%, #87ceeb 100%)',
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
              <Box component="span" sx={{ color: '#87ceeb', fontWeight: 500 }}>
                马里兰州值得信赖的居家护理服务提供商
              </Box>
              <br />
              致力于为每个家庭提供富有同情心的专业护理服务
            </Typography>


          </Box>
        </Container>
      </Box>

      {/* Company Overview */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
                <Chip
                  label="我们的使命"
                  sx={{
                    bgcolor: 'rgba(135, 206, 235, 0.15)',
                    color: '#87ceeb', // 更蓝的天空蓝色
                    mb: 3,
                    fontSize: '0.875rem',
                    px: 3,
                    py: 0.5,
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                  }}
                />
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
                  <Box component="span" sx={{ color: '#87ceeb' }}>
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
                在 Allcare Health Care，我们相信富有同情心的护理始于真诚的连接。我们自豪地为老年人、慢性疾病患者和残疾人士（包括儿童）提供服务，以尊严、尊重和真诚的奉献精神为他们服务。
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
                我们不仅仅是护理人员，我们是陪伴者、倡导者，是您日常生活中值得信赖的支持。我们的使命是将可靠、尊重和以心为中心的护理带到我们服务的每一个家庭。
              </Typography>

              {/* 公司信息卡片 */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" sx={{ color: '#87ceeb', fontWeight: 700 }}>
                      {companyInfo.founded}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      成立年份
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" sx={{ color: '#87ceeb', fontWeight: 700 }}>
                      {companyInfo.employees}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      专业团队
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
                  background: 'linear-gradient(135deg, #87ceeb 0%, #87ceeb 50%, #87ceeb 100%)',
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
                    马里兰州居家护理服务领导者
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
            <Chip
              label="核心价值观"
              sx={{
                bgcolor: 'rgba(135, 206, 235, 0.15)',
                color: '#87ceeb', // 更蓝的天空蓝色
                mb: 3,
                fontSize: '0.875rem',
                px: 3,
                py: 0.5,
                border: '1px solid rgba(135, 206, 235, 0.3)',
              }}
            />
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
              我们的核心价值观
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              指导我们护理服务的核心原则，塑造我们的服务文化
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  onClick={() => setSelectedValue(index)}
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    background: selectedValue === index
                      ? `linear-gradient(135deg, ${value.color}15 0%, ${value.color}25 100%)`
                      : 'rgba(255, 255, 255, 0.95)',
                    border: selectedValue === index
                      ? `2px solid ${value.color}`
                      : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: 3,
                    boxShadow: selectedValue === index
                      ? `0 16px 48px ${value.color}20`
                      : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease',
                    transform: selectedValue === index ? 'translateY(-4px)' : 'translateY(0)',
                    willChange: 'transform, box-shadow',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 32px ${value.color}20`,
                      border: `2px solid ${value.color}`,
                      background: `linear-gradient(135deg, ${value.color}15 0%, ${value.color}25 100%)`,
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
                      transition: 'transform 0.2s ease',
                      transform: selectedValue === index ? 'scale(1.05)' : 'scale(1)',
                      willChange: 'transform',
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
                  {selectedValue === index && (
                    <Box
                      sx={{
                        mt: 2,
                        p: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: 2,
                        border: `1px solid ${value.color}30`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {value.details}
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Chip
              label="专业团队"
              sx={{
                bgcolor: 'rgba(135, 206, 235, 0.15)',
                color: '#87ceeb', // 更蓝的天空蓝色
                mb: 3,
                fontSize: '0.875rem',
                px: 3,
                py: 0.5,
                border: '1px solid rgba(135, 206, 235, 0.3)',
              }}
            />
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
              我们的专业团队
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              经验丰富的护理专业人员和培训师团队
            </Typography>
          </Box>

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
                      <strong>经验:</strong> {member.experience}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      <strong>认证:</strong> {member.credentials.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>专长:</strong> {member.specialties.join(', ')}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline Section */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Chip
              label="发展历程"
              sx={{
                bgcolor: 'rgba(135, 206, 235, 0.15)',
                color: '#87ceeb', // 更蓝的天空蓝色
                mb: 3,
                fontSize: '0.875rem',
                px: 3,
                py: 0.5,
                border: '1px solid rgba(135, 206, 235, 0.3)',
              }}
            />
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
              我们的发展历程
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Allcare Health Care 的成长足迹
            </Typography>
          </Box>

          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: '#87ceeb', // 更蓝的天空蓝色
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
                      border: '1px solid rgba(135, 206, 235, 0.2)',
                      borderRadius: 3,
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(135, 206, 235, 0.15)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#87ceeb',
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

        {/* Contact Information */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            mb: 4,
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Chip
              label="联系我们"
              sx={{
                bgcolor: 'rgba(135, 206, 235, 0.15)',
                color: '#87ceeb', // 更蓝的天空蓝色
                mb: 3,
                fontSize: '0.875rem',
                px: 3,
                py: 0.5,
                border: '1px solid rgba(135, 206, 235, 0.3)',
              }}
            />
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
              联系我们
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              我们随时为您提供专业的护理咨询服务
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: '#87ceeb', // 更蓝的天空蓝色
                    color: 'white',
                  }}
                >
                  <PhoneIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  电话咨询
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
                  {companyInfo.contact.phone}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: '#87ceeb', // 更蓝的天空蓝色
                    color: 'white',
                  }}
                >
                  <EmailIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  邮件联系
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 500 }}>
                  {companyInfo.contact.email}
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: '#87ceeb', // 更蓝的天空蓝色
                    color: 'white',
                  }}
                >
                  <LocationIcon />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  服务地址
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {companyInfo.contact.address}
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'text.primary' }}>
              服务区域
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
              {companyInfo.serviceAreas.map((area, index) => (
                <Chip
                  key={index}
                  label={area}
                  sx={{
                    bgcolor: 'rgba(135, 206, 235, 0.15)',
                    color: '#87ceeb',
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default About
