import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  CircularProgress,
  Alert,
} from '@mui/material'
import {
  Folder as FolderIcon,
  Description as FileIcon,
  Download as DownloadIcon,
  Search as SearchIcon,
  PersonAdd as OnboardingIcon,
  People as ClientIcon,
  Badge as EmployeeIcon,
  MoreHoriz as OthersIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material'
import { scanAllFiles, refreshCategory } from '../utils/dynamicFileDetector'

const fileCategories = [
  {
    id: 'onboarding',
    title: 'Employment Forms',
    description: 'Employee onboarding files and required forms',
    icon: <OnboardingIcon sx={{ fontSize: 48 }} />,
    color: '#5B9BD5', // 匹配首页的蓝色
    count: 2,
  },
  {
    id: 'client',
    title: 'Client Documents',
    description: 'Service-related agreements, consents, and policy documents',
    icon: <ClientIcon sx={{ fontSize: 48 }} />,
    color: '#5B9BD5', // 匹配首页的蓝色
    count: 1,
  },
  {
    id: 'training',
    title: 'Training Documents',
    description: 'Staff training guides, manuals, and instructional materials',
    icon: <EmployeeIcon sx={{ fontSize: 48 }} />,
    color: '#5B9BD5', // 匹配首页的蓝色
    count: 2,
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Daily use forms and record-keeping templates',
    icon: <OthersIcon sx={{ fontSize: 48 }} />,
    color: '#5B9BD5', // 匹配首页的蓝色
    count: 1,
  },
]

// 动态文件数据将通过 useEffect 加载

function Files() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [files, setFiles] = useState({})
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(null)

  // 加载所有文件
  const loadFiles = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('🔄 Starting to load files....')
      const scannedFiles = await scanAllFiles()
      setFiles(scannedFiles)

      // 更新分类计数
      fileCategories.forEach(category => {
        category.count = scannedFiles[category.id]?.length || 0
      })

      console.log('✅ Files loaded successfully:', scannedFiles)
    } catch (err) {
      console.error('❌ Failed to load files:', err)
      setError('Failed to load files. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // 刷新指定分类的文件
  const refreshCategoryFiles = async (category) => {
    try {
      setRefreshing(true)
      console.log(`🔄 Refreshing ${category} category...`)
      const refreshedFiles = await refreshCategory(category)
      setFiles(prev => ({
        ...prev,
        [category]: refreshedFiles
      }))

      // 更新分类计数
      const categoryConfig = fileCategories.find(cat => cat.id === category)
      if (categoryConfig) {
        categoryConfig.count = refreshedFiles.length
      }

      console.log(`✅ ${category} refreshed successfully`)
    } catch (err) {
      console.error(`❌ ${category} Failed to refresh category:`, err)
      setError(`${category} Failed to refresh category`)
    } finally {
      setRefreshing(false)
    }
  }

  // 组件挂载时加载文件
  useEffect(() => {
    loadFiles()
  }, [])

  const handleCategoryChange = (_, newValue) => {
    setSelectedCategory(newValue)
  }

  const filteredFiles = files[selectedCategory]?.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (file.displayName && file.displayName.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || []

  const handleDownload = (file) => {
    // 实际的下载逻辑
    try {
      // 根据文件分类构建正确的路径
      const filePath = `/files/${file.category}/${file.name}`

      // 创建下载链接
      const link = document.createElement('a')
      link.href = filePath
      link.download = file.name
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // 显示下载成功提示
      console.log('Starting file download:', file.displayName || file.name, 'Path:', filePath)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again later.')
    }
  }

  return (
    <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: 3, py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Allcare Document Center
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
          Access essential care-related documents, including<br></br> agreements, policies, training materials, <br></br>and operational forms.
        </Typography>

        {/* 状态指示器 */}
        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <CircularProgress size={20} sx={{ color: '#5B9BD5' }} />
            <Typography variant="body2" color="text.secondary">
              Loading...
            </Typography>
          </Box>
        )}

        {/* 错误提示 */}
        {error && (
          <Alert severity="error" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
            {error}
          </Alert>
        )}
      </Box>

      {/* File Categories Overview */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {fileCategories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                border: selectedCategory === category.id ? 2 : 0,
                borderColor: selectedCategory === category.id ? category.color : 'transparent',
                borderRadius: 4,
                background: selectedCategory === category.id
                  ? `linear-gradient(145deg, ${category.color}08, ${category.color}15)`
                  : 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                boxShadow: selectedCategory === category.id
                  ? `0 8px 32px rgba(91, 155, 213, 0.3), 0 4px 16px rgba(91, 155, 213, 0.2)`
                  : '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                  opacity: selectedCategory === category.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: `0 12px 40px rgba(91, 155, 213, 0.25), 0 6px 20px rgba(91, 155, 213, 0.15)`,
                  '&::before': {
                    opacity: 1,
                  },
                },
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 2,
                    background: `linear-gradient(145deg, ${category.color}25, ${category.color}15)`,
                    color: category.color,
                    boxShadow: `
                      inset 0 2px 4px rgba(255, 255, 255, 0.8),
                      inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                      0 4px 12px rgba(91, 155, 213, 0.2)
                    `,
                    border: `2px solid ${category.color}30`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '30%',
                      height: '30%',
                      background: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      filter: 'blur(8px)',
                    },
                  }}
                >
                  {category.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                <Chip
                  label={`${category.count} Files`}
                  sx={{
                    background: `linear-gradient(145deg, ${category.color}, ${category.color}cc)`,
                    color: 'white',
                    fontWeight: 600,
                    boxShadow: `
                      0 2px 8px rgba(91, 155, 213, 0.3),
                      inset 0 1px 2px rgba(255, 255, 255, 0.2),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.1)
                    `,
                    border: `1px solid ${category.color}80`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `
                        0 4px 12px rgba(91, 155, 213, 0.4),
                        inset 0 1px 2px rgba(255, 255, 255, 0.3),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.15)
                      `,
                    },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* File Browser */}
      <Card sx={{
        p: 4,
        borderRadius: 4,
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.08),
          0 4px 16px rgba(0, 0, 0, 0.04),
          inset 0 1px 2px rgba(255, 255, 255, 0.8)
        `,
        border: '1px solid rgba(91, 155, 213, 0.1)',
      }}>
        <Box sx={{ mb: 3 }}>
          {/* Tabs和刷新按钮在同一行 */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Tabs
              value={selectedCategory || false}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ flex: 1 }}
            >
              {fileCategories.map((category) => (
                <Tab
                  key={category.id}
                  label={category.title}
                  value={category.id}
                  icon={React.cloneElement(category.icon, { sx: { fontSize: 24 } })}
                  iconPosition="start"
                />
              ))}
            </Tabs>

            {/* 刷新文件列表按钮 */}
            {!loading && (
              <Button
                variant="outlined"
                size="small"
                startIcon={refreshing ? <CircularProgress size={16} /> : <RefreshIcon />}
                onClick={loadFiles}
                disabled={refreshing}
                sx={{
                  borderColor: '#5B9BD5',
                  color: '#5B9BD5',
                  ml: 2,
                  minWidth: 'auto',
                  '&:hover': {
                    borderColor: '#5B9BD5',
                    backgroundColor: 'rgba(91, 155, 213, 0.1)',
                  },
                }}
              >
                {refreshing ? 'Refreshing...' : 'Refresh List'}
              </Button>
            )}
          </Box>

          <TextField
            fullWidth
            placeholder="Searching..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
        </Box>

        {selectedCategory ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">
                {fileCategories.find(cat => cat.id === selectedCategory)?.title}
              </Typography>
              <IconButton
                onClick={() => refreshCategoryFiles(selectedCategory)}
                disabled={refreshing}
                sx={{
                  color: '#5B9BD5',
                  border: '1px solid #5B9BD5',
                  borderRadius: 2,
                  padding: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(91, 155, 213, 0.1)',
                    borderColor: '#5B9BD5',
                  },
                  '&:disabled': {
                    color: 'rgba(91, 155, 213, 0.5)',
                    borderColor: 'rgba(91, 155, 213, 0.3)',
                  },
                }}
              >
                {refreshing ? <CircularProgress size={20} sx={{ color: '#5B9BD5' }} /> : <RefreshIcon />}
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Found {filteredFiles.length} files {loading && '(Scanning...)'}
            </Typography>

            <List>
              {filteredFiles.map((file, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: '1px solid rgba(91, 155, 213, 0.15)',
                    borderRadius: 3,
                    mb: 2,
                    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                    boxShadow: `
                      0 2px 8px rgba(0, 0, 0, 0.06),
                      0 1px 4px rgba(0, 0, 0, 0.04),
                      inset 0 1px 1px rgba(255, 255, 255, 0.8)
                    `,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'linear-gradient(180deg, #5B9BD5, #5B9BD580)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(91, 155, 213, 0.05)',
                      transform: 'translateX(4px)',
                      boxShadow: `
                        0 4px 16px rgba(91, 155, 213, 0.15),
                        0 2px 8px rgba(91, 155, 213, 0.1),
                        inset 0 1px 2px rgba(255, 255, 255, 0.9)
                      `,
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{
                      background: 'linear-gradient(145deg, #5B9BD525, #5B9BD515)',
                      color: '#5B9BD5',
                      boxShadow: `
                        inset 0 1px 2px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.1),
                        0 2px 6px rgba(91, 155, 213, 0.2)
                      `,
                      border: '1px solid rgba(91, 155, 213, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: `
                          inset 0 1px 3px rgba(255, 255, 255, 0.9),
                          inset 0 -1px 3px rgba(0, 0, 0, 0.15),
                          0 4px 12px rgba(91, 155, 213, 0.3)
                        `,
                      },
                    }}>
                      <FileIcon />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={file.displayName || file.name}
                    secondary={`Name: ${file.name} | Size: ${file.size} | Updated: ${file.date}`}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleDownload(file)}
                      sx={{
                        background: 'linear-gradient(145deg, #5B9BD5, #5B9BD5cc)',
                        color: 'white',
                        boxShadow: `
                          0 3px 12px rgba(91, 155, 213, 0.4),
                          inset 0 1px 2px rgba(255, 255, 255, 0.3),
                          inset 0 -1px 2px rgba(0, 0, 0, 0.1)
                        `,
                        border: '1px solid rgba(91, 155, 213, 0.8)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(145deg, #5B9BD5dd, #5B9BD5aa)',
                          transform: 'scale(1.1) translateY(-1px)',
                          boxShadow: `
                            0 6px 20px rgba(91, 155, 213, 0.5),
                            inset 0 1px 3px rgba(255, 255, 255, 0.4),
                            inset 0 -1px 3px rgba(0, 0, 0, 0.15)
                          `,
                        },
                        '&:active': {
                          transform: 'scale(0.95)',
                          boxShadow: `
                            0 2px 8px rgba(91, 155, 213, 0.3),
                            inset 0 2px 4px rgba(0, 0, 0, 0.2)
                          `,
                        },
                      }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>

            {filteredFiles.length === 0 && (
              <Box textAlign="center" sx={{ py: 4 }}>
                <FolderIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  No matching documents found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Please try a different keyword or select another document category.
                </Typography>
              </Box>
            )}
          </>
        ) : (
          <Box textAlign="center" sx={{ py: 8 }}>
            <FolderIcon sx={{ fontSize: 80, color: '#5B9BD5', mb: 3 }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600 }}>
              Please Select a Document Category
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Click on a category card or tab above to browse the corresponding documents.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              {fileCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outlined"
                  onClick={() => setSelectedCategory(category.id)}
                  sx={{
                    borderColor: category.color,
                    color: category.color,
                    '&:hover': {
                      borderColor: category.color,
                      backgroundColor: `${category.color}10`,
                    },
                  }}
                >
                  {category.title}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Card>

      {/* Help Section */}
      <Card
        sx={{
          mt: 6,
          p: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #5B9BD5 0%, #5B9BD5 100%)',
          color: 'white',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(91, 155, 213, 0.3)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Need Help Finding a Document?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
            If you’re unable to find the document you need or require assistance <br></br>with other files, lease contact Allcare Health Care.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#5B9BD5',
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
              Contact Us
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
              View Customer Manual
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Phone: (240) 668-4666"
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
              label="Email: allcaremd@outlook.com"
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
  )
}

export default Files
