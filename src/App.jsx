import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import Home from './pages/Home'
import About from './pages/About'
import Training from './pages/Training'
import Files from './pages/Files'
import ElderlyManual from './pages/ElderlyManual'
import Others from './pages/Others'
import PCATraining from './pages/PCATraining'
import CPRTraining from './pages/CPRTraining'
import OtherTraining from './pages/OtherTraining'



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
      </Box>
      <Footer />

      {/* 回到顶部按钮 */}
      <ScrollToTop />
    </Box>
  )
}

export default App
