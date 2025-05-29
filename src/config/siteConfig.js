// 网站配置文件 - 统一管理网站信息
export const siteConfig = {
  // 公司基本信息
  company: {
    name: 'Allcare Health Care, LLC',
    slogan: 'All People. All Heart. Allcare.',
    description: '为马里兰州居家护理服务提供专业的员工培训资源',
    founded: '2018',
    location: '马里兰州',
    employees: '50+',
  },

  // 联系信息
  contact: {
    phone: '(240) 668-4666',
    email: 'allcaremd@outlook.com',
    website: 'allcaremd.com',
    trainingEmail: 'training@allcaremd.com',
    cprEmail: 'cpr@allcaremd.com',
    address: '123 Healthcare Blvd, Baltimore, MD 21201',
  },

  // 网站信息
  site: {
    title: 'Allcare Health Care 员工平台',
    url: 'https://staff.allcaremd.com',
    domain: 'staff.allcaremd.com',
    version: '1.0.0',
    buildDate: new Date().toISOString(),
  },

  // 主题配置
  theme: {
    primaryColor: '#87ceeb', // 天空蓝
    primaryColorHover: '#7bb8d9',
    primaryColorLight: 'rgba(135, 206, 235, 0.15)',
    primaryColorBorder: 'rgba(135, 206, 235, 0.3)',
  },

  // 服务区域
  serviceAreas: [
    '巴尔的摩',
    '安纳波利斯', 
    '哥伦比亚',
    '银泉'
  ],

  // 认证信息
  certifications: [
    '州政府认证',
    'Medicare认证', 
    'Medicaid认证'
  ],

  // 社交媒体（如果有的话）
  social: {
    facebook: '',
    linkedin: '',
    twitter: '',
  },

  // 功能开关
  features: {
    enableFeedback: true,
    enableNotifications: true,
    enableAnalytics: false,
    enableChat: false,
  },

  // SEO配置
  seo: {
    keywords: [
      'Allcare Health Care',
      'PCA培训',
      'CPR认证',
      '居家护理',
      '马里兰州',
      '员工培训'
    ],
    author: 'Allcare Health Care, LLC',
  }
}

export default siteConfig
