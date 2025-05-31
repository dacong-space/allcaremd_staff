/**
 * 文件扫描工具
 * 动态扫描 public/files/ 目录中的所有PDF文件
 */

// 文件分类配置
const categoryConfig = {
  onboarding: {
    title: '入职文件',
    description: '新员工入职所需的各类文件和表格',
    path: 'onboarding'
  },
  client: {
    title: '客户文件', 
    description: '客户服务相关的合同、协议和政策文件',
    path: 'client'
  },
  training: {
    title: '培训资料',
    description: '员工培训资料、操作指南和培训手册', 
    path: 'training'
  },
  forms: {
    title: '工作表格',
    description: '日常工作所需的各类表格和记录单',
    path: 'forms'
  }
}

/**
 * 格式化文件大小
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

/**
 * 格式化日期
 */
function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 检查文件是否为PDF
 */
function isPdfFile(filename) {
  return filename.toLowerCase().endsWith('.pdf')
}

/**
 * 获取文件信息（模拟，因为浏览器无法直接访问文件系统）
 * 在实际部署中，这应该是一个后端API
 */
async function getFileInfo(category, filename) {
  try {
    // 尝试获取文件
    const response = await fetch(`/files/${category}/${filename}`, { method: 'HEAD' })
    
    if (response.ok) {
      const contentLength = response.headers.get('content-length')
      const lastModified = response.headers.get('last-modified')
      
      return {
        name: filename,
        displayName: filename.replace('.pdf', ''), // 移除.pdf扩展名作为显示名称
        size: contentLength ? formatFileSize(parseInt(contentLength)) : '未知大小',
        date: lastModified ? formatDate(new Date(lastModified)) : formatDate(new Date()),
        category: category,
        exists: true
      }
    }
    
    return null
  } catch (error) {
    console.error(`获取文件信息失败: ${filename}`, error)
    return null
  }
}

/**
 * 扫描指定分类目录中的所有PDF文件
 */
async function scanCategoryFiles(category) {
  // 由于浏览器安全限制，无法直接扫描目录
  // 这里我们需要一个预定义的文件列表或者后端API
  
  // 临时方案：尝试访问一些常见的文件名
  const commonFileNames = [
    'Test-1.pdf', 'Test-2.pdf', 'Test-3.pdf', 'Test-4.pdf', 'Test-5.pdf', 'Test-6.pdf',
    '护理服务协议.pdf', '客户权利法案.pdf', 'PCA培训手册.pdf', 'CPR认证指南.pdf',
    '护理评估表.pdf', '客户服务合同.pdf', '入职申请表.pdf', '培训记录表.pdf'
  ]
  
  const files = []
  
  for (const filename of commonFileNames) {
    if (isPdfFile(filename)) {
      const fileInfo = await getFileInfo(category, filename)
      if (fileInfo) {
        files.push(fileInfo)
      }
    }
  }
  
  return files
}

/**
 * 扫描所有分类的文件
 */
export async function scanAllFiles() {
  const result = {}
  
  for (const [categoryId, config] of Object.entries(categoryConfig)) {
    console.log(`正在扫描 ${config.title} 目录...`)
    result[categoryId] = await scanCategoryFiles(categoryId)
  }
  
  return result
}

/**
 * 获取分类配置
 */
export function getCategoryConfig() {
  return categoryConfig
}

/**
 * 刷新指定分类的文件列表
 */
export async function refreshCategoryFiles(category) {
  if (!categoryConfig[category]) {
    throw new Error(`未知的文件分类: ${category}`)
  }
  
  return await scanCategoryFiles(category)
}

export default {
  scanAllFiles,
  getCategoryConfig,
  refreshCategoryFiles,
  formatFileSize,
  formatDate
}
