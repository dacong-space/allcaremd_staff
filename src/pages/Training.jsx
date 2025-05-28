import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import {
  School as SchoolIcon,
  LocalHospital as CPRIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  Certificate as CertificateIcon,
  Group as GroupIcon,
} from '@mui/icons-material'

const trainingPrograms = [
  {
    id: 'pca',
    title: 'PCA培训',
    subtitle: 'Personal Care Assistant',
    description: '专业的个人护理助理培训课程，涵盖基础护理技能、沟通技巧、安全操作等核心内容。',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    color: '#6366f1',
    duration: '40小时',
    certification: '省级认证',
    features: [
      '基础护理技能',
      '沟通与人际关系',
      '安全操作规程',
      '紧急情况处理',
      '职业道德与法规',
      '实践操作训练',
    ],
    price: '￥1,200',
  },
  {
    id: 'cpr',
    title: 'CPR培训',
    subtitle: 'Cardiopulmonary Resuscitation',
    description: '心肺复苏术培训，学习生命救护技能，掌握紧急情况下的急救操作方法。',
    icon: <CPRIcon sx={{ fontSize: 48 }} />,
    color: '#dc2626',
    duration: '8小时',
    certification: '国际认证',
    features: [
      '心肺复苏基础理论',
      '胸外按压技术',
      'AED使用方法',
      '气道管理',
      '团队急救配合',
      '实际案例演练',
    ],
    price: '￥800',
  },
  {
    id: 'others',
    title: '其他培训',
    subtitle: 'Specialized Training',
    description: '根据行业需求定制的专业培训课程，包括特殊护理技能、设备操作等。',
    icon: <CertificateIcon sx={{ fontSize: 48 }} />,
    color: '#059669',
    duration: '灵活安排',
    certification: '专业证书',
    features: [
      '定制化课程设计',
      '专业技能培训',
      '设备操作指导',
      '行业最新标准',
      '实践技能考核',
      '持续教育支持',
    ],
    price: '面议',
  },
]

function Training() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          专业培训课程
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          我们提供全面的专业培训服务，帮助您获得行业认可的技能认证，提升职业竞争力
        </Typography>
      </Box>

      {/* Training Programs */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {trainingPrograms.map((program) => (
          <Grid item xs={12} md={4} key={program.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: program.color,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Box textAlign="center" sx={{ mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: `${program.color}20`,
                      color: program.color,
                    }}
                  >
                    {program.icon}
                  </Avatar>
                  <Typography variant="h4" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {program.subtitle}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {program.description}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box textAlign="center">
                        <ScheduleIcon color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          课程时长
                        </Typography>
                        <Typography variant="subtitle2">
                          {program.duration}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box textAlign="center">
                        <CertificateIcon color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          认证类型
                        </Typography>
                        <Typography variant="subtitle2">
                          {program.certification}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Typography variant="h6" gutterBottom>
                  课程内容
                </Typography>
                <List dense>
                  {program.features.map((feature, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {program.price}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      backgroundColor: program.color,
                      '&:hover': {
                        backgroundColor: program.color,
                        filter: 'brightness(0.9)',
                      },
                    }}
                  >
                    立即报名
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Us */}
      <Card sx={{ p: 6, mb: 6 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          为什么选择我们的培训？
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
              <GroupIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              专业师资
            </Typography>
            <Typography variant="body2" color="text.secondary">
              经验丰富的专业讲师团队
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
              <CertificateIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              权威认证
            </Typography>
            <Typography variant="body2" color="text.secondary">
              获得行业认可的专业证书
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'success.main' }}>
              <ScheduleIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              灵活安排
            </Typography>
            <Typography variant="body2" color="text.secondary">
              多种时间安排满足不同需求
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'warning.main' }}>
              <CheckIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              实践导向
            </Typography>
            <Typography variant="body2" color="text.secondary">
              注重实际操作和技能应用
            </Typography>
          </Grid>
        </Grid>
      </Card>

      {/* Contact CTA */}
      <Card
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          准备开始学习了吗？
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          联系我们了解更多课程详情，或直接报名参加培训
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 4,
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            联系咨询
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            查看课程表
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Training
