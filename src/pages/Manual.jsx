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
  Chip,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Divider,
} from '@mui/material'
import {
  Search as SearchIcon,
  ExpandLess,
  ExpandMore,
  Health as HealthIcon,
  Restaurant as NutritionIcon,
  FitnessCenter as ExerciseIcon,
  Security as SafetyIcon,
  Home as HomeIcon,
} from '@mui/icons-material'
import { manualData, searchableContent } from '../data/manual-content'

const iconMap = {
  health: <HealthIcon />,
  nutrition: <NutritionIcon />,
  exercise: <ExerciseIcon />,
  safety: <SafetyIcon />,
}

function Manual() {
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
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        {manualData.title}
      </Typography>
      
      <Grid container spacing={3}>
        {/* 左侧导航栏 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{ p: 2, height: 'fit-content', position: 'sticky', top: 20 }}>
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
              sx={{ mb: 2 }}
            />

            {/* 搜索结果 */}
            {searchResults.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  搜索结果 ({searchResults.length})
                </Typography>
                <List dense>
                  {searchResults.map((result) => (
                    <ListItem key={`${result.chapterId}-${result.id}`} disablePadding>
                      <ListItemButton
                        onClick={() => handleSearchResultSelect(result)}
                        sx={{ borderRadius: 1 }}
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
            <Typography variant="subtitle1" gutterBottom>
              目录
            </Typography>
            <List>
              {manualData.chapters.map((chapter) => (
                <Box key={chapter.id}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => handleChapterToggle(chapter.id)}
                      sx={{ borderRadius: 1 }}
                    >
                      <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                        {iconMap[chapter.icon] || <HomeIcon />}
                      </Box>
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
                              borderRadius: 1,
                              backgroundColor: 
                                currentContent?.section?.id === section.id 
                                  ? 'primary.light' 
                                  : 'transparent',
                              '&:hover': {
                                backgroundColor: 'grey.100',
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
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 4 }}>
            {currentContent && (
              <>
                {/* 面包屑导航 */}
                <Breadcrumbs sx={{ mb: 3 }}>
                  <Link color="inherit" href="#" onClick={() => setSelectedSection(null)}>
                    {manualData.title}
                  </Link>
                  <Typography color="text.primary">
                    {currentContent.chapter.title}
                  </Typography>
                  <Typography color="text.primary">
                    {currentContent.section.title}
                  </Typography>
                </Breadcrumbs>

                {/* 章节标签 */}
                <Box sx={{ mb: 3 }}>
                  <Chip
                    icon={iconMap[currentContent.chapter.icon] || <HomeIcon />}
                    label={currentContent.chapter.title}
                    color="primary"
                    variant="outlined"
                  />
                </Box>

                {/* 内容标题 */}
                <Typography variant="h4" gutterBottom>
                  {currentContent.section.title}
                </Typography>

                {/* 内容正文 */}
                <Card variant="outlined">
                  <CardContent>
                    <Box
                      dangerouslySetInnerHTML={{
                        __html: currentContent.section.content
                      }}
                      sx={{
                        '& h3': {
                          color: 'primary.main',
                          marginTop: 2,
                          marginBottom: 1,
                        },
                        '& h4': {
                          color: 'text.primary',
                          marginTop: 2,
                          marginBottom: 1,
                        },
                        '& ul': {
                          paddingLeft: 2,
                        },
                        '& li': {
                          marginBottom: 0.5,
                        },
                        '& p': {
                          marginBottom: 2,
                          lineHeight: 1.7,
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
  )
}

export default Manual
