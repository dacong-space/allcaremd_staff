import React from 'react'
import { Box, useTheme, useMediaQuery } from '@mui/material'

/**
 * 移动端优化容器组件
 * 提供移动端特定的样式和行为优化
 */
function MobileOptimized({ 
  children, 
  disableHoverOnMobile = true,
  mobileSpacing = 2,
  desktopSpacing = 3,
  ...props 
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      {...props}
      sx={{
        // 基础样式
        ...props.sx,
        
        // 移动端间距优化
        padding: isMobile ? mobileSpacing : desktopSpacing,
        
        // 移动端禁用悬停效果
        ...(disableHoverOnMobile && isMobile && {
          '& .MuiCard-root:hover': {
            transform: 'none !important',
            boxShadow: 'inherit !important',
          },
          '& .MuiButton-root:hover': {
            transform: 'none !important',
          },
        }),
        
        // 小屏幕额外优化
        ...(isSmallMobile && {
          padding: 1,
          '& .MuiTypography-h1': {
            fontSize: '2rem !important',
          },
          '& .MuiTypography-h2': {
            fontSize: '1.75rem !important',
          },
          '& .MuiTypography-h3': {
            fontSize: '1.5rem !important',
          },
        }),
        
        // 触摸优化
        '& .MuiButton-root': {
          '@media (max-width: 768px)': {
            minHeight: '44px',
            padding: '12px 24px',
          },
        },
        
        // 卡片间距优化
        '& .MuiGrid-item': {
          '@media (max-width: 768px)': {
            paddingLeft: '8px !important',
            paddingRight: '8px !important',
          },
        },
      }}
    >
      {children}
    </Box>
  )
}

/**
 * 移动端友好的网格容器
 */
export function MobileGrid({ children, spacing = 3, mobileSpacing = 2, ...props }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        '& .MuiGrid-container': {
          spacing: isMobile ? mobileSpacing : spacing,
        },
      }}
    >
      {children}
    </Box>
  )
}

/**
 * 移动端优化的文本组件
 */
export function MobileText({ variant = 'body1', children, ...props }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  // 移动端字体大小映射
  const mobileVariantMap = {
    h1: 'h2',
    h2: 'h3', 
    h3: 'h4',
    h4: 'h5',
    h5: 'h6',
    h6: 'subtitle1',
  }
  
  const effectiveVariant = isMobile && mobileVariantMap[variant] 
    ? mobileVariantMap[variant] 
    : variant
    
  return (
    <Box
      component="span"
      {...props}
      sx={{
        ...props.sx,
        fontSize: isMobile ? '0.9rem' : 'inherit',
        lineHeight: isMobile ? 1.6 : 'inherit',
      }}
    >
      {children}
    </Box>
  )
}

/**
 * 移动端优化的按钮组件
 */
export function MobileButton({ children, fullWidthOnMobile = false, ...props }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        width: (fullWidthOnMobile && isMobile) ? '100%' : 'auto',
        '& .MuiButton-root': {
          width: (fullWidthOnMobile && isMobile) ? '100%' : 'auto',
          minHeight: isMobile ? '48px' : '40px',
          fontSize: isMobile ? '1rem' : '0.875rem',
          padding: isMobile ? '14px 28px' : '10px 20px',
        },
      }}
    >
      {children}
    </Box>
  )
}

export default MobileOptimized
