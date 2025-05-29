import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import Home from './pages/Home'
import About from './pages/About'
import Training from './pages/Training'
import Files from './pages/Files'
import ElderlyManual from './pages/ElderlyManual'

// 简单的 ComingSoon 组件
const ComingSoon = ({ title }) => (
  <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
    <Typography variant="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h6" color="text.secondary">
      此功能正在开发中，敬请期待...
    </Typography>
  </Container>
)

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 路由变化时自动滚动到顶部 */}
      <ScrollToTopOnRouteChange />

      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/files" element={<Files />} />

          {/* Training Routes */}
          <Route path="/training/elderly-manual" element={<ElderlyManual />} />
          <Route path="/training/pca" element={<ComingSoon title="PCA培训" />} />
          <Route path="/training/cpr" element={<ComingSoon title="CPR培训" />} />
          <Route path="/training/others" element={<ComingSoon title="其他培训" />} />

          {/* Files Routes */}
          <Route path="/files/contracts" element={<ComingSoon title="合同文件" />} />
          <Route path="/files/policies" element={<ComingSoon title="政策文件" />} />
          <Route path="/files/training-materials" element={<ComingSoon title="培训资料" />} />
          <Route path="/files/forms" element={<ComingSoon title="表格文件" />} />

          {/* Other Pages */}
          <Route path="/others" element={<ComingSoon title="其他服务" />} />
        </Routes>
      </Box>
      <Footer />

      {/* 回到顶部按钮 */}
      <ScrollToTop />
    </Box>
  )
}

export default App
