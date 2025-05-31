import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  Grid,
  Button,
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
  Assignment as CertificateIcon,
  Group as GroupIcon,
  MenuBook as MenuBookIcon,
} from '@mui/icons-material'

const trainingPrograms = [
  {
    id: 'pca',
    title: 'PCA专业培训',
    subtitle: 'Personal Care Assistant Training',
    description: 'Allcare Health Care 专业的个人护理助理培训课程，专注于ADLs协助、安全护理和客户沟通技巧。',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
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
    schedules: [
      { date: '2024年1月16日', time: '上午 9:00-12:00', status: '即将开始' },
      { date: '2024年2月20日', time: '下午 2:00-5:00', status: '报名中' },
      { date: '2024年3月18日', time: '上午 10:00-1:00', status: '预约中' },
    ],
  },
  {
    id: 'cpr',
    title: 'CPR & 急救培训',
    subtitle: 'CPR & First Aid Certification',
    description: '心肺复苏术和急救培训，确保所有护理人员具备紧急救护技能，保障客户安全。',
    icon: <CPRIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
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
    schedules: [
      { date: '2024年1月22日', time: '上午 8:30-11:30', status: '即将开始' },
      { date: '2024年2月25日', time: '下午 1:30-4:30', status: '报名中' },
      { date: '2024年3月25日', time: '上午 9:30-12:30', status: '预约中' },
    ],
  },
  {
    id: 'handbook',
    title: '客户信息手册',
    subtitle: 'Client Information Handbook',
    description: '为护理人员提供客户权利、隐私保护和护理标准等重要信息，确保合规的护理服务。',
    icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    duration: '随时学习',
    certification: '信息资源',
    features: [
      '客户权利法案',
      '隐私保护政策(HIPAA)',
      '护理服务标准',
      '投诉处理程序',
      '紧急联系信息',
      '护理计划指导',
    ],
    price: '免费资源',
    schedules: [
      { date: '2024年1月18日', time: '下午 3:00-5:00', status: '即将开始' },
      { date: '2024年2月28日', time: '上午 10:00-12:00', status: '报名中' },
      { date: '2024年3月20日', time: '下午 2:30-4:30', status: '预约中' },
    ],
  },
]

function Training() {
  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(135, 206, 235, 0.05) 100%)',
          pt: { xs: 6, md: 8 },
          pb: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 背景装饰 */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(135, 206, 235, 0.05))',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.08), rgba(135, 206, 235, 0.03))',
            filter: 'blur(40px)',
          }}
        />

        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3 }}>
          <Box textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
            <Chip
              label="专业培训"
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
              Allcare 员工培训
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              为 Allcare Health Care 员工提供专业的护理培训，确保高质量的居家护理服务
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>

        {/* Training Programs */}
        <Grid container spacing={4} sx={{ mb: 8, alignItems: 'stretch' }}> {/* 添加 alignItems: 'stretch' */}
          {trainingPrograms.map((program) => (
            <Grid item xs={12} md={4} key={program.id} sx={{ display: 'flex' }}> {/* 添加 display: 'flex' */}
              <Card
                sx={{
                  height: '100%', // 改为100%高度，让Grid控制高度
                  width: '100%', // 确保宽度100%
                  minHeight: 1450, // 设置最小高度
                  display: 'grid', // 使用grid布局
                  gridTemplateRows: 'auto auto 1fr auto', // 头部、信息、内容(可伸缩)、底部
                  position: 'relative',
                  overflow: 'hidden', // 改为hidden，确保装饰线不超出边框
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(135, 206, 235, 0.15)',
                  border: '1px solid rgba(135, 206, 235, 0.1)',
                  // 完全移除过渡动画，确保无跳动效果
                  '&:hover': {
                    // 完全静态，无任何动画效果
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 6,
                    background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                    borderTopLeftRadius: 4, // 添加圆角，与卡片保持一致
                    borderTopRightRadius: 4,
                  },
                }}
              >
                {/* Header Section */}
                <Box sx={{
                  p: 5,
                  pb: 4,
                  background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.03) 0%, rgba(135, 206, 235, 0.01) 100%)',
                }}>
                  <Box textAlign="center">
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        mx: 'auto',
                        mb: 3,
                        borderRadius: '22px',
                        background: `linear-gradient(135deg, ${program.color}15, ${program.color}08)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${program.color}20`,
                      }}
                    >
                      <Box sx={{ fontSize: '2.2rem', color: program.color }}>
                        {program.icon}
                      </Box>
                    </Box>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: '#2c3e50',
                        mb: 2,
                        fontSize: '1.8rem',
                      }}
                    >
                      {program.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      gutterBottom
                      sx={{ fontWeight: 500, mb: 3, fontSize: '1.1rem' }}
                    >
                      {program.subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, fontSize: '1rem' }}
                    >
                      {program.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Info Section */}
                <Box sx={{ px: 5, py: 4, minHeight: 180 }}>
                  <Grid container spacing={3} sx={{ height: '100%' }}>
                    <Grid item xs={6} sx={{ display: 'flex' }}>
                      <Box
                        textAlign="center"
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          bgcolor: 'rgba(135, 206, 235, 0.05)',
                          border: '1px solid rgba(135, 206, 235, 0.1)',
                          height: 150, // 增加并统一所有小卡片高度
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <ScheduleIcon sx={{ color: program.color, fontSize: '1.8rem' }} />
                        </Box>
                        <Box sx={{
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                            课程时长
                          </Typography>
                        </Box>
                        <Box sx={{
                          height: 32,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          px: 1,
                        }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              fontSize: '1.1rem',
                              textAlign: 'center',
                              lineHeight: 1.2,
                            }}
                          >
                            {program.duration}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex' }}>
                      <Box
                        textAlign="center"
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          bgcolor: 'rgba(135, 206, 235, 0.05)',
                          border: '1px solid rgba(135, 206, 235, 0.1)',
                          height: 150, // 增加并统一所有小卡片高度
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <CertificateIcon sx={{ color: program.color, fontSize: '1.8rem' }} />
                        </Box>
                        <Box sx={{
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                            认证类型
                          </Typography>
                        </Box>
                        <Box sx={{
                          height: 32,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          px: 1,
                        }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              fontSize: '1.1rem',
                              textAlign: 'center',
                              lineHeight: 1.2,
                            }}
                          >
                            {program.certification}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Content Section */}
                <Box sx={{ px: 5, flexGrow: 1, pb: 2, pt: 6 }}> {/* 适中的顶部间距 */}
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#2c3e50',
                      mb: 4, // 恢复标题下方间距
                      fontSize: '1.3rem',
                    }}
                  >
                    课程内容
                  </Typography>
                  <List sx={{ py: 0 }}>
                    {program.features.map((feature, featureIndex) => (
                      <ListItem
                        key={featureIndex}
                        sx={{
                          py: featureIndex === program.features.length - 1 ? 0.4 : 0.8, // 最后一项减小间距
                          px: 0,
                          '&:hover': {
                            bgcolor: 'rgba(135, 206, 235, 0.05)',
                            borderRadius: 2,
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 32 }}> {/* 减小图标区域宽度 */}
                          <CheckIcon
                            sx={{
                              color: program.color,
                              fontSize: '1.2rem', // 稍微减小图标大小
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body1',
                            sx: {
                              lineHeight: 1.5, // 减小行高
                              fontSize: '0.95rem', // 稍微减小字体大小
                              fontWeight: 400,
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Training Schedule Section */}
                <Box sx={{ px: 5, py: 3, borderTop: '1px solid rgba(135, 206, 235, 0.1)' }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#2c3e50',
                      mb: 2,
                      fontSize: '1.1rem',
                    }}
                  >
                    下次培训时间
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {program.schedules.map((schedule, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: index === 0 ? 'rgba(135, 206, 235, 0.08)' : 'rgba(135, 206, 235, 0.03)',
                          border: `1px solid ${index === 0 ? 'rgba(135, 206, 235, 0.2)' : 'rgba(135, 206, 235, 0.1)'}`,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(135, 206, 235, 0.1)',
                            borderColor: 'rgba(135, 206, 235, 0.3)',
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: 600,
                              color: '#2c3e50',
                              fontSize: '0.95rem',
                            }}
                          >
                            {schedule.date}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: '0.85rem' }}
                          >
                            {schedule.time}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            bgcolor: index === 0 ? program.color : 'rgba(135, 206, 235, 0.15)',
                            color: index === 0 ? 'white' : program.color,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.75rem',
                            }}
                          >
                            {schedule.status}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Footer Section */}
                <Box sx={{
                  p: 4,
                  pt: 3,
                  pb: 4,
                  textAlign: 'center',
                  borderTop: '1px solid rgba(135, 206, 235, 0.1)',
                  background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.02) 0%, rgba(135, 206, 235, 0.01) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 2, // 使用gap代替固定高度
                }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: program.color,
                      fontSize: '2rem',
                      mb: 1, // 减小底部间距
                    }}
                  >
                    {program.price}
                  </Typography>

                  {/* 分隔线 */}
                  <Box sx={{
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${program.color}30, transparent)`,
                    mx: 4,
                    mb: 1, // 减小底部间距
                  }} />

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      height: 48, // 减小按钮高度
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)`,
                      boxShadow: `0 4px 20px ${program.color}40`,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        // 完全静态，无任何动画效果
                      },
                      // 完全移除过渡动画
                    }}
                  >
                    立即报名
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why Choose Us */}
        <Box sx={{ mb: 8 }}>
          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#2c3e50',
                mb: 2,
              }}
            >
              Allcare 培训优势
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
            >
              专业的培训体系确保高质量的护理服务
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <GroupIcon />,
                title: '注册护士监督',
                description: 'RN护士定期监督和指导护理质量',
                color: '#87ceeb',
              },
              {
                icon: <CertificateIcon />,
                title: 'CPR认证要求',
                description: '所有护理人员必须持有CPR认证',
                color: '#87ceeb',
              },
              {
                icon: <ScheduleIcon />,
                title: '年度培训',
                description: '定期年度在职培训确保技能更新',
                color: '#87ceeb',
              },
              {
                icon: <CheckIcon />,
                title: '实践导向',
                description: '注重实际护理操作和客户服务',
                color: '#87ceeb',
              },
            ].map((advantage, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid rgba(135, 206, 235, 0.15)',
                    boxShadow: '0 4px 20px rgba(135, 206, 235, 0.1)',
                    // 完全移除过渡动画，确保无跳动效果
                    '&:hover': {
                      // 完全静态，无任何动画效果
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${advantage.color}15, ${advantage.color}08)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${advantage.color}20`,
                    }}
                  >
                    <Box sx={{ fontSize: '2rem', color: advantage.color }}>
                      {advantage.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#2c3e50',
                      mb: 2,
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {advantage.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact CTA */}
        <Card
          sx={{
            p: 6,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #87ceeb 0%, #6bb6ff 100%)',
            color: 'white',
            boxShadow: '0 20px 40px rgba(135, 206, 235, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              需要培训支持？
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
              联系我们获取培训资源或技术支持
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#87ceeb',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    // 完全静态，无任何动画效果
                  },
                  // 完全移除过渡动画
                }}
              >
                联系培训部门
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  borderWidth: 2,
                  '&:hover': {
                    // 完全静态，无任何动画效果
                  },
                  // 完全移除过渡动画
                }}
              >
                查看客户手册
              </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Chip
                label="电话: (240) 668-4666"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <Chip
                label="邮箱: allcaremd@outlook.com"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              />
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  )
}

export default Training
