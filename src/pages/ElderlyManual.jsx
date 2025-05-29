import React, { useState, useMemo } from 'react'
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Breadcrumbs,
  Link,
  Divider,
  Card,
  CardContent,
  Avatar,
} from '@mui/material'
import {
  Search as SearchIcon,
  ExpandLess,
  ExpandMore,
  MenuBook as ManualIcon,
  Home as HomeIcon,
} from '@mui/icons-material'
import { manualData, searchableContent } from '../data/manual-content'

function ElderlyManual() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSection, setSelectedSection] = useState(null)
  const [expandedChapters, setExpandedChapters] = useState({})
  const [searchResults, setSearchResults] = useState([])

  // 搜索功能
  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setSearchResults([])
      return
    }

    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.content.toLowerCase().includes(term.toLowerCase()) ||
      item.chapterTitle.toLowerCase().includes(term.toLowerCase())
    )
    setSearchResults(results)
  }

  // 展开/收起章节
  const handleChapterToggle = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }))
  }

  // 选择章节
  const handleSectionSelect = (chapterId, sectionId) => {
    const chapter = manualData.chapters.find(c => c.id === chapterId)
    const section = chapter?.sections.find(s => s.id === sectionId)
    if (section) {
      setSelectedSection({ chapter, section })
      setSearchTerm('')
      setSearchResults([])
    }
  }

  // 从搜索结果选择
  const handleSearchResultSelect = (result) => {
    handleSectionSelect(result.chapterId, result.id)
  }

  // 默认显示第一个章节的第一个部分
  const defaultContent = useMemo(() => {
    if (!selectedSection && manualData.chapters.length > 0) {
      const firstChapter = manualData.chapters[0]
      const firstSection = firstChapter.sections[0]
      return { chapter: firstChapter, section: firstSection }
    }
    return selectedSection
  }, [selectedSection])

  const currentContent = selectedSection || defaultContent

  return (
    <Box sx={{ pt: 4, pb: 8, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 3,
              backgroundColor: 'primary.main',
            }}
          >
            <ManualIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h2" component="h1" gutterBottom>
            {manualData.title}
          </Typography>
          <Typography variant="h5" color="primary.main" sx={{ mb: 2, fontWeight: 600 }}>
            {manualData.subtitle}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            电话：{manualData.phone}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            生效日期：{manualData.effectiveDate}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            {manualData.description}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* 左侧导航栏 */}
          <Grid item xs={12} lg={4}>
            <Paper sx={{ p: 3, position: 'sticky', top: 100, maxHeight: 'calc(100vh - 120px)', overflow: 'auto' }}>
              {/* 搜索框 */}
              <TextField
                fullWidth
                placeholder="搜索手册内容..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />

              {/* 搜索结果 */}
              {searchResults.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    搜索结果 ({searchResults.length})
                  </Typography>
                  <List dense>
                    {searchResults.map((result) => (
                      <ListItem key={`${result.chapterId}-${result.id}`} disablePadding>
                        <ListItemButton
                          onClick={() => handleSearchResultSelect(result)}
                          sx={{ borderRadius: 2 }}
                        >
                          <ListItemText
                            primary={result.title}
                            secondary={result.fullPath}
                            primaryTypographyProps={{ variant: 'body2' }}
                            secondaryTypographyProps={{ variant: 'caption' }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 2 }} />
                </Box>
              )}

              {/* 目录导航 */}
              <Typography variant="h6" gutterBottom>
                目录
              </Typography>
              <List>
                {manualData.chapters.map((chapter) => (
                  <Box key={chapter.id}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleChapterToggle(chapter.id)}
                        sx={{ borderRadius: 2 }}
                      >
                        <ListItemText primary={chapter.title} />
                        {expandedChapters[chapter.id] ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>

                    <Collapse in={expandedChapters[chapter.id]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {chapter.sections.map((section) => (
                          <ListItem key={section.id} disablePadding>
                            <ListItemButton
                              sx={{
                                pl: 4,
                                borderRadius: 2,
                                backgroundColor:
                                  currentContent?.section?.id === section.id
                                    ? 'rgba(135, 206, 235, 0.15)'
                                    : 'transparent',
                                '&:hover': {
                                  backgroundColor: 'rgba(135, 206, 235, 0.08)',
                                },
                              }}
                              onClick={() => handleSectionSelect(chapter.id, section.id)}
                            >
                              <ListItemText
                                primary={section.title}
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* 右侧内容区域 */}
          <Grid item xs={12} lg={8}>
            <Paper sx={{ p: 4 }}>
              {currentContent && (
                <>
                  {/* 面包屑导航 */}
                  <Breadcrumbs sx={{ mb: 4 }}>
                    <Link color="inherit" href="#" onClick={() => setSelectedSection(null)}>
                      <HomeIcon sx={{ mr: 0.5, fontSize: 16 }} />
                      {manualData.title}
                    </Link>
                    <Typography color="text.primary">
                      {currentContent.chapter.title}
                    </Typography>
                    <Typography color="text.primary">
                      {currentContent.section.title}
                    </Typography>
                  </Breadcrumbs>

                  {/* 内容标题 */}
                  <Typography variant="h3" gutterBottom sx={{ color: 'text.primary' }}>
                    {currentContent.section.title}
                  </Typography>

                  {/* 内容正文 */}
                  <Card variant="outlined" sx={{ mt: 3 }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        dangerouslySetInnerHTML={{
                          __html: currentContent.section.content
                        }}
                        sx={{
                          '& h3': {
                            color: 'primary.main',
                            marginTop: 3,
                            marginBottom: 2,
                            fontSize: '1.5rem',
                            fontWeight: 600,
                          },
                          '& h4': {
                            color: 'text.primary',
                            marginTop: 2,
                            marginBottom: 1.5,
                            fontSize: '1.25rem',
                            fontWeight: 600,
                          },
                          '& ul': {
                            paddingLeft: 3,
                            marginBottom: 2,
                          },
                          '& li': {
                            marginBottom: 1,
                            lineHeight: 1.7,
                          },
                          '& p': {
                            marginBottom: 2,
                            lineHeight: 1.7,
                            fontSize: '1rem',
                          },
                        }}
                      />
                    </CardContent>
                  </Card>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ElderlyManual
