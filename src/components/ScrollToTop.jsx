import React, { useState, useEffect } from 'react'
import { Fab, Zoom } from '@mui/material'
import { KeyboardArrowUp as ArrowUpIcon } from '@mui/icons-material'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // 滚动到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          bgcolor: '#87ceeb',
          color: 'white',
          boxShadow: '0 8px 24px rgba(135, 206, 235, 0.4)',
          '&:hover': {
            bgcolor: '#6bb6e6',
            transform: 'scale(1.1)',
            boxShadow: '0 12px 32px rgba(135, 206, 235, 0.5)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        size="medium"
        aria-label="回到顶部"
      >
        <ArrowUpIcon />
      </Fab>
    </Zoom>
  )
}

export default ScrollToTop
