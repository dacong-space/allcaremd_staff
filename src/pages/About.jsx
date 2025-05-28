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
} from '@mui/icons-material'

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



function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          关于 Allcare Health Care
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          马里兰州值得信赖的居家护理服务提供商，致力于为老年人、慢性疾病患者和残疾人士提供富有同情心的护理服务
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
              在 Allcare Health Care，我们相信富有同情心的护理始于真诚的连接。我们自豪地为老年人、慢性疾病患者和残疾人士（包括儿童）提供服务，以尊严、尊重和真诚的奉献精神为他们服务。
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              我们不仅仅是护理人员，我们是陪伴者、倡导者，是您日常生活中值得信赖的支持。我们的使命是将可靠、尊重和以心为中心的护理带到我们服务的每一个家庭。
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              我们优先考虑您所爱之人的福祉，通过我们对日常生活活动 (ADLs) 的专业支持来实现这一目标。
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                background: 'linear-gradient(135deg, #377dff 0%, #00c9a7 50%, #e91e63 100%)',
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
                  Allcare Health Care
                </Typography>
                <Typography variant="h6">
                  马里兰州居家护理服务
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Core Values */}
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

      {/* Team */}
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

      {/* Timeline */}
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
  )
}

export default About
