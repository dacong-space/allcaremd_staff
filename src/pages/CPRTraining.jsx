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
  Paper,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Alert,
} from '@mui/material'
import {
  Favorite as HeartIcon,
  LocalHospital as MedicalIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  WorkspacePremium as CertificateIcon,
  Warning as WarningIcon,
  CheckCircle as CheckIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  MedicalServices as EmergencyIcon,
} from '@mui/icons-material'

// CPR培训步骤
const cprSteps = [
  {
    label: '评估现场安全',
    description: '确保现场安全，检查患者反应',
    details: [
      '检查现场是否安全',
      '轻拍患者肩膀并大声呼叫',
      '检查呼吸和脉搏',
      '立即拨打911'
    ]
  },
  {
    label: '正确体位',
    description: '将患者置于正确的CPR体位',
    details: [
      '患者仰卧在坚硬平面上',
      '头部后仰，下颌上抬',
      '清除口腔异物',
      '暴露胸部进行按压'
    ]
  },
  {
    label: '胸外按压',
    description: '进行有效的胸外心脏按压',
    details: [
      '手掌根部放在胸骨下半部',
      '双手交叉，手指抬起',
      '垂直用力按压至少5cm',
      '按压频率100-120次/分钟'
    ]
  },
  {
    label: '人工呼吸',
    description: '提供有效的人工呼吸',
    details: [
      '头部后仰，下颌上抬',
      '捏住鼻孔，封住口部',
      '缓慢吹气1秒钟',
      '观察胸部起伏'
    ]
  },
  {
    label: '持续循环',
    description: '按30:2比例持续进行',
    details: [
      '30次胸外按压',
      '2次人工呼吸',
      '持续循环直到急救人员到达',
      '每2分钟检查一次脉搏'
    ]
  }
]

// 培训课程内容
const courseContent = [
  {
    title: '成人CPR',
    duration: '2小时',
    description: '学习成人心肺复苏技术',
    icon: <PersonIcon sx={{ color: '#3b82f6' }} />,
    topics: [
      '成人CPR基本步骤',
      '胸外按压技巧',
      '人工呼吸方法',
      'AED使用方法'
    ]
  },
  {
    title: '儿童CPR',
    duration: '1.5小时',
    description: '掌握儿童心肺复苏特殊技巧',
    icon: <HeartIcon sx={{ color: '#ef4444' }} />,
    topics: [
      '儿童CPR特点',
      '按压深度调整',
      '呼吸频率控制',
      '婴儿CPR技巧'
    ]
  },
  {
    title: '急救处理',
    duration: '1小时',
    description: '学习常见急救处理方法',
    icon: <MedicalIcon sx={{ color: '#10b981' }} />,
    topics: [
      '窒息急救',
      '出血控制',
      '休克处理',
      '意外伤害急救'
    ]
  },
  {
    title: '实践操作',
    duration: '1.5小时',
    description: '模拟人练习和技能考核',
    icon: <AssignmentIcon sx={{ color: '#f59e0b' }} />,
    topics: [
      '模拟人操作',
      '情景模拟练习',
      '技能考核',
      '证书颁发'
    ]
  }
]

// 培训时间安排
const trainingSchedule = [
  {
    date: '2024年2月20日',
    time: '上午9:00-下午1:00',
    type: 'AHA认证课程',
    instructor: '急救专家 Dr. Smith',
    price: '$85',
    spots: 15
  },
  {
    date: '2024年2月27日',
    time: '下午2:00-6:00',
    type: 'AHA认证课程',
    instructor: '护理主管 张老师',
    price: '$85',
    spots: 12
  },
  {
    date: '2024年3月5日',
    time: '晚上6:00-10:00',
    type: '复习认证课程',
    instructor: '急救培训师 李老师',
    price: '$60',
    spots: 20
  }
]

function CPRTraining() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          CPR心肺复苏培训
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          美国心脏协会(AHA)认证的CPR培训课程，学习专业的心肺复苏技术，
          掌握紧急情况下的救生技能
        </Typography>
        <Alert severity="info" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
          <Typography variant="body2">
            <strong>重要提醒：</strong>本课程提供AHA官方认证证书，证书有效期2年
          </Typography>
        </Alert>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip
            icon={<TimeIcon />}
            label="总课时：6小时"
            sx={{ bgcolor: '#e3f2fd', color: '#1976d2', fontWeight: 600 }}
          />
          <Chip
            icon={<CertificateIcon />}
            label="AHA官方认证"
            sx={{ bgcolor: '#e8f5e8', color: '#2e7d32', fontWeight: 600 }}
          />
          <Chip
            icon={<EmergencyIcon />}
            label="实践操作"
            sx={{ bgcolor: '#ffebee', color: '#c62828', fontWeight: 600 }}
          />
        </Box>
      </Box>

      {/* CPR步骤演示 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          CPR操作步骤
        </Typography>
        <Paper sx={{ p: 4 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {cprSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {step.description}
                  </Typography>
                  <List dense>
                    {step.details.map((detail, detailIndex) => (
                      <ListItem key={detailIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckIcon sx={{ color: '#10b981', fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mb: 2, mt: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1, bgcolor: '#87ceeb' }}
                      disabled={index === cprSteps.length - 1}
                    >
                      {index === cprSteps.length - 1 ? '完成' : '下一步'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      上一步
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === cprSteps.length && (
            <Paper square elevation={0} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                恭喜！您已了解完整的CPR操作流程
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                重新学习
              </Button>
            </Paper>
          )}
        </Paper>
      </Box>

      {/* 课程内容 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          培训课程内容
        </Typography>
        <Grid container spacing={3}>
          {courseContent.map((course, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'transparent',
                    }}
                  >
                    {course.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {course.title}
                  </Typography>
                  <Chip
                    label={course.duration}
                    size="small"
                    sx={{ mb: 2, bgcolor: '#e3f2fd', color: '#1976d2' }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {course.description}
                  </Typography>
                  <List dense>
                    {course.topics.map((topic, topicIndex) => (
                      <ListItem key={topicIndex} sx={{ py: 0.25, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <CheckIcon sx={{ color: '#10b981', fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={topic}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
                    <Avatar sx={{ bgcolor: '#ef4444', mr: 2 }}>
                      <HeartIcon />
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
                    sx={{ mb: 2, bgcolor: '#ffebee', color: '#c62828' }}
                  />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <PersonIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                      讲师：{schedule.instructor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <GroupIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                      剩余名额：{schedule.spots}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#ef4444', fontWeight: 'bold', mt: 1 }}>
                      {schedule.price}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      bgcolor: '#ef4444',
                      '&:hover': { bgcolor: '#dc2626' },
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

      {/* 重要提醒 */}
      <Alert severity="warning" sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          培训要求：
        </Typography>
        <Typography variant="body2">
          • 必须全程参与培训课程<br/>
          • 通过理论考试和实践操作考核<br/>
          • 证书有效期2年，到期需重新认证<br/>
          • 建议医护人员每年参加复习课程
        </Typography>
      </Alert>

      {/* 联系信息 */}
      <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
          培训咨询
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} textAlign="center">
            <PhoneIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              紧急咨询
            </Typography>
            <Typography color="text.secondary">
              (240) 668-4666
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <EmailIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              培训报名
            </Typography>
            <Typography color="text.secondary">
              cpr@allcaremd.com
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

export default CPRTraining
