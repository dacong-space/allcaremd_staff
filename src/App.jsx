import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ElderlyManual from './pages/ElderlyManual'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Training Routes */}
          <Route path="/training/elderly-manual" element={<ElderlyManual />} />
          <Route path="/training/pca" element={<ComingSoon title="PCA培训" />} />
          <Route path="/training/cpr" element={<ComingSoon title="CPR培训" />} />
          <Route path="/training/others" element={<ComingSoon title="其他培训" />} />

          {/* Files Routes */}
          <Route path="/files/onboarding" element={<ComingSoon title="入职文件" />} />
          <Route path="/files/client" element={<ComingSoon title="客户文件" />} />
          <Route path="/files/employee" element={<ComingSoon title="员工文件" />} />
          <Route path="/files/others" element={<ComingSoon title="其他文件" />} />

          {/* Other Pages */}
          <Route path="/others" element={<ComingSoon title="其他服务" />} />
          <Route path="/about" element={<ComingSoon title="关于我们" />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
