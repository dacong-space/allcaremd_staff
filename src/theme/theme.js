import { createTheme } from '@mui/material/styles'

// The Front Landing Page 风格主题
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#87ceeb', // 更蓝的天空蓝色
      light: '#87ceeb',
      dark: '#87ceeb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#87ceeb', // 更蓝的天空蓝色
      light: '#87ceeb',
      dark: '#87ceeb',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e2022',
      secondary: '#677788',
    },
    grey: {
      50: '#f8f9fa',
      100: '#f1f3f4',
      200: '#e3e5e8',
      300: '#c7cdd4',
      400: '#9aa4b2',
      500: '#677788',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    success: {
      main: '#00c9a7',
      light: '#26d0ce',
      dark: '#00a085',
    },
    warning: {
      main: '#ffb946',
      light: '#ffc470',
      dark: '#ff9800',
    },
    error: {
      main: '#de4437',
      light: '#e57373',
      dark: '#c62828',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", "Noto Sans SC", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#1e2022',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: '#1e2022',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#1e2022',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#1e2022',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#1e2022',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.6,
      color: '#1e2022',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.75,
      color: '#677788',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: '#677788',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
      color: '#677788',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
      color: '#677788',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(145, 158, 171, 0.2)',
    '0px 2px 4px rgba(145, 158, 171, 0.2)',
    '0px 4px 8px rgba(145, 158, 171, 0.2)',
    '0px 8px 16px rgba(145, 158, 171, 0.2)',
    '0px 12px 24px rgba(145, 158, 171, 0.2)',
    '0px 16px 32px rgba(145, 158, 171, 0.2)',
    '0px 20px 40px rgba(145, 158, 171, 0.2)',
    '0px 24px 48px rgba(145, 158, 171, 0.2)',
    '0px 28px 56px rgba(145, 158, 171, 0.2)',
    '0px 32px 64px rgba(145, 158, 171, 0.2)',
    '0px 36px 72px rgba(145, 158, 171, 0.2)',
    '0px 40px 80px rgba(145, 158, 171, 0.2)',
    '0px 44px 88px rgba(145, 158, 171, 0.2)',
    '0px 48px 96px rgba(145, 158, 171, 0.2)',
    '0px 52px 104px rgba(145, 158, 171, 0.2)',
    '0px 56px 112px rgba(145, 158, 171, 0.2)',
    '0px 60px 120px rgba(145, 158, 171, 0.2)',
    '0px 64px 128px rgba(145, 158, 171, 0.2)',
    '0px 68px 136px rgba(145, 158, 171, 0.2)',
    '0px 72px 144px rgba(145, 158, 171, 0.2)',
    '0px 76px 152px rgba(145, 158, 171, 0.2)',
    '0px 80px 160px rgba(145, 158, 171, 0.2)',
    '0px 84px 168px rgba(145, 158, 171, 0.2)',
    '0px 88px 176px rgba(145, 158, 171, 0.2)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overscrollBehavior: 'none', // 禁用过度滚动效果
        },
        body: {
          backgroundColor: '#ffffff',
          overscrollBehavior: 'none', // 禁用过度滚动效果
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e2022',
          boxShadow: '0px 1px 2px rgba(145, 158, 171, 0.2)',
          borderBottom: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '10px 20px',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: '0px 8px 25px rgba(135, 206, 235, 0.24)', // 更蓝的天空蓝色阴影
          '&:hover': {
            boxShadow: '0px 8px 25px rgba(135, 206, 235, 0.32)', // 更蓝的天空蓝色悬停阴影
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(135, 206, 235, 0.08)', // 更蓝的天空蓝色悬停背景
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(135, 206, 235, 0.08)', // 更蓝的天空蓝色悬停背景
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 8px rgba(145, 158, 171, 0.16)',
          border: '1px solid rgba(145, 158, 171, 0.12)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 8px 25px rgba(145, 158, 171, 0.24)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 8px rgba(145, 158, 171, 0.16)',
        },
        elevation1: {
          boxShadow: '0px 1px 2px rgba(145, 158, 171, 0.2)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
})

export default theme
