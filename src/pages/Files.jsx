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
    id: 'contracts',
    title: '合同文件',
    description: '护理服务合同、协议和相关法律文件',
    icon: <OnboardingIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 8,
  },
  {
    id: 'policies',
    title: '政策文件',
    description: '公司政策、隐私保护和权利法案文件',
    icon: <ClientIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 12,
  },
  {
    id: 'training',
    title: '培训资料',
    description: 'PCA培训、CPR认证和护理操作指南',
    icon: <EmployeeIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 15,
  },
  {
    id: 'forms',
    title: '表格文件',
    description: '护理记录表、评估表和其他工作表格',
    icon: <OthersIcon sx={{ fontSize: 48 }} />,
    color: '#87ceeb', // 更蓝的天空蓝色
    count: 10,
  },
]

const sampleFiles = {
  contracts: [
    { name: '护理服务协议模板.pdf', size: '245 KB', date: '2024-01-15' },
    { name: '客户服务合同.docx', size: '189 KB', date: '2024-01-20' },
    { name: '护理责任协议.pdf', size: '167 KB', date: '2024-01-18' },
    { name: '服务终止协议.pdf', size: '145 KB', date: '2024-01-12' },
    { name: '紧急联系授权书.pdf', size: '128 KB', date: '2024-01-10' },
    { name: '医疗信息发布同意书.pdf', size: '156 KB', date: '2024-01-08' },
    { name: '护理计划同意书.pdf', size: '134 KB', date: '2024-01-05' },
    { name: '费用支付协议.pdf', size: '178 KB', date: '2024-01-03' },
  ],
  policies: [
    { name: '客户权利法案.pdf', size: '356 KB', date: '2024-01-25' },
    { name: 'HIPAA隐私保护政策.pdf', size: '445 KB', date: '2024-01-22' },
    { name: '投诉处理程序.docx', size: '234 KB', date: '2024-01-20' },
    { name: '护理质量标准.pdf', size: '567 KB', date: '2024-01-18' },
    { name: '员工行为准则.pdf', size: '289 KB', date: '2024-01-15' },
    { name: '安全操作政策.pdf', size: '378 KB', date: '2024-01-12' },
    { name: '紧急情况处理程序.pdf', size: '423 KB', date: '2024-01-10' },
    { name: '感染控制政策.pdf', size: '345 KB', date: '2024-01-08' },
    { name: '药物管理政策.pdf', size: '267 KB', date: '2024-01-05' },
    { name: '客户信息保密政策.pdf', size: '198 KB', date: '2024-01-03' },
    { name: '护理文档标准.pdf', size: '234 KB', date: '2024-01-01' },
    { name: '质量改进程序.pdf', size: '312 KB', date: '2023-12-28' },
  ],
  training: [
    { name: 'PCA培训手册.pdf', size: '2.1 MB', date: '2024-01-25' },
    { name: 'CPR认证指南.pdf', size: '1.8 MB', date: '2024-01-22' },
    { name: 'ADLs协助培训.pdf', size: '1.5 MB', date: '2024-01-20' },
    { name: '安全护理操作指南.pdf', size: '1.2 MB', date: '2024-01-18' },
    { name: '客户沟通技巧培训.pdf', size: '890 KB', date: '2024-01-15' },
    { name: '紧急情况应对培训.pdf', size: '1.1 MB', date: '2024-01-12' },
    { name: '感染控制培训.pdf', size: '756 KB', date: '2024-01-10' },
    { name: '护理记录培训.pdf', size: '634 KB', date: '2024-01-08' },
    { name: '职业道德培训.pdf', size: '567 KB', date: '2024-01-05' },
    { name: '隐私保护培训.pdf', size: '445 KB', date: '2024-01-03' },
    { name: '急救培训视频.mp4', size: '45.2 MB', date: '2024-01-01' },
    { name: '护理技能演示.mp4', size: '38.7 MB', date: '2023-12-28' },
    { name: '培训考核标准.pdf', size: '289 KB', date: '2023-12-25' },
    { name: '继续教育要求.pdf', size: '234 KB', date: '2023-12-22' },
    { name: '培训记录模板.xlsx', size: '89 KB', date: '2023-12-20' },
  ],
  forms: [
    { name: '护理评估表.pdf', size: '234 KB', date: '2024-01-25' },
    { name: '日常护理记录表.pdf', size: '189 KB', date: '2024-01-22' },
    { name: '药物管理记录表.pdf', size: '167 KB', date: '2024-01-20' },
    { name: '事故报告表.pdf', size: '145 KB', date: '2024-01-18' },
    { name: '客户满意度调查表.pdf', size: '178 KB', date: '2024-01-15' },
    { name: '护理计划表.pdf', size: '156 KB', date: '2024-01-12' },
    { name: '家属沟通记录表.pdf', size: '134 KB', date: '2024-01-10' },
    { name: '健康状况变化报告.pdf', size: '198 KB', date: '2024-01-08' },
    { name: '服务时间记录表.pdf', size: '123 KB', date: '2024-01-05' },
    { name: '护理用品清单.xlsx', size: '67 KB', date: '2024-01-03' },
  ],
}

function Files() {
  const [selectedCategory, setSelectedCategory] = useState('contracts')
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
          Allcare 文档中心
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          提供护理服务相关的各类文件下载，包括合同文件、政策文件、培训资料和工作表格
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
          background: 'linear-gradient(135deg, #87ceeb 0%, #87ceeb 100%)', // 更蓝的天空蓝色
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          需要帮助？
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          如果您找不到需要的文件，或者需要其他文档支持，请联系 Allcare Health Care
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
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
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            查看客户手册
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Chip
            label="电话: (240) 668-4666"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '0.9rem'
            }}
          />
          <Chip
            label="邮箱: allcaremd@outlook.com"
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '0.9rem'
            }}
          />
        </Box>
      </Card>
    </Container>
  )
}

export default Files
