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
    title: 'PCA专业培训',
    subtitle: 'Personal Care Assistant Training',
    description: 'Allcare Health Care 专业的个人护理助理培训课程，专注于ADLs协助、安全护理和客户沟通技巧。',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    color: '#377dff',
    duration: '持续培训',
    certification: 'Allcare认证',
    features: [
      '日常生活活动(ADLs)协助',
      '安全护理操作规程',
      '客户沟通与陪伴技巧',
      '紧急情况应对处理',
      '护理记录与报告',
      '职业道德与隐私保护',
    ],
    price: '员工培训',
  },
  {
    id: 'cpr',
    title: 'CPR & 急救培训',
    subtitle: 'CPR & First Aid Certification',
    description: '心肺复苏术和急救培训，确保所有护理人员具备紧急救护技能，保障客户安全。',
    icon: <CPRIcon sx={{ fontSize: 48 }} />,
    color: '#dc2626',
    duration: '年度更新',
    certification: 'CPR认证',
    features: [
      '心肺复苏基础理论与实践',
      '胸外按压标准技术',
      'AED自动除颤器使用',
      '气道管理与人工呼吸',
      '常见急救情况处理',
      '团队急救配合训练',
    ],
    price: '必修课程',
  },
  {
    id: 'manual',
    title: '客户信息手册',
    subtitle: 'Client Information Manual',
    description: '完整的客户信息手册，包含权利法案、隐私政策、护理标准等重要信息。',
    icon: <CertificateIcon sx={{ fontSize: 48 }} />,
    color: '#00c9a7',
    duration: '随时学习',
    certification: '必读材料',
    features: [
      '客户权利法案',
      '隐私保护政策(HIPAA)',
      '护理服务标准',
      '投诉处理程序',
      '紧急联系信息',
      '护理计划指导',
    ],
    price: '免费资源',
  },
]

function Training() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Allcare 员工培训
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          为 Allcare Health Care 员工提供专业的护理培训，确保高质量的居家护理服务
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
          Allcare 培训优势
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
              <GroupIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              注册护士监督
            </Typography>
            <Typography variant="body2" color="text.secondary">
              RN护士定期监督和指导护理质量
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
              <CertificateIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              CPR认证要求
            </Typography>
            <Typography variant="body2" color="text.secondary">
              所有护理人员必须持有CPR认证
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: 'success.main' }}>
              <ScheduleIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              年度培训
            </Typography>
            <Typography variant="body2" color="text.secondary">
              定期年度在职培训确保技能更新
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
              注重实际护理操作和客户服务
            </Typography>
          </Grid>
        </Grid>
      </Card>

      {/* Contact CTA */}
      <Card
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #377dff 0%, #00c9a7 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          需要培训支持？
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          联系我们获取培训资源或技术支持
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
            联系培训部门
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
            查看客户手册
          </Button>
        </Box>
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip
            label="电话: (240) 668-4666"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '0.9rem'
            }}
          />
          <Chip
            label="邮箱: allcaremd@outlook.com"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '0.9rem'
            }}
          />
        </Box>
      </Card>
    </Container>
  )
}

export default Training
