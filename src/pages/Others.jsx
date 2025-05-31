import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Schedule as ScheduleIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Assignment as AssignmentIcon,
  Help as HelpIcon,
  Feedback as FeedbackIcon,
  Security as SecurityIcon,
  Policy as PolicyIcon,
  ContactSupport as ContactSupportIcon,
  AccessTime as AccessTimeIcon,
  LocalHospital as EmergencyIcon,
  Close as CloseIcon,
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
            <DialogTitle>意见反馈</DialogTitle>
            <DialogContent>
              {submitSuccess ? (
                <Box textAlign="center" py={3}>
                  <CheckCircleIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    反馈提交成功！
                  </Typography>
                  <Typography color="text.secondary">
                    我们会尽快处理您的反馈
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 1 }}>
                  <TextField
                    select
                    fullWidth
                    label="反馈类型"
                    value={feedbackForm.type}
                    onChange={(e) => setFeedbackForm({...feedbackForm, type: e.target.value})}
                    SelectProps={{ native: true }}
                    sx={{ mb: 2 }}
                  >
                    <option value="">请选择反馈类型</option>
                    <option value="suggestion">工作建议</option>
                    <option value="problem">问题报告</option>
                    <option value="complaint">投诉</option>
                    <option value="praise">表扬</option>
                  </TextField>
                  <TextField
                    fullWidth
                    label="主题"
                    value={feedbackForm.subject}
                    onChange={(e) => setFeedbackForm({...feedbackForm, subject: e.target.value})}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="详细内容"
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="联系方式（可选）"
                    value={feedbackForm.contact}
                    onChange={(e) => setFeedbackForm({...feedbackForm, contact: e.target.value})}
                    placeholder="电话或邮箱"
                  />
                </Box>
              )}
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
          员工服务中心
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          为您提供便捷的工作支持和服务
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
          联系我们
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4} textAlign="center">
            <PhoneIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              电话
            </Typography>
            <Typography color="text.secondary">
              (240) 668-4666
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <EmailIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              邮箱
            </Typography>
            <Typography color="text.secondary">
              allcaremd@outlook.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <LocationIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              网站
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
        <DialogActions sx={{ p: 3 }}>
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
