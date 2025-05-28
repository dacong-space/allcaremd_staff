import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  People as PeopleIcon,
  School as SchoolIcon,
  Star as StarIcon,
  CheckCircle as CheckIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material'

const teamMembers = [
  {
    name: '张主任',
    position: '培训总监',
    description: '拥有15年护理培训经验，专业认证讲师',
    avatar: '👩‍💼',
  },
  {
    name: '李老师',
    position: 'PCA培训专家',
    description: '资深PCA培训师，培训学员超过500人',
    avatar: '👨‍🏫',
  },
  {
    name: '王医生',
    position: 'CPR认证讲师',
    description: '急救医学专家，国际CPR认证培训师',
    avatar: '👩‍⚕️',
  },
  {
    name: '陈经理',
    position: '客户服务经理',
    description: '负责客户关系维护和培训后续服务',
    avatar: '👨‍💼',
  },
]

const milestones = [
  {
    year: '2018',
    title: '公司成立',
    description: '正式成立专业培训机构，开始提供PCA培训服务',
  },
  {
    year: '2019',
    title: '认证获得',
    description: '获得省级培训机构认证，成为官方认可的培训提供商',
  },
  {
    year: '2020',
    title: '服务扩展',
    description: '增加CPR培训项目，扩大培训服务范围',
  },
  {
    year: '2021',
    title: '数字化转型',
    description: '推出在线培训平台，提供混合式学习体验',
  },
  {
    year: '2022',
    title: '质量认证',
    description: '通过ISO质量管理体系认证，确保培训质量',
  },
  {
    year: '2024',
    title: '持续发展',
    description: '继续扩大服务范围，为更多学员提供优质培训',
  },
]

const values = [
  {
    title: '专业性',
    description: '始终坚持专业标准，提供高质量的培训服务',
    icon: <SchoolIcon />,
  },
  {
    title: '诚信',
    description: '以诚待人，建立长期信任的合作关系',
    icon: <CheckIcon />,
  },
  {
    title: '创新',
    description: '不断改进培训方法，采用最新的教学技术',
    icon: <StarIcon />,
  },
  {
    title: '服务',
    description: '以学员为中心，提供全方位的学习支持',
    icon: <PeopleIcon />,
  },
]

const contactInfo = [
  {
    icon: <PhoneIcon />,
    title: '联系电话',
    content: '+1 (555) 123-4567',
  },
  {
    icon: <EmailIcon />,
    title: '邮箱地址',
    content: 'info@trainingcenter.com',
  },
  {
    icon: <LocationIcon />,
    title: '办公地址',
    content: '123 培训街, 教育区, 城市 12345',
  },
  {
    icon: <ScheduleIcon />,
    title: '营业时间',
    content: '周一至周五 9:00-18:00',
  },
]

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          关于我们
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          我们是一家专注于提供高质量培训服务的专业机构，致力于帮助每一位学员实现职业发展目标
        </Typography>
      </Box>

      {/* Company Overview */}
      <Card sx={{ p: 6, mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              我们的使命
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              我们致力于为个人和企业提供专业、全面的培训服务，通过高质量的教育帮助学员掌握核心技能，
              提升职业竞争力，实现个人价值和职业发展目标。
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              我们相信每个人都有无限的潜力，通过专业的培训和指导，可以帮助他们在各自的领域中取得成功。
              我们不仅提供知识传授，更注重实践技能的培养和职业素养的提升。
            </Typography>
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
                <BusinessIcon sx={{ fontSize: 80, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  专业培训机构
                </Typography>
                <Typography variant="h6">
                  6年专业培训经验
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Core Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          我们的价值观
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          指导我们行动的核心原则
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

      {/* Team */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          我们的团队
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          经验丰富的专业培训师团队
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

      {/* Timeline */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          发展历程
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          我们的成长足迹
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

      {/* Contact Information */}
      <Card sx={{ p: 6 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          联系我们
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          我们随时为您提供帮助和支持
        </Typography>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {info.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {info.content}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  )
}

export default About
