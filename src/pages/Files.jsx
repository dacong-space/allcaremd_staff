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
    title: '入职文件',
    description: '新员工入职所需的各类文件和表格',
    icon: <OnboardingIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 2,
  },
  {
    id: 'client',
    title: '客户文件',
    description: '客户服务相关的合同、协议和政策文件',
    icon: <ClientIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 1,
  },
  {
    id: 'training',
    title: '培训资料',
    description: '员工培训资料、操作指南和培训手册',
    icon: <EmployeeIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 2,
  },
  {
    id: 'forms',
    title: '工作表格',
    description: '日常工作所需的各类表格和记录单',
    icon: <OthersIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
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
      console.log('🔄 开始加载文件...')
      const scannedFiles = await scanAllFiles()
      setFiles(scannedFiles)

      // 更新分类计数
      fileCategories.forEach(category => {
        category.count = scannedFiles[category.id]?.length || 0
      })

      console.log('✅ 文件加载完成:', scannedFiles)
    } catch (err) {
      console.error('❌ 文件加载失败:', err)
      setError('文件加载失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  // 刷新指定分类的文件
  const refreshCategoryFiles = async (category) => {
    try {
      setRefreshing(true)
      console.log(`🔄 刷新 ${category} 分类...`)
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

      console.log(`✅ ${category} 分类刷新完成`)
    } catch (err) {
      console.error(`❌ ${category} 分类刷新失败:`, err)
      setError(`${category} 分类刷新失败`)
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
      console.log('开始下载文件:', file.displayName || file.name, '路径:', filePath)
    } catch (error) {
      console.error('下载失败:', error)
      alert('下载失败，请稍后重试')
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Allcare 文档中心
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
          提供护理服务相关的各类文件下载，包括合同文件、政策文件、培训资料和工作表格
        </Typography>

        {/* 状态指示器和刷新按钮 */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          {loading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} sx={{ color: '#87ceeb' }} />
              <Typography variant="body2" color="text.secondary">
                正在扫描文件...
              </Typography>
            </Box>
          )}

          {!loading && (
            <Button
              variant="outlined"
              size="small"
              startIcon={refreshing ? <CircularProgress size={16} /> : <RefreshIcon />}
              onClick={loadFiles}
              disabled={refreshing}
              sx={{
                borderColor: '#87ceeb',
                color: '#87ceeb',
                '&:hover': {
                  borderColor: '#87ceeb',
                  backgroundColor: 'rgba(135, 206, 235, 0.1)',
                },
              }}
            >
              {refreshing ? '刷新中...' : '刷新文件列表'}
            </Button>
          )}
        </Box>

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
                  ? `0 8px 32px rgba(135, 206, 235, 0.3), 0 4px 16px rgba(135, 206, 235, 0.2)`
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
                  boxShadow: `0 12px 40px rgba(135, 206, 235, 0.25), 0 6px 20px rgba(135, 206, 235, 0.15)`,
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
                      0 4px 12px rgba(135, 206, 235, 0.2)
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
                  label={`${category.count} 个文件`}
                  sx={{
                    background: `linear-gradient(145deg, ${category.color}, ${category.color}cc)`,
                    color: 'white',
                    fontWeight: 600,
                    boxShadow: `
                      0 2px 8px rgba(135, 206, 235, 0.3),
                      inset 0 1px 2px rgba(255, 255, 255, 0.2),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.1)
                    `,
                    border: `1px solid ${category.color}80`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `
                        0 4px 12px rgba(135, 206, 235, 0.4),
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
        border: '1px solid rgba(135, 206, 235, 0.1)',
      }}>
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={selectedCategory || false}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
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

          <TextField
            fullWidth
            placeholder="搜索文件..."
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
              <Button
                variant="outlined"
                size="small"
                startIcon={refreshing ? <CircularProgress size={16} /> : <RefreshIcon />}
                onClick={() => refreshCategoryFiles(selectedCategory)}
                disabled={refreshing}
                sx={{
                  borderColor: '#87ceeb',
                  color: '#87ceeb',
                  '&:hover': {
                    borderColor: '#87ceeb',
                    backgroundColor: 'rgba(135, 206, 235, 0.1)',
                  },
                }}
              >
                {refreshing ? '刷新中...' : '刷新此分类'}
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              共 {filteredFiles.length} 个文件 {loading && '(扫描中...)'}
            </Typography>

            <List>
              {filteredFiles.map((file, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: '1px solid rgba(135, 206, 235, 0.15)',
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
                      background: 'linear-gradient(180deg, #87ceeb, #87ceeb80)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(135, 206, 235, 0.05)',
                      transform: 'translateX(4px)',
                      boxShadow: `
                        0 4px 16px rgba(135, 206, 235, 0.15),
                        0 2px 8px rgba(135, 206, 235, 0.1),
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
                      background: 'linear-gradient(145deg, #87ceeb25, #87ceeb15)',
                      color: '#87ceeb',
                      boxShadow: `
                        inset 0 1px 2px rgba(255, 255, 255, 0.8),
                        inset 0 -1px 2px rgba(0, 0, 0, 0.1),
                        0 2px 6px rgba(135, 206, 235, 0.2)
                      `,
                      border: '1px solid rgba(135, 206, 235, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        boxShadow: `
                          inset 0 1px 3px rgba(255, 255, 255, 0.9),
                          inset 0 -1px 3px rgba(0, 0, 0, 0.15),
                          0 4px 12px rgba(135, 206, 235, 0.3)
                        `,
                      },
                    }}>
                      <FileIcon />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={file.displayName || file.name}
                    secondary={`文件名: ${file.name} | 大小: ${file.size} | 更新时间: ${file.date}`}
                    primaryTypographyProps={{ fontWeight: 500 }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleDownload(file)}
                      sx={{
                        background: 'linear-gradient(145deg, #87ceeb, #87ceebcc)',
                        color: 'white',
                        boxShadow: `
                          0 3px 12px rgba(135, 206, 235, 0.4),
                          inset 0 1px 2px rgba(255, 255, 255, 0.3),
                          inset 0 -1px 2px rgba(0, 0, 0, 0.1)
                        `,
                        border: '1px solid rgba(135, 206, 235, 0.8)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(145deg, #87ceebdd, #87ceebaa)',
                          transform: 'scale(1.1) translateY(-1px)',
                          boxShadow: `
                            0 6px 20px rgba(135, 206, 235, 0.5),
                            inset 0 1px 3px rgba(255, 255, 255, 0.4),
                            inset 0 -1px 3px rgba(0, 0, 0, 0.15)
                          `,
                        },
                        '&:active': {
                          transform: 'scale(0.95)',
                          boxShadow: `
                            0 2px 8px rgba(135, 206, 235, 0.3),
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
                  没有找到相关文件
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  请尝试其他搜索关键词或选择不同的文件类别
                </Typography>
              </Box>
            )}
          </>
        ) : (
          <Box textAlign="center" sx={{ py: 8 }}>
            <FolderIcon sx={{ fontSize: 80, color: '#87ceeb', mb: 3 }} />
            <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', fontWeight: 600 }}>
              请选择文件分类
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              点击上方的分类卡片或标签页来浏览相应的文件
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
          background: 'linear-gradient(135deg, #87ceeb 0%, #87ceeb 100%)',
          color: 'white',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(135, 206, 235, 0.3)',
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
            需要文档支持？
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
            如果您找不到需要的文件，或者需要其他文档支持，请联系 Allcare Health Care
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
              联系文档支持
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
  )
}

export default Files
