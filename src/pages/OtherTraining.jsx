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
  Tabs,
  Tab,
  Badge,
} from '@mui/material'
import {
  School as SchoolIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  WorkspacePremium as CertificateIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
  Healing as HealingIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocalHospital as MedicalIcon,
  Elderly as ElderlyIcon,
  HealthAndSafety as HealthIcon,
  MenuBook as BookIcon,
} from '@mui/icons-material'

// 培训类别
const trainingCategories = [
  {
    id: 'specialized',
    label: '专业技能培训',
    count: 6
  },
  {
    id: 'safety',
    label: '安全培训',
    count: 4
  },
  {
    id: 'continuing',
    label: '继续教育',
    count: 8
  },
  {
    id: 'certification',
    label: '认证更新',
    count: 3
  }
]

// 专业技能培训课程
const specializedTraining = [
  {
    title: '痴呆症护理专训',
    duration: '8小时',
    description: '学习痴呆症患者的专业护理技巧和沟通方法',
    icon: <PsychologyIcon sx={{ color: '#8b5cf6' }} />,
    topics: [
      '痴呆症基础知识',
      '行为管理技巧',
      '安全环境创建',
      '家属沟通指导'
    ],
    price: '$120',
    nextDate: '2024年3月10日'
  },
  {
    title: '慢性病管理培训',
    duration: '6小时',
    description: '掌握糖尿病、高血压等慢性疾病的护理管理',
    icon: <HealingIcon sx={{ color: '#10b981' }} />,
    topics: [
      '血糖监测技巧',
      '血压管理',
      '药物管理',
      '饮食指导'
    ],
    price: '$95',
    nextDate: '2024年3月15日'
  },
  {
    title: '康复护理技能',
    duration: '10小时',
    description: '学习物理治疗辅助和康复护理技能',
    icon: <HealthIcon sx={{ color: '#3b82f6' }} />,
    topics: [
      '康复评估',
      '运动治疗辅助',
      '辅助器具使用',
      '进度记录'
    ],
    price: '$150',
    nextDate: '2024年3月20日'
  },
  {
    title: '临终关怀培训',
    duration: '4小时',
    description: '提供有尊严的临终护理和家属支持',
    icon: <ElderlyIcon sx={{ color: '#f59e0b' }} />,
    topics: [
      '临终护理原则',
      '疼痛管理',
      '心理支持',
      '家属指导'
    ],
    price: '$80',
    nextDate: '2024年3月25日'
  },
  {
    title: '营养与饮食管理',
    duration: '3小时',
    description: '学习老年人营养需求和特殊饮食管理',
    icon: <MedicalIcon sx={{ color: '#ef4444' }} />,
    topics: [
      '营养评估',
      '特殊饮食制备',
      '吞咽困难护理',
      '营养补充'
    ],
    price: '$65',
    nextDate: '2024年4月1日'
  },
  {
    title: '药物管理认证',
    duration: '5小时',
    description: '药物安全管理和给药技能培训',
    icon: <SecurityIcon sx={{ color: '#06b6d4' }} />,
    topics: [
      '药物安全原则',
      '给药技巧',
      '副作用识别',
      '记录管理'
    ],
    price: '$90',
    nextDate: '2024年4月5日'
  }
]

// 安全培训课程
const safetyTraining = [
  {
    title: '工作场所安全',
    duration: '2小时',
    description: '预防工作伤害和安全操作规程',
    topics: ['人体力学', '防跌倒措施', '感染控制', '紧急疏散'],
    price: '$45',
    nextDate: '2024年3月12日'
  },
  {
    title: '家庭安全评估',
    duration: '3小时',
    description: '识别和消除家庭安全隐患',
    topics: ['安全隐患识别', '环境改造建议', '辅助设备推荐', '安全计划制定'],
    price: '$60',
    nextDate: '2024年3月18日'
  },
  {
    title: '紧急情况处理',
    duration: '4小时',
    description: '各种紧急情况的应对和处理',
    topics: ['医疗急救', '火灾应对', '自然灾害', '暴力事件处理'],
    price: '$75',
    nextDate: '2024年3月22日'
  },
  {
    title: '个人防护培训',
    duration: '1.5小时',
    description: '正确使用个人防护设备',
    topics: ['PPE选择', '穿脱程序', '消毒清洁', '废物处理'],
    price: '$35',
    nextDate: '2024年3月28日'
  }
]

// 继续教育课程
const continuingEducation = [
  {
    title: '护理伦理与法律',
    duration: '2小时',
    description: '护理实践中的伦理和法律问题',
    topics: ['患者权利', '隐私保护', '知情同意', '法律责任'],
    price: '免费',
    nextDate: '2024年3月14日'
  },
  {
    title: '文化敏感性护理',
    duration: '3小时',
    description: '多元文化背景下的护理服务',
    topics: ['文化差异理解', '语言障碍处理', '宗教习俗尊重', '偏见消除'],
    price: '免费',
    nextDate: '2024年3月21日'
  },
  {
    title: '护理记录与文档',
    duration: '2小时',
    description: '准确完整的护理记录技能',
    topics: ['记录标准', '法律要求', '电子记录', '质量控制'],
    price: '免费',
    nextDate: '2024年3月26日'
  },
  {
    title: '压力管理与自我护理',
    duration: '2小时',
    description: '护理工作者的心理健康维护',
    topics: ['压力识别', '应对策略', '工作平衡', '团队支持'],
    price: '免费',
    nextDate: '2024年4月2日'
  }
]

function OtherTraining() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue)
  }

  const renderTrainingCards = (courses) => (
    <Grid container spacing={3}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
              {course.icon && (
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    mb: 2,
                    bgcolor: 'transparent',
                  }}
                >
                  {course.icon}
                </Avatar>
              )}
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {course.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  label={course.duration}
                  size="small"
                  sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}
                />
                <Chip
                  label={course.price}
                  size="small"
                  sx={{
                    bgcolor: course.price === '免费' ? '#e8f5e8' : '#fff3e0',
                    color: course.price === '免费' ? '#2e7d32' : '#f57c00'
                  }}
                />
              </Box>
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
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <ScheduleIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
                  下次开课：{course.nextDate}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    bgcolor: '#87ceeb',
                    '&:hover': { bgcolor: '#7bb8d9' },
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
  )

  const getCurrentCourses = () => {
    switch (selectedCategory) {
      case 0:
        return specializedTraining
      case 1:
        return safetyTraining
      case 2:
        return continuingEducation
      case 3:
        return [
          {
            title: 'PCA证书更新',
            duration: '4小时',
            description: 'PCA认证证书更新培训',
            topics: ['新政策更新', '技能复习', '考核测试', '证书颁发'],
            price: '$60',
            nextDate: '2024年4月8日'
          },
          {
            title: 'CPR证书更新',
            duration: '3小时',
            description: 'CPR认证证书更新培训',
            topics: ['技能复习', '新指南学习', '实践操作', '认证更新'],
            price: '$50',
            nextDate: '2024年4月12日'
          },
          {
            title: '急救证书更新',
            duration: '2小时',
            description: '急救技能认证更新',
            topics: ['急救技能复习', '新技术学习', '实践考核', '证书更新'],
            price: '$40',
            nextDate: '2024年4月15日'
          }
        ]
      default:
        return specializedTraining
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          其他专业培训
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          提供多样化的专业培训课程，包括专业技能提升、安全培训、继续教育和认证更新，
          帮助护理人员持续提升专业能力
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip
            icon={<SchoolIcon />}
            label="多种专业课程"
            sx={{ bgcolor: '#e3f2fd', color: '#1976d2', fontWeight: 600 }}
          />
          <Chip
            icon={<CertificateIcon />}
            label="认证培训"
            sx={{ bgcolor: '#e8f5e8', color: '#2e7d32', fontWeight: 600 }}
          />
          <Chip
            icon={<BookIcon />}
            label="继续教育学分"
            sx={{ bgcolor: '#fff3e0', color: '#f57c00', fontWeight: 600 }}
          />
        </Box>
      </Box>

      {/* 培训类别选择 */}
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 1 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
              },
            }}
          >
            {trainingCategories.map((category, index) => (
              <Tab
                key={category.id}
                label={
                  <Badge badgeContent={category.count} color="primary">
                    {category.label}
                  </Badge>
                }
              />
            ))}
          </Tabs>
        </Paper>
      </Box>

      {/* 培训课程展示 */}
      <Box sx={{ mb: 6 }}>
        {renderTrainingCards(getCurrentCourses())}
      </Box>

      {/* 培训优势 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          培训优势
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: '#e3f2fd' }}>
                <PersonIcon sx={{ color: '#1976d2', fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                专业讲师
              </Typography>
              <Typography variant="body2" color="text.secondary">
                经验丰富的专业讲师团队，提供高质量的培训服务
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: '#e8f5e8' }}>
                <CertificateIcon sx={{ color: '#2e7d32', fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                官方认证
              </Typography>
              <Typography variant="body2" color="text.secondary">
                提供官方认可的培训证书，符合行业标准要求
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: '#fff3e0' }}>
                <ScheduleIcon sx={{ color: '#f57c00', fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                灵活安排
              </Typography>
              <Typography variant="body2" color="text.secondary">
                多种时间安排选择，适应不同工作时间需求
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, bgcolor: '#ffebee' }}>
                <GroupIcon sx={{ color: '#c62828', fontSize: 30 }} />
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                小班教学
              </Typography>
              <Typography variant="body2" color="text.secondary">
                小班制教学，确保每位学员都能得到充分关注
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 联系信息 */}
      <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
          培训咨询与报名
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
              邮件报名
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

export default OtherTraining
