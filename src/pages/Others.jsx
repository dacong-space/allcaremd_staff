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
      title: 'Work Schedule',
      description: 'View our work hours and shift assignments',
      icon: <ScheduleIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
      action: 'schedule',
      color: '#3b82f6'
    },
    {
      title: 'Emergency Contacts',
      description: '24/7 emergency contact info and response procedures',
      icon: <EmergencyIcon sx={{ fontSize: 40, color: '#ef4444' }} />,
      action: 'emergency',
      color: '#ef4444'
    },
    {
      title: 'Feedback & Suggestions',
      description: 'Submit suggestions or report work-related issues',
      icon: <FeedbackIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      action: 'feedback',
      color: '#10b981'
    },
    {
      title: 'Policies & Procedures',
      description: 'Company policies, procedures, and operating standards',
      icon: <PolicyIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      action: 'policy',
      color: '#8b5cf6'
    },
    {
      title: 'Safety Guidelines',
      description: 'Workplace safety instructions and precautions',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
      action: 'safety',
      color: '#f59e0b'
    },
    {
      title: 'Technical Support',
      description: 'System usage help and technical issue resolution',
      icon: <HelpIcon sx={{ fontSize: 40, color: '#06b6d4' }} />,
      action: 'support',
      color: '#06b6d4'
    }
  ]

  const emergencyContacts = [
    { name: 'Corporate Headquarters', phone: '(240) 668-4666', type: 'Business Hours' },
    // { name: 'Emergency Hotline', phone: '(240) 668-4666', type: '24/7 Available' },
    { name: 'Medical Emergency', phone: '911', type: 'Emergency Only' },
    { name: 'Supervisor Manager', phone: '(240) 668-4666', type: 'Work Related' }
  ]

  const scheduleInfo = [
    { time: 'Monday - Friday', schedule: '09:00 AM - 05:00 PM', status: 'Regular Shift' },
    { time: 'Saturday', schedule: 'Off', status: 'Day Off' },
    { time: 'Sunday', schedule: 'Off', status: 'Day Off' },
    { time: 'Holidays', schedule: 'As Needed', status: 'Special Arrangement' }
  ]

  const renderDialogContent = () => {
    switch (openDialog) {
      case 'schedule':
        return (
          <>
            <DialogTitle>Work Schedule Information</DialogTitle>
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
                Please contact your direct supervisor to confirm specific schedule arrangements
              </Alert>
            </DialogContent>
          </>
        )

      case 'emergency':
        return (
          <>
            <DialogTitle sx={{ color: '#ef4444' }}>Emergency Contacts</DialogTitle>
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
                              color={contact.type === '24/7 Available' ? 'error' : 'default'}
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
            <DialogTitle sx={{ color: '#10b981' }}>Feedback & Suggestions</DialogTitle>
            <DialogContent>
              {submitSuccess ? (
                <Box textAlign="center" py={4}>
                  <CheckCircleIcon sx={{ fontSize: 60, color: '#10b981', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Feedback Submitted Successfully
                  </Typography>
                  <Typography color="text.secondary">
                    Thank you for your valuable feedback. We will carefully review and address your suggestions.
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ color: '#10b981', fontWeight: 'bold' }}>
                    Employee Feedback System
                  </Typography>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      Feedback Type
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          select
                          fullWidth
                          label="Please select feedback type"
                          value={feedbackForm.type}
                          onChange={(e) => setFeedbackForm({...feedbackForm, type: e.target.value})}
                          sx={{ mb: 2 }}
                        >
                          <MenuItem value="suggestion">Work Suggestion</MenuItem>
                          <MenuItem value="complaint">Issue Complaint</MenuItem>
                          <MenuItem value="question">Question/Inquiry</MenuItem>
                          <MenuItem value="praise">Praise/Recognition</MenuItem>
                        </TextField>
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      Subject
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          fullWidth
                          label="Subject"
                          value={feedbackForm.subject}
                          onChange={(e) => setFeedbackForm({...feedbackForm, subject: e.target.value})}
                          placeholder="Please briefly describe the feedback subject"
                          sx={{ mb: 2 }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      Detailed Content
                    </Typography>
                    <List dense>
                      <ListItem>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Detailed Content"
                          value={feedbackForm.message}
                          onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                          placeholder="Please provide detailed feedback including specific situations, suggestions, or issues"
                          sx={{ mb: 2 }}
                        />
                      </ListItem>
                    </List>

                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                      Contact Information
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Contact Information (Optional)"
                          secondary="Please provide your phone number or email for timely response"
                        />
                      </ListItem>
                      <ListItem>
                        <TextField
                          fullWidth
                          label="Contact Information (Optional)"
                          value={feedbackForm.contact}
                          onChange={(e) => setFeedbackForm({...feedbackForm, contact: e.target.value})}
                          placeholder="Phone or Email"
                        />
                      </ListItem>
                    </List>
                  </Box>

                  <Alert severity="info" sx={{ mt: 3 }}>
                    <Typography variant="body2">
                      We value every feedback and will respond within 1-2 business days. For urgent matters, please call (240) 668-4666 directly.
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
            <DialogTitle sx={{ color: '#8b5cf6' }}>Policies & Procedures</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#8b5cf6', fontWeight: 'bold' }}>
                Company Policies and Procedural Standards
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  📋 Employee Code of Conduct
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Professional Service Attitude"
                      secondary="Always maintain professional, friendly, and patient service attitude, respecting every client"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Punctuality"
                      secondary="Arrive at work location on time; notify supervisor in advance for any special circumstances"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Confidentiality Obligation"
                      secondary="Strictly protect client privacy information; do not disclose any client data to third parties"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🏥 Care Service Standards
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Personal Hygiene Care"
                      secondary="Assist clients with bathing, dressing, oral care, and other daily hygiene activities"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Daily Living Assistance"
                      secondary="Help clients with daily activities such as eating, walking, transferring, etc."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Health Monitoring"
                      secondary="Observe and record changes in client's physical condition, report abnormalities promptly"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📞 Communication & Reporting System
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Regular Reporting"
                      secondary="Report client status and service completion to supervisor daily"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Emergency Response"
                      secondary="Immediately contact supervisor and relevant medical institutions in emergency situations"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Family Communication"
                      secondary="Maintain good communication with client families, provide timely feedback on care status"
                    />
                  </ListItem>
                </List>
              </Box>

              <Alert severity="warning" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>Important Notice:</strong> All employees must strictly comply with company policies and procedures. Violations will result in appropriate disciplinary action.
                </Typography>
              </Alert>
            </DialogContent>
          </>
        )

      case 'safety':
        return (
          <>
            <DialogTitle sx={{ color: '#f59e0b' }}>Safety Guidelines</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#f59e0b', fontWeight: 'bold' }}>
                Workplace Safety Guidelines and Precautions
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  🛡️ Personal Safety Protection
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Wear Protective Equipment"
                      secondary="Properly wear gloves, masks, and other protective equipment as required for care"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Hand Hygiene"
                      secondary="Thoroughly clean hands before and after care using hand soap or sanitizer"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Prevent Cross-Infection"
                      secondary="Strictly follow infection control procedures to prevent disease transmission"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🏠 Environmental Safety Inspection
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Fall Prevention Measures"
                      secondary="Check for slippery floors, ensure clear pathways, assist clients with safe walking"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Electrical Safety"
                      secondary="Check electrical equipment for proper function, avoid using damaged appliances"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Medication Safety"
                      secondary="Assist clients with medication per doctor's orders, monitor storage and expiration dates"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🚨 Emergency Response
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Medical Emergency"
                      secondary="Call 911 immediately if client shows physical abnormalities, notify family and supervisor"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Accidental Injury"
                      secondary="For falls, burns, or other accidents, immediately provide first aid and report incident"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Fire Evacuation"
                      secondary="Familiarize with client's residence evacuation routes, ensure safe evacuation in emergencies"
                    />
                  </ListItem>
                </List>
              </Box>

              <Alert severity="error" sx={{ mt: 3 }}>
                <Typography variant="body2">
                  <strong>Emergency Contact Numbers:</strong> Medical Emergency 911 | Company Hotline (240) 668-4666
                </Typography>
              </Alert>
            </DialogContent>
          </>
        )

      case 'support':
        return (
          <>
            <DialogTitle sx={{ color: '#06b6d4' }}>Technical Support</DialogTitle>
            <DialogContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#06b6d4', fontWeight: 'bold' }}>
                System Usage Help and Technical Issue Resolution
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  💻 System Usage Guide
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="System Login"
                      secondary="Use company-provided username and password to log into the employee system"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="View Schedule"
                      secondary="Check personal work schedule and client information in the system"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Submit Reports"
                      secondary="Submit work reports and client care records in the system as required"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📱 Mobile Application Usage
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Download App"
                      secondary="Download the company's official mobile application from app store"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Real-time Clock In/Out"
                      secondary="Use mobile app for work clock in/out and location check-in"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Receive Notifications"
                      secondary="Receive company notifications, schedule changes, and other important information promptly"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  🔧 Common Issue Resolution
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Forgot Password"
                      secondary="Contact IT support to reset password, or use the system's password reset function"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="System Malfunction"
                      secondary="When encountering system issues, first try refreshing the page or logging in again"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Data Synchronization"
                      secondary="Ensure network connection is stable; data will automatically sync to the server"
                    />
                  </ListItem>
                </List>

                <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                  📞 Technical Support Contact
                </Typography>
                <Box sx={{ bgcolor: '#f0f9ff', p: 2, borderRadius: 1, mt: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    <strong>IT Support Hotline:</strong> (240) 668-4666 ext. IT
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <strong>Email Support:</strong> it-support@allcaremd.com
                  </Typography>
                  <Typography variant="body2">
                    <strong>Support Hours:</strong> Monday - Friday 9:00 AM - 6:00 PM
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
          Employee Service Center
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto', fontStyle: 'italic' }}
        >
          Your hub for essential tools, support, and resources
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
          Need Help? Get in Touch 
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
              Submit Feedback
            </Button>
          )}
          <Button onClick={handleDialogClose} variant="outlined">
            {submitSuccess ? 'Finish' : 'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Others
