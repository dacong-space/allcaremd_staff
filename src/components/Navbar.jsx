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
  Home as HomeIcon,
  School as SchoolIcon,
  Folder as FolderIcon,
  MoreHoriz as MoreHorizIcon,
  Info as InfoIcon,
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
    label: '文件',
    type: 'dropdown',
    items: [
      { label: '入职文件', path: '/files/onboarding' },
      { label: '客户文件', path: '/files/client' },
      { label: '员工文件', path: '/files/employee' },
      { label: '其他文件', path: '/files/others' },
    ]
  },
  {
    label: '其他',
    path: '/others',
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setMobileOpen(false)
    }
  }

  const handleMenuOpen = (event, menuKey) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuKey]: event.currentTarget
    }))
  }

  const handleMenuClose = (menuKey) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuKey]: null
    }))
  }

  const handleMenuItemClick = (path, menuKey) => {
    navigate(path)
    handleMenuClose(menuKey)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 3 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
        Allcare 员工平台
      </Typography>
      <List>
        {navigationItems.map((item, index) => (
          <Box key={index}>
            {item.type === 'single' ? (
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  selected={location.pathname === item.path}
                  sx={{
                    mx: 2,
                    borderRadius: 2,
                    mb: 1,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ) : (
              <Box>
                <ListItem disablePadding>
                  <ListItemButton sx={{ mx: 2, borderRadius: 2, mb: 1 }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
                {item.items?.map((subItem, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemButton
                      onClick={() => handleNavigation(subItem.path)}
                      selected={location.pathname === subItem.path}
                      sx={{
                        mx: 4,
                        borderRadius: 2,
                        mb: 0.5,
                        '&.Mui-selected': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      <ListItemText primary={subItem.label} />
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
      <AppBar position="fixed" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 2 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                cursor: 'pointer',
                color: 'text.primary',
              }}
              onClick={() => handleNavigation('/')}
            >
              Allcare 员工平台
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'text.primary',
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {navigationItems.map((item, index) => (
                  <Box key={index}>
                    {item.type === 'single' ? (
                      <Button
                        color="inherit"
                        onClick={() => handleNavigation(item.path)}
                        sx={{
                          px: 2,
                          py: 1,
                          color: 'text.primary',
                          fontWeight: 500,
                          backgroundColor: location.pathname === item.path
                            ? 'rgba(135, 206, 235, 0.15)' // 更蓝的天空蓝色背景
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(135, 206, 235, 0.08)', // 更蓝的天空蓝色悬停
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <>
                        <Button
                          color="inherit"
                          onClick={(e) => handleMenuOpen(e, item.label)}
                          endIcon={<ArrowDownIcon />}
                          sx={{
                            px: 2,
                            py: 1,
                            color: 'text.primary',
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: 'rgba(135, 206, 235, 0.08)', // 更蓝的天空蓝色悬停
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
                          sx={{
                            '& .MuiPaper-root': {
                              mt: 1,
                              minWidth: 200,
                              boxShadow: '0px 8px 25px rgba(145, 158, 171, 0.24)',
                            },
                          }}
                        >
                          {item.items?.map((subItem, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              onClick={() => handleMenuItemClick(subItem.path, item.label)}
                              selected={location.pathname === subItem.path}
                              sx={{
                                py: 1.5,
                                px: 2,
                                fontWeight: 500,
                                '&:hover': {
                                  backgroundColor: 'rgba(135, 206, 235, 0.08)', // 更蓝的天空蓝色悬停
                                },
                                '&.Mui-selected': {
                                  backgroundColor: 'rgba(135, 206, 235, 0.15)', // 更蓝的天空蓝色选中
                                  color: 'primary.main',
                                },
                              }}
                            >
                              {subItem.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
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
            width: 280,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
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
