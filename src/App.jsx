import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'

// 懒加载页面组件
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Training = React.lazy(() => import('./pages/Training'))
const Files = React.lazy(() => import('./pages/Files'))
const ElderlyManual = React.lazy(() => import('./pages/ElderlyManual'))
const Others = React.lazy(() => import('./pages/Others'))
const PCATraining = React.lazy(() => import('./pages/PCATraining'))
const CPRTraining = React.lazy(() => import('./pages/CPRTraining'))
const OtherTraining = React.lazy(() => import('./pages/OtherTraining'))



function App() {
  return (
    <ErrorBoundary>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* 路由变化时自动滚动到顶部 */}
        <ScrollToTopOnRouteChange />

        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Suspense fallback={<LoadingSpinner message="页面加载中..." />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/training" element={<Training />} />
              <Route path="/docs" element={<Files />} />

              {/* Training Routes */}
              <Route path="/training/elderly-manual" element={<ElderlyManual />} />
              <Route path="/training/pca" element={<PCATraining />} />
              <Route path="/training/cpr" element={<CPRTraining />} />
              <Route path="/training/others" element={<OtherTraining />} />

              {/* Help Page */}
              <Route path="/help" element={<Others />} />

              {/* 保持旧路径的兼容性 */}
              <Route path="/files" element={<Files />} />
              <Route path="/others" element={<Others />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />

        {/* 回到顶部按钮 */}
        <ScrollToTop />

        {/* 性能监控 */}
        <PerformanceMonitor />
      </Box>
    </ErrorBoundary>
  )
}

export default App
