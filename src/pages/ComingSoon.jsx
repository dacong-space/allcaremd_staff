import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material'
import {
  Construction as ConstructionIcon,
  Home as HomeIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function ComingSoon({ title }) {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Card sx={{ textAlign: 'center', p: 4 }}>
        <CardContent>
          <Box sx={{ mb: 3 }}>
            <ConstructionIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          </Box>
          
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            页面正在开发中
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            我们正在努力完善这个页面的功能，敬请期待！
            如果您有任何问题或建议，请随时联系我们。
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
            >
              返回首页
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/manual')}
            >
              查看老人手册
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ComingSoon
