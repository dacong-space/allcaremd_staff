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
  GlobalStyles,
  useTheme,
  useMediaQuery,
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

// 轻量级CSS优化，提升动画性能
const globalStyles = (
  <GlobalStyles
    styles={{
      // 只优化滚动性能，避免全局样式冲突
      body: {
        overflowX: 'hidden',
      },
      // 针对特定动画元素的轻量优化
      '.MuiCard-root:hover, .MuiListItem-root:hover': {
        // 仅在悬停时启用硬件加速
        willChange: 'transform',
      },
    }}
  />
)

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
    <>
      {globalStyles}
      <Container maxWidth={false} sx={{
        maxWidth: '1400px',
        mx: 'auto',
        px: isMobile ? 2 : 3,
        py: isMobile ? 2 : 4
      }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          component="h1"
          gutterBottom
          sx={{ fontSize: isSmallMobile ? '1.75rem' : 'inherit' }}
        >
          Allcare Document Center
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mb: 3,
            fontStyle: 'italic',
            px: isMobile ? 2 : 0
          }}
        >
          Access key care documents, including agreements, {isMobile ? '' : <br/>}policies, and training materials.
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
      <Grid container spacing={isMobile ? 2 : 4} sx={{ mb: 6 }}>
        {fileCategories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                // 最优化的动画设置 - 使用最平滑的缓动函数
                transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                willChange: 'transform, box-shadow',
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
                // 强制硬件加速
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                  opacity: selectedCategory === category.id ? 1 : 0,
                  transition: 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  willChange: 'opacity',
                },
                '&:hover': isMobile ? {
                  // 移动端禁用悬停动画
                  transform: 'none',
                  boxShadow: 'inherit',
                } : {
                  // 桌面端保留微妙的悬停效果
                  transform: 'translate3d(0, -6px, 0) scale(1.01)',
                  boxShadow: `0 12px 40px rgba(91, 155, 213, 0.2), 0 6px 20px rgba(91, 155, 213, 0.1)`,
                  '&::before': {
                    opacity: 1,
                  },
                },
                // 移除active状态避免冲突
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
                    // 简化Avatar动画，避免冲突
                    transition: 'none', // 移除独立动画，跟随父元素
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
                    // 简化Chip动画，避免冲突
                    transition: 'none', // 移除独立动画，跟随父元素
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
        // 禁用悬停动画
        transition: 'none',
        '&:hover': {
          // 禁用所有悬停效果
          transform: 'none',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 4px 16px rgba(0, 0, 0, 0.04),
            inset 0 1px 2px rgba(255, 255, 255, 0.8)
          `,
        },
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
                    // 最平滑的动画设置
                    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 0.4s ease',
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
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
                      transition: 'opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(91, 155, 213, 0.05)',
                      transform: 'translate3d(2px, 0, 0)', // 更微妙的移动
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
                      // 移除独立动画
                      transition: 'none',
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
                        // 简化按钮动画
                        transition: 'transform 0.2s ease, background 0.2s ease',
                        '&:hover': {
                          background: 'linear-gradient(145deg, #5B9BD5dd, #5B9BD5aa)',
                          transform: 'scale(1.05)',
                        },
                        '&:active': {
                          transform: 'scale(0.95)',
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
          <Box textAlign="center" sx={{
            py: 8,
            // 禁用整个模块的所有动画
            '& *': {
              transition: 'none !important',
              '&:hover': {
                transform: 'none !important',
              },
            },
          }}>
            <FolderIcon sx={{
              fontSize: 80,
              color: '#5B9BD5',
              mb: 3,
              // 禁用图标动画
              transition: 'none',
              '&:hover': {
                transform: 'none',
              },
            }} />
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
                    // 禁用所有悬停动画
                    transition: 'none',
                    '&:hover': {
                      // 保持原始样式，无任何变化
                      borderColor: category.color,
                      color: category.color,
                      backgroundColor: 'transparent',
                      transform: 'none',
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
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'rgba(255, 255, 255, 1) !important',
              fontWeight: 400,
              fontStyle: 'italic',
              '& *': { color: 'rgba(255, 255, 255, 1) !important' }
            }}
          >
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
    </>
  )
}

export default Files
