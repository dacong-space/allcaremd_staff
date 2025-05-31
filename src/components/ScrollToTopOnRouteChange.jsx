import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // 页面路由变化时滚动到顶部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 立即跳转，不使用平滑滚动
    })
  }, [pathname])

  return null
}

export default ScrollToTopOnRouteChange
