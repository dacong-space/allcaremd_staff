import React, { useState } from 'react'
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Rating,
  Chip,
  Slide,
} from '@mui/material'
import {
  Feedback as FeedbackIcon,
  Send as SendIcon,
  Close as CloseIcon,
} from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function FeedbackWidget() {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState({
    rating: 0,
    category: '',
    message: '',
    contact: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { label: '页面设计', value: 'design' },
    { label: '功能建议', value: 'feature' },
    { label: '内容质量', value: 'content' },
    { label: '使用体验', value: 'experience' },
    { label: '技术问题', value: 'technical' },
    { label: '其他', value: 'other' },
  ]

  const handleSubmit = () => {
    // 这里可以添加实际的提交逻辑
    console.log('提交反馈:', feedback)
    setSubmitted(true)
    
    // 模拟提交成功
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
      setFeedback({ rating: 0, category: '', message: '', contact: '' })
    }, 2000)
  }

  const handleClose = () => {
    setOpen(false)
    setSubmitted(false)
    setFeedback({ rating: 0, category: '', message: '', contact: '' })
  }

  const isValid = feedback.rating > 0 && feedback.category && feedback.message.trim()

  return (
    <>
      {/* 浮动反馈按钮 */}
      <Fab
        color="primary"
        aria-label="feedback"
        sx={{
          position: 'fixed',
          bottom: 100,
          right: 24,
          bgcolor: '#87ceeb',
          '&:hover': { bgcolor: '#7bb8d9' },
          zIndex: 1000,
        }}
        onClick={() => setOpen(true)}
      >
        <FeedbackIcon />
      </Fab>

      {/* 反馈对话框 */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">
            {submitted ? '感谢您的反馈！' : '页面反馈'}
          </Typography>
          <Button onClick={handleClose} size="small">
            <CloseIcon />
          </Button>
        </DialogTitle>

        <DialogContent>
          {submitted ? (
            <Box textAlign="center" py={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                反馈提交成功！
              </Typography>
              <Typography color="text.secondary">
                我们会认真考虑您的建议，感谢您的支持！
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 1 }}>
              {/* 评分 */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  整体评价 *
                </Typography>
                <Rating
                  value={feedback.rating}
                  onChange={(_, value) => setFeedback({ ...feedback, rating: value })}
                  size="large"
                />
              </Box>

              {/* 反馈类别 */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  反馈类别 *
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {categories.map((cat) => (
                    <Chip
                      key={cat.value}
                      label={cat.label}
                      clickable
                      variant={feedback.category === cat.value ? 'filled' : 'outlined'}
                      color={feedback.category === cat.value ? 'primary' : 'default'}
                      onClick={() => setFeedback({ ...feedback, category: cat.value })}
                    />
                  ))}
                </Box>
              </Box>

              {/* 详细反馈 */}
              <TextField
                fullWidth
                multiline
                rows={4}
                label="详细反馈 *"
                placeholder="请详细描述您的建议或遇到的问题..."
                value={feedback.message}
                onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                sx={{ mb: 3 }}
              />

              {/* 联系方式 */}
              <TextField
                fullWidth
                label="联系方式（可选）"
                placeholder="如需回复，请留下邮箱或电话"
                value={feedback.contact}
                onChange={(e) => setFeedback({ ...feedback, contact: e.target.value })}
              />
            </Box>
          )}
        </DialogContent>

        {!submitted && (
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={handleClose} variant="outlined">
              取消
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              startIcon={<SendIcon />}
              disabled={!isValid}
              sx={{ bgcolor: '#87ceeb', '&:hover': { bgcolor: '#7bb8d9' } }}
            >
              提交反馈
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  )
}

export default FeedbackWidget
