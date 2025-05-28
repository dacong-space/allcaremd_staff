import React, { useState } from 'react'
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
} from '@mui/icons-material'

const fileCategories = [
  {
    id: 'onboarding',
    title: '入职文件',
    description: '新员工入职所需的各类文件和表格',
    icon: <OnboardingIcon sx={{ fontSize: 48 }} />,
    color: '#6366f1',
    count: 12,
  },
  {
    id: 'client',
    title: '客户文件',
    description: '客户相关的合同、协议和服务文件',
    icon: <ClientIcon sx={{ fontSize: 48 }} />,
    color: '#8b5cf6',
    count: 8,
  },
  {
    id: 'employee',
    title: '员工文件',
    description: '员工手册、政策文件和培训资料',
    icon: <EmployeeIcon sx={{ fontSize: 48 }} />,
    color: '#f59e0b',
    count: 15,
  },
  {
    id: 'others',
    title: '其他文件',
    description: '其他类型的文档和资料',
    icon: <OthersIcon sx={{ fontSize: 48 }} />,
    color: '#10b981',
    count: 6,
  },
]

const sampleFiles = {
  onboarding: [
    { name: '员工入职申请表.pdf', size: '245 KB', date: '2024-01-15' },
    { name: '身份证明文件清单.docx', size: '128 KB', date: '2024-01-10' },
    { name: '入职培训手册.pdf', size: '2.1 MB', date: '2024-01-08' },
    { name: '薪资福利说明.pdf', size: '356 KB', date: '2024-01-05' },
  ],
  client: [
    { name: '服务协议模板.docx', size: '189 KB', date: '2024-01-20' },
    { name: '客户信息登记表.pdf', size: '167 KB', date: '2024-01-18' },
    { name: '服务质量评估表.pdf', size: '234 KB', date: '2024-01-15' },
    { name: '投诉处理流程.docx', size: '145 KB', date: '2024-01-12' },
  ],
  employee: [
    { name: '员工手册2024版.pdf', size: '3.2 MB', date: '2024-01-25' },
    { name: '安全操作规程.pdf', size: '1.8 MB', date: '2024-01-22' },
    { name: '培训记录表.xlsx', size: '89 KB', date: '2024-01-20' },
    { name: '绩效考核标准.docx', size: '267 KB', date: '2024-01-18' },
    { name: '请假申请表.pdf', size: '123 KB', date: '2024-01-15' },
  ],
  others: [
    { name: '公司介绍PPT.pptx', size: '4.5 MB', date: '2024-01-28' },
    { name: '联系方式清单.xlsx', size: '67 KB', date: '2024-01-25' },
    { name: '常见问题FAQ.pdf', size: '445 KB', date: '2024-01-22' },
  ],
}

function Files() {
  const [selectedCategory, setSelectedCategory] = useState('onboarding')
  const [searchTerm, setSearchTerm] = useState('')

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue)
  }

  const filteredFiles = sampleFiles[selectedCategory]?.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []

  const handleDownload = (fileName) => {
    // 这里可以实现实际的下载逻辑
    console.log('下载文件:', fileName)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          文件资源中心
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          这里提供各类工作相关的文件下载，包括入职文件、客户文件、员工文件等
        </Typography>
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
                '&:hover': {
                  transform: 'translateY(-4px)',
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
                    backgroundColor: `${category.color}20`,
                    color: category.color,
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
                    backgroundColor: category.color,
                    color: 'white',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* File Browser */}
      <Card sx={{ p: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={selectedCategory}
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

        <Typography variant="h5" gutterBottom>
          {fileCategories.find(cat => cat.id === selectedCategory)?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          共 {filteredFiles.length} 个文件
        </Typography>

        <List>
          {filteredFiles.map((file, index) => (
            <ListItem
              key={index}
              sx={{
                border: 1,
                borderColor: 'grey.200',
                borderRadius: 2,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'grey.50',
                },
              }}
            >
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  <FileIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={`大小: ${file.size} | 更新时间: ${file.date}`}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleDownload(file.name)}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
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
      </Card>

      {/* Help Section */}
      <Card
        sx={{
          mt: 6,
          p: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          需要帮助？
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          如果您找不到需要的文件，或者需要其他文档支持，请联系我们
        </Typography>
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
          联系支持
        </Button>
      </Card>
    </Container>
  )
}

export default Files
