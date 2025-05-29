import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Avatar,
  Chip,
  Divider,
} from '@mui/material'

import {
  Business as BusinessIcon,
  Star as StarIcon,
  CheckCircle as CheckIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
  HealthAndSafety as HealthIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material'

// 统计数据
const statistics = [
  {
    number: '500+',
    label: '服务家庭',
    description: '累计为超过500个家庭提供护理服务',
    icon: <GroupsIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '98%',
    label: '客户满意度',
    description: '客户对我们服务的满意度评分',
    icon: <StarIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '24/7',
    label: '全天候服务',
    description: '提供全天候紧急护理支持',
    icon: <ScheduleIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
  {
    number: '15+',
    label: '专业认证',
    description: '团队持有的专业护理认证数量',
    icon: <VerifiedIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
  },
]

// 服务特色
const serviceFeatures = [
  {
    title: '个性化护理计划',
    description: '根据每位客户的具体需求制定专属护理方案',
    icon: <PsychologyIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: ['全面健康评估', '定制护理目标', '定期计划调整', '家属参与决策'],
  },
  {
    title: '专业团队监督',
    description: '注册护士全程监督，确保护理质量',
    icon: <SecurityIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: ['RN护士监督', '定期质量评估', '持续培训更新', '24小时支持'],
  },
  {
    title: '全面安全保障',
    description: '完善的安全协议和应急响应机制',
    icon: <HealthIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: ['安全评估', '应急预案', '医疗协调', '家属沟通'],
  },
  {
    title: '持续质量改进',
    description: '不断优化服务流程，提升护理标准',
    icon: <TrendingUpIcon />,
    color: '#87ceeb', // 更蓝的天空蓝色
    details: ['服务反馈', '流程优化', '技能提升', '创新实践'],
  },
]

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



function About() {

  return (
    <Box sx={{
      bgcolor: '#fafafa',
      minHeight: '100vh',
      // 优化滚动性能
      willChange: 'scroll-position',
      transform: 'translateZ(0)', // 启用硬件加速
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
              马里兰州值得信赖的居家护理服务提供商
              <br />
              <Box component="span" sx={{ color: '#87ceeb', fontWeight: 500 }}>
                致力于为每个家庭提供富有同情心的专业护理服务
              </Box>
            </Typography>

            {/* 统计数据卡片 */}
            <Grid container spacing={3} sx={{ mt: 6, justifyContent: 'center' }}>
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
                      sx={{ fontSize: '0.875rem' }}
                    >
                      {stat.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
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
                    backdropFilter: 'blur(10px)',
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



        {/* Service Features */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Chip
              label="服务特色"
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
              我们的服务特色
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              专业、全面、个性化的护理服务体系
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {serviceFeatures.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                      boxShadow: `0 12px 32px ${feature.color}15`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: feature.color,
                        color: 'white',
                        mr: 3,
                        boxShadow: `0 4px 16px ${feature.color}40`,
                      }}
                    >
                      {feature.icon}
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
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6, mb: 2 }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ pl: 9 }}>
                    <Grid container spacing={1}>
                      {feature.details.map((detail, detailIndex) => (
                        <Grid item xs={6} key={detailIndex}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <CheckIcon
                              sx={{
                                fontSize: 16,
                                color: feature.color,
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
