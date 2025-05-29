import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Fade,
  Container,
} from '@mui/material'
import {
  Menu as MenuIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material'

const navigationItems = [
  {
    label: '首页',
    path: '/',
    type: 'single'
  },
  {
    label: '培训',
    type: 'dropdown',
    items: [
      { label: '培训总览', path: '/training' },
      { label: '老人文件', path: '/training/elderly-manual' },
      { label: 'PCA培训', path: '/training/pca' },
      { label: 'CPR培训', path: '/training/cpr' },
      { label: '其他培训', path: '/training/others' },
    ]
  },
  {
    label: '文档',
    path: '/docs',
    type: 'single'
  },
  {
    label: '帮助',
    path: '/help',
    type: 'single'
  },
  {
    label: '关于',
    path: '/about',
    type: 'single'
  },
]

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEls, setAnchorEls] = useState({})

  // 智能路径匹配函数
  const isPathActive = (path) => {
    return location.pathname === path
  }

  // 检查下拉菜单是否包含当前活跃路径
  const isDropdownActive = (dropdownItems) => {
    return dropdownItems.some(item => isPathActive(item.path))
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setMobileOpen(false)
    }
  }

  const handleMenuClose = (menuKey) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuKey]: null
    }))
  }

  // 点击打开/关闭下拉菜单
  const handleDropdownClick = (event, menuKey) => {
    const isCurrentlyOpen = Boolean(anchorEls[menuKey])

    if (isCurrentlyOpen) {
      // 如果当前菜单已打开，则关闭它
      setAnchorEls(prev => ({
        ...prev,
        [menuKey]: null
      }))
    } else {
      // 如果当前菜单未打开，则打开它并关闭其他菜单
      setAnchorEls({
        [menuKey]: event.currentTarget
      })
    }
  }

  const handleMenuItemClick = (path, menuKey) => {
    navigate(path)
    handleMenuClose(menuKey)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ pt: 3, px: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          pb: 3,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: 'white',
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          Allcare
        </Typography>
        <Box
          sx={{
            ml: 1.5,
            px: 1.5,
            py: 0.25,
            borderRadius: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            Staff
          </Typography>
        </Box>
      </Box>
      <List>
        {navigationItems.map((item, index) => (
          <Box key={index}>
            {item.type === 'single' ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  selected={isPathActive(item.path)}
                  sx={{
                    mx: 0,
                    borderRadius: 0,
                    mb: 0,
                    py: 1.5,
                    px: 2,
                    background: 'transparent',
                    color: isPathActive(item.path) ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    fontWeight: isPathActive(item.path) ? 600 : 500,
                    transition: 'all 0.15s ease',
                    position: 'relative',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                    },
                    '&.Mui-selected': {
                      background: 'transparent',
                      color: 'white',
                      fontWeight: 600,
                    },
                    '&::before': isPathActive(item.path) ? {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '3px',
                      height: '20px',
                      background: 'white',
                      borderRadius: '0 2px 2px 0',
                    } : {},
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isPathActive(item.path) ? 600 : 500,
                      fontSize: '0.9rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <Box>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      mx: 0,
                      borderRadius: 0,
                      mb: 0,
                      py: 1.5,
                      px: 2,
                      background: isDropdownActive(item.items) ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontWeight: isDropdownActive(item.items) ? 700 : 600,
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isDropdownActive(item.items) ? 700 : 600,
                        fontSize: '0.9rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {item.items?.map((subItem, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigation(subItem.path)}
                      selected={isPathActive(subItem.path)}
                      sx={{
                        mx: 0,
                        borderRadius: 0,
                        mb: 0,
                        py: 1.2,
                        px: 3,
                        background: 'transparent',
                        color: isPathActive(subItem.path) ? 'white' : 'rgba(255, 255, 255, 0.6)',
                        transition: 'all 0.15s ease',
                        position: 'relative',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: 'white',
                        },
                        '&.Mui-selected': {
                          background: 'transparent',
                          color: 'white',
                          fontWeight: 600,
                        },
                        '&::before': isPathActive(subItem.path) ? {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '3px',
                          height: '16px',
                          background: 'white',
                          borderRadius: '0 2px 2px 0',
                        } : {},
                      }}
                    >
                      <ListItemText
                        primary={subItem.label}
                        primaryTypographyProps={{
                          fontWeight: isPathActive(subItem.path) ? 600 : 500,
                          fontSize: '0.85rem',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'rgba(45, 55, 72, 0.95)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1, minHeight: '70px' }}>
            <Box
              onClick={() => handleNavigation('/')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                flexGrow: 1,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 3,
                  position: 'relative',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '12px',
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(29, 78, 216, 0.6))',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  A
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                    fontSize: '1.4rem',
                    letterSpacing: '-0.025em',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    lineHeight: 1.2,
                  }}
                >
                  Allcare
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(148, 163, 184, 0.8)',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  Training Platform
                </Typography>
              </Box>
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'white',
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: '1.3rem' }} />
              </IconButton>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                {navigationItems.map((item, index) => (
                  <Box key={index}>
                    {item.type === 'single' ? (
                      <Button
                        color="inherit"
                        onClick={() => handleNavigation(item.path)}
                        sx={{
                          px: 3,
                          py: 1.5,
                          minHeight: '42px',
                          color: isPathActive(item.path) ? '#1e293b' : 'rgba(255, 255, 255, 0.8)',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          borderRadius: '12px',
                          textTransform: 'none',
                          position: 'relative',
                          background: isPathActive(item.path)
                            ? 'rgba(255, 255, 255, 0.95)'
                            : 'transparent',
                          boxShadow: isPathActive(item.path)
                            ? '0 4px 12px rgba(0, 0, 0, 0.1)'
                            : 'none',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                          '&:hover': {
                            background: isPathActive(item.path)
                              ? 'rgba(255, 255, 255, 0.95)'
                              : 'rgba(255, 255, 255, 0.12)',
                            color: isPathActive(item.path) ? '#1e293b' : 'white',
                            transform: 'translateY(-1px)',
                            boxShadow: isPathActive(item.path)
                              ? '0 6px 16px rgba(0, 0, 0, 0.15)'
                              : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Box sx={{ position: 'relative' }}>
                        <Button
                          color="inherit"
                          onClick={(e) => handleDropdownClick(e, item.label)}
                          endIcon={
                            <ArrowDownIcon
                              sx={{
                                fontSize: '1rem',
                                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: Boolean(anchorEls[item.label]) ? 'rotate(180deg)' : 'rotate(0deg)',
                              }}
                            />
                          }
                          sx={{
                            px: 3,
                            py: 1.5,
                            minHeight: '42px',
                            color: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items)) ? '#1e293b' : 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderRadius: '12px',
                            textTransform: 'none',
                            background: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items))
                              ? 'rgba(255, 255, 255, 0.95)'
                              : 'transparent',
                            boxShadow: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items))
                              ? '0 4px 12px rgba(0, 0, 0, 0.1)'
                              : 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                            '&:hover': {
                              background: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items))
                                ? 'rgba(255, 255, 255, 0.95)'
                                : 'rgba(255, 255, 255, 0.12)',
                              color: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items)) ? '#1e293b' : 'white',
                              transform: 'translateY(-1px)',
                              boxShadow: (Boolean(anchorEls[item.label]) || isDropdownActive(item.items))
                                ? '0 6px 16px rgba(0, 0, 0, 0.15)'
                                : '0 2px 8px rgba(0, 0, 0, 0.1)',
                            },
                          }}
                        >
                          {item.label}
                        </Button>
                        <Menu
                          anchorEl={anchorEls[item.label]}
                          open={Boolean(anchorEls[item.label])}
                          onClose={() => handleMenuClose(item.label)}
                          TransitionComponent={Fade}
                          disableAutoFocus
                          disableEnforceFocus
                          MenuListProps={{
                            sx: {
                              py: 1.5,
                              px: 1,
                            }
                          }}
                          sx={{
                            '& .MuiPaper-root': {
                              mt: 1,
                              minWidth: 220,
                              borderRadius: '16px',
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(20px) saturate(180%)',
                              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                              border: '1px solid rgba(148, 163, 184, 0.2)',
                              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)',
                            },
                          }}
                        >
                          {item.items?.map((subItem, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              onClick={() => handleMenuItemClick(subItem.path, item.label)}
                              sx={{
                                py: 1.5,
                                px: 2.5,
                                mx: 0.5,
                                my: 0.25,
                                borderRadius: '12px',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                color: '#475569 !important',
                                background: 'transparent !important',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                                position: 'relative',
                                // 确保所有菜单项都有一致的hover效果
                                '&:hover, &:hover:first-of-type, &:hover:last-of-type': {
                                  background: 'rgba(59, 130, 246, 0.08) !important',
                                  color: '#1e293b !important',
                                  transform: 'translateX(4px)',
                                },
                                // 重置第一个和最后一个项目的默认样式
                                '&:first-of-type, &:last-of-type': {
                                  background: 'transparent !important',
                                  color: '#475569 !important',
                                },
                                '&.Mui-selected': {
                                  background: 'transparent !important',
                                  color: '#475569 !important',
                                  '&:hover': {
                                    background: 'rgba(59, 130, 246, 0.08) !important',
                                    color: '#1e293b !important',
                                  },
                                },
                                '&.Mui-focusVisible': {
                                  background: 'transparent !important',
                                },
                                // 额外确保第一个项目的hover效果
                                ...(subIndex === 0 && {
                                  '&:hover': {
                                    background: 'rgba(59, 130, 246, 0.08) !important',
                                    color: '#1e293b !important',
                                    transform: 'translateX(4px)',
                                  },
                                }),
                              }}
                            >
                              {subItem.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 320,
            background: 'rgba(45, 55, 72, 0.98)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: 'none',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  )
}

export default Navbar
