import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Schedule as ScheduleIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Security as SecurityIcon,
  Policy as PolicyIcon,
  AccessTime as AccessTimeIcon,
  LocalHospital as EmergencyIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material'

function Others() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [openDialog, setOpenDialog] = useState(null)
  const [feedbackForm, setFeedbackForm] = useState({
    type: '',
    subject: '',
    message: '',
    contact: ''
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleDialogOpen = (dialogType) => {
    setOpenDialog(dialogType)
  }

  const handleDialogClose = () => {
    setOpenDialog(null)
    setSubmitSuccess(false)
    setFeedbackForm({ type: '', subject: '', message: '', contact: '' })
  }

  const handleFeedbackSubmit = () => {
    // 这里可以添加实际的提交逻辑
    setSubmitSuccess(true)
    setTimeout(() => {
      handleDialogClose()
    }, 2000)
  }

  const quickAccessItems = [
    {
      title: '工作排班',
      description: '查看您的工作时间表和排班安排',
      icon: <ScheduleIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
      action: 'schedule',
      color: '#3b82f6'
    },
    {
      title: '紧急联系',
      description: '24小时紧急联系方式和应急程序',
      icon: <EmergencyIcon sx={{ fontSize: 40, color: '#ef4444' }} />,
      action: 'emergency',
      color: '#ef4444'
    },
    {
      title: '意见反馈',
      description: '提交工作建议或问题反馈',
      icon: <FeedbackIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      action: 'feedback',
      color: '#10b981'
    },
    {
      title: '政策制度',
      description: '公司政策、制度和操作规范',
      icon: <PolicyIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      action: 'policy',
      color: '#8b5cf6'
    },
    {
      title: '安全须知',
      description: '工作安全指南和注意事项',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
      action: 'safety',
      color: '#f59e0b'
    },
    {
      title: '技术支持',
      description: '系统使用帮助和技术问题解决',
      icon: <HelpIcon sx={{ fontSize: 40, color: '#06b6d4' }} />,
      action: 'support',
      color: '#06b6d4'
    }
  ]

  const emergencyContacts = [
    { name: '公司总部', phone: '(240) 668-4666', type: '工作时间' },
    { name: '紧急热线', phone: '(240) 668-4666', type: '24小时' },
    { name: '医疗急救', phone: '911', type: '紧急情况' },
    { name: '主管经理', phone: '(240) 668-4666', type: '工作相关' }
  ]

  const scheduleInfo = [
    { time: '周一 - 周五', schedule: '09:00 AM - 05:00 PM', status: '正常班次' },
    { time: '周六', schedule: '休息', status: '休息日' },
    { time: '周日', schedule: '休息', status: '休息日' },
    { time: '节假日', schedule: '按需安排', status: '特殊安排' }
  ]

  const renderDialogContent = () => {
    switch (openDialog) {
      case 'schedule':
        return (
          <>
            <DialogTitle>工作排班信息</DialogTitle>
            <DialogContent>
              <List>
                {scheduleInfo.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <AccessTimeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.time}
                        secondary={`${item.schedule} - ${item.status}`}
                      />
                    </ListItem>
                    {index < scheduleInfo.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              <Alert severity="info" sx={{ mt: 2 }}>
                具体排班安排请联系您的直属主管确认
              </Alert>
            </DialogContent>
          </>
        )

      case 'emergency':
        return (
          <>
            <DialogTitle sx={{ color: '#ef4444' }}>紧急联系方式</DialogTitle>
            <DialogContent>
              <List>
                {emergencyContacts.map((contact, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="error" />
                      </ListItemIcon>
                      <ListItemText
                        primary={contact.name}
                        secondary={
                          <Box>
                            <Typography variant="body2" fontWeight="bold">
                              {contact.phone}
                            </Typography>
                            <Chip
                              label={contact.type}
                              size="small"
                              color={contact.type === '24小时' ? 'error' : 'default'}
                              sx={{ mt: 0.5 }}
                            />
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < emergencyContacts.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </DialogContent>
          </>
        )

      case 'feedback':
        return (
          <>
            <DialogTitle sx={{ color: '#10b981' }}>意见反馈</DialogTitle>
            <DialogContent>
              {submitSuccess ? (
                <Box textAlign="center" py={4}>
                  <CheckCircleIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    反馈提交成功
                  </Typography>
                  <Typography color="text.secondary">
                    感谢您的宝贵意见，我们会认真处理您的反馈
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#10b981', fontWeight: 'bold' }}>
                    员工意见反馈系统
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      反馈类型
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          select
                          fullWidth
                          label="请选择反馈类型"
                          value={feedbackForm.type}
                          onChange={(e) => setFeedbackForm({...feedbackForm, type: e.target.value})}
                          sx={{ mb: 2 }}
                        >
                          <MenuItem value="suggestion">工作建议</MenuItem>
                          <MenuItem value="complaint">问题投诉</MenuItem>
                          <MenuItem value="question">疑问咨询</MenuItem>
                          <MenuItem value="praise">表扬反馈</MenuItem>
                        </TextField>
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      反馈主题
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          fullWidth
                          label="主题"
                          value={feedbackForm.subject}
                          onChange={(e) => setFeedbackForm({...feedbackForm, subject: e.target.value})}
                          placeholder="请简要描述反馈主题"
                          sx={{ mb: 2 }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      详细内容
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="详细内容"
                          value={feedbackForm.message}
                          onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                          placeholder="请详细描述您的反馈内容，包括具体情况、建议或问题"
                          sx={{ mb: 2 }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      联系方式
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="联系方式（可选）"
                          secondary="请留下您的电话或邮箱，以便我们及时回复"
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          fullWidth
                          label="联系方式（可选）"
                          value={feedbackForm.contact}
                          onChange={(e) => setFeedbackForm({...feedbackForm, contact: e.target.value})}
                          placeholder="电话或邮箱"
                        />
                      </ListItem>
                    </List>
                  </Box>

                  <Alert severity="info" sx={{ mt: 3 }}>
                    <Typography variant="body2">
                      我们重视每一条反馈，会在1-2个工作日内给予回复。紧急问题请直接拨打 (240) 668-4666。
                    </Typography>
                  </Alert>
                </Box>
              )}
            </DialogContent>
          </>
        )

      case 'policy':
        return (
          <>
            <DialogTitle sx={{ color: '#8b5cf6' }}>政策制度</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#8b5cf6', fontWeight: 'bold' }}>
                公司政策与制度规范
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  📋 员工行为准则
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="专业服务态度"
                      secondary="始终保持专业、友善、耐心的服务态度，尊重每一位客户"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="准时到岗"
                      secondary="按时到达工作地点，如有特殊情况需提前通知主管"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="保密义务"
                      secondary="严格保护客户隐私信息，不得向第三方泄露任何客户资料"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🏥 护理服务标准
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="个人卫生护理"
                      secondary="协助客户进行洗浴、更衣、口腔护理等日常卫生活动"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="生活起居协助"
                      secondary="帮助客户进行日常活动，如用餐、行走、转移等"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="健康监测"
                      secondary="观察并记录客户的身体状况变化，及时报告异常情况"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📞 沟通与报告制度
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="定期汇报"
                      secondary="每日向主管汇报客户状况和服务完成情况"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="紧急情况处理"
                      secondary="遇到紧急情况立即联系主管和相关医疗机构"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="家属沟通"
                      secondary="与客户家属保持良好沟通，及时反馈护理情况"
                    />
                  </ListItem>
                </List>
              </Box>

              <Alert severity="warning" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>重要提醒：</strong>所有员工必须严格遵守公司政策制度，违反者将面临相应的纪律处分。
                </Typography>
              </Alert>
            </DialogContent>
          </>
        )

      case 'safety':
        return (
          <>
            <DialogTitle sx={{ color: '#f59e0b' }}>安全须知</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#f59e0b', fontWeight: 'bold' }}>
                工作安全指南与注意事项
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  🛡️ 个人安全防护
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="佩戴防护用品"
                      secondary="根据护理需要正确佩戴手套、口罩等防护用品"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="手部卫生"
                      secondary="护理前后必须彻底清洁双手，使用洗手液或消毒剂"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="避免交叉感染"
                      secondary="严格按照感染控制程序操作，防止疾病传播"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🏠 环境安全检查
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="防跌倒措施"
                      secondary="检查地面是否湿滑，确保通道畅通，协助客户安全行走"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="用电安全"
                      secondary="检查电器设备是否正常，避免使用损坏的电器"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="药物安全"
                      secondary="协助客户按医嘱服药，注意药物保存和有效期"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🚨 紧急情况处理
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="医疗急救"
                      secondary="发现客户身体异常立即拨打911，同时通知家属和主管"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="意外伤害"
                      secondary="如发生跌倒、烫伤等意外，立即采取急救措施并报告"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="火灾逃生"
                      secondary="熟悉客户住所的逃生路线，确保在紧急情况下能安全撤离"
                    />
                  </ListItem>
                </List>
              </Box>

              <Alert severity="error" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>紧急联系电话：</strong>医疗急救 911 | 公司热线 (240) 668-4666
                </Typography>
              </Alert>
            </DialogContent>
          </>
        )

      case 'support':
        return (
          <>
            <DialogTitle sx={{ color: '#06b6d4' }}>技术支持</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#06b6d4', fontWeight: 'bold' }}>
                系统使用帮助与技术问题解决
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  💻 系统使用指南
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="登录系统"
                      secondary="使用公司提供的用户名和密码登录员工系统"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="查看排班"
                      secondary="在系统中查看个人工作排班和客户信息"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="提交报告"
                      secondary="按要求在系统中提交工作报告和客户护理记录"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📱 移动应用使用
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="下载APP"
                      secondary="从应用商店下载公司官方移动应用"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="实时打卡"
                      secondary="使用手机APP进行上下班打卡和位置签到"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="接收通知"
                      secondary="及时接收公司通知、排班变更等重要信息"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🔧 常见问题解决
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="忘记密码"
                      secondary="联系IT支持重置密码，或使用系统的密码重置功能"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="系统故障"
                      secondary="遇到系统问题时，先尝试刷新页面或重新登录"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="数据同步"
                      secondary="确保网络连接正常，数据会自动同步到服务器"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📞 技术支持联系方式
                </Typography>
                <Box sx={{ bgcolor: '#f0f9ff', p: 2, borderRadius: 1, mt: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>IT支持热线：</strong> (240) 668-4666 转分机 IT
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>邮箱支持：</strong> it-support@allcaremd.com
                  </Typography>
                  <Typography variant="body2">
                    <strong>支持时间：</strong> 周一至周五 9:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </Box>

              <Alert severity="info" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>提示：</strong>遇到技术问题时，请详细描述问题现象，以便技术人员快速定位和解决。
                </Typography>
              </Alert>
            </DialogContent>
          </>
        )

      default:
        return (
          <>
            <DialogTitle>{openDialog}</DialogTitle>
            <DialogContent>
              <Typography>
                此功能正在开发中，敬请期待...
              </Typography>
            </DialogContent>
          </>
        )
    }
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 4 }}>
      {/* 页面标题 */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Employee Services Center
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          Provide convenient work support and services
        </Typography>
      </Box>

      {/* 快速访问卡片 */}
      <Grid container spacing={3}>
        {quickAccessItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 24px rgba(0, 0, 0, 0.1)`,
                  borderColor: item.color,
                },
              }}
              onClick={() => handleDialogOpen(item.action)}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Box mb={2}>
                  {item.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 联系信息 */}
      <Paper sx={{ mt: 6, p: 4, background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
          Contact Us 
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} textAlign="center">
            <PhoneIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Phone      
            </Typography>
            <Typography color="text.secondary">
              (240) 668-4666
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <EmailIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography color="text.secondary">
              allcaremd@outlook.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <LocationIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Website
            </Typography>
            <Typography color="text.secondary">
              allcaremd.com
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* 对话框 */}
      <Dialog
        open={Boolean(openDialog)}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
      >
        {renderDialogContent()}
        <DialogActions>
          {openDialog === 'feedback' && !submitSuccess && (
            <Button
              onClick={handleFeedbackSubmit}
              variant="contained"
              startIcon={<SendIcon />}
              disabled={!feedbackForm.type || !feedbackForm.subject || !feedbackForm.message}
            >
              提交反馈
            </Button>
          )}
          <Button onClick={handleDialogClose} variant="outlined">
            {submitSuccess ? '完成' : '关闭'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Others
