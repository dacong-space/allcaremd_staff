import React, { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  Divider,
} from '@mui/material'
import {
  School as SchoolIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  WorkspacePremium as CertificateIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from '@mui/icons-material'

// PCA培训课程模块
const trainingModules = [
  {
    id: 1,
    title: '个人护理基础',
    duration: '4小时',
    description: '学习基本的个人卫生护理技能',
    topics: [
      '个人卫生协助',
      '洗澡和淋浴协助',
      '穿衣和脱衣协助',
      '口腔护理',
      '皮肤护理基础'
    ],
    color: '#3b82f6'
  },
  {
    id: 2,
    title: '日常生活活动(ADL)',
    duration: '6小时',
    description: '掌握协助客户进行日常生活活动的技能',
    topics: [
      '移动和转移技巧',
      '进食协助',
      '如厕协助',
      '床铺整理',
      '家务协助'
    ],
    color: '#10b981'
  },
  {
    id: 3,
    title: '安全与感染控制',
    duration: '3小时',
    description: '学习工作环境安全和感染预防措施',
    topics: [
      '手部卫生',
      '个人防护设备使用',
      '感染控制原则',
      '意外事故预防',
      '紧急情况处理'
    ],
    color: '#ef4444'
  },
  {
    id: 4,
    title: '沟通与职业道德',
    duration: '2小时',
    description: '培养专业沟通技巧和职业操守',
    topics: [
      '有效沟通技巧',
      '客户隐私保护',
      '职业边界',
      '文化敏感性',
      '团队合作'
    ],
    color: '#8b5cf6'
  }
]

// 培训时间安排
const trainingSchedule = [
  {
    date: '2024年2月15日',
    time: '上午9:00-下午5:00',
    type: '全日制培训',
    location: 'Allcare培训中心',
    instructor: '张护士长',
    spots: 12
  },
  {
    date: '2024年2月22日',
    time: '上午9:00-下午5:00',
    type: '全日制培训',
    location: 'Allcare培训中心',
    instructor: '李主管',
    spots: 8
  },
  {
    date: '2024年3月1日',
    time: '晚上6:00-10:00',
    type: '晚间培训',
    location: '在线培训',
    instructor: '王老师',
    spots: 20
  }
]

// 认证要求
const certificationRequirements = [
  {
    title: '出勤要求',
    description: '必须参加所有培训课程，出勤率不低于95%',
    icon: <ScheduleIcon sx={{ color: '#3b82f6' }} />
  },
  {
    title: '理论考试',
    description: '通过书面考试，成绩不低于80分',
    icon: <AssignmentIcon sx={{ color: '#10b981' }} />
  },
  {
    title: '实践技能',
    description: '通过实际操作技能评估',
    icon: <PersonIcon sx={{ color: '#f59e0b' }} />
  },
  {
    title: '继续教育',
    description: '每年完成12小时继续教育课程',
    icon: <SchoolIcon sx={{ color: '#8b5cf6' }} />
  }
]

function PCATraining() {
  const [expandedModule, setExpandedModule] = useState(false)

  const handleModuleChange = (panel) => (event, isExpanded) => {
    setExpandedModule(isExpanded ? panel : false)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          PCA培训课程
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Personal Care Assistant (PCA) 专业培训课程，为您提供全面的个人护理技能培训，
          帮助您成为合格的个人护理助理
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip
            icon={<TimeIcon />}
            label="总课时：15小时"
            sx={{ bgcolor: '#e3f2fd', color: '#1976d2', fontWeight: 600 }}
          />
          <Chip
            icon={<CertificateIcon />}
            label="获得认证证书"
            sx={{ bgcolor: '#e8f5e8', color: '#2e7d32', fontWeight: 600 }}
          />
          <Chip
            icon={<GroupIcon />}
            label="小班教学"
            sx={{ bgcolor: '#fff3e0', color: '#f57c00', fontWeight: 600 }}
          />
        </Box>
      </Box>

      {/* 培训模块 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          培训课程模块
        </Typography>
        {trainingModules.map((module) => (
          <Accordion
            key={module.id}
            expanded={expandedModule === `module${module.id}`}
            onChange={handleModuleChange(`module${module.id}`)}
            sx={{
              mb: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              '&:before': { display: 'none' },
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor: `${module.color}10`,
                borderRadius: '8px 8px 0 0',
                '&.Mui-expanded': {
                  borderRadius: '8px 8px 0 0',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Avatar sx={{ bgcolor: module.color, width: 40, height: 40 }}>
                  <SchoolIcon />
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {module.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {module.description} • {module.duration}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                课程内容：
              </Typography>
              <List dense>
                {module.topics.map((topic, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckIcon sx={{ color: module.color, fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={topic} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* 培训时间安排 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          培训时间安排
        </Typography>
        <Grid container spacing={3}>
          {trainingSchedule.map((schedule, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#87ceeb', mr: 2 }}>
                      <ScheduleIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {schedule.date}
                    </Typography>
                  </Box>
                  <Typography variant="body1" gutterBottom sx={{ fontWeight: 600 }}>
                    {schedule.time}
                  </Typography>
                  <Chip
                    label={schedule.type}
                    size="small"
                    sx={{ mb: 2, bgcolor: '#e3f2fd', color: '#1976d2' }}
                  />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <LocationIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                      {schedule.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <PersonIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                      讲师：{schedule.instructor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <GroupIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                      剩余名额：{schedule.spots}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      bgcolor: '#87ceeb',
                      '&:hover': { bgcolor: '#7bb8d9' },
                    }}
                  >
                    立即报名
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 认证要求 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          认证要求
        </Typography>
        <Grid container spacing={3}>
          {certificationRequirements.map((requirement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'translateY(-2px)' },
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'transparent',
                  }}
                >
                  {requirement.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {requirement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {requirement.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 联系信息 */}
      <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
          培训咨询
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} textAlign="center">
            <PhoneIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              电话咨询
            </Typography>
            <Typography color="text.secondary">
              (240) 668-4666
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <EmailIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              邮件咨询
            </Typography>
            <Typography color="text.secondary">
              training@allcaremd.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <LocationIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              培训地址
            </Typography>
            <Typography color="text.secondary">
              Allcare培训中心
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PCATraining
