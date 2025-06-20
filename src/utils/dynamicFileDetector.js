/**
 * 动态文件检测器
 * 通过尝试访问文件来检测哪些PDF文件实际存在
 */

// 常见的PDF文件名模式（用于智能检测）
const COMMON_PDF_PATTERNS = [
  // 通用模式
  'document.pdf', 'file.pdf', 'form.pdf', 'manual.pdf', 'guide.pdf',
  'handbook.pdf', 'policy.pdf', 'procedure.pdf', 'agreement.pdf',
  'contract.pdf', 'template.pdf', 'checklist.pdf', 'report.pdf',

  // 入职相关
  'employee_handbook.pdf', 'onboarding_checklist.pdf', 'new_hire_forms.pdf',
  'employment_agreement.pdf', 'job_description.pdf', 'orientation_guide.pdf',

  // 客户相关
  'client_agreement.pdf', 'service_contract.pdf', 'care_plan.pdf',
  'client_intake.pdf', 'assessment_form.pdf', 'consent_form.pdf',

  // 培训相关
  'training_manual.pdf', 'safety_guidelines.pdf', 'certification.pdf',
  'course_materials.pdf', 'training_checklist.pdf', 'competency_test.pdf',

  // 表格相关
  'daily_report.pdf', 'timesheet.pdf', 'incident_report.pdf',
  'medication_log.pdf', 'care_notes.pdf', 'evaluation_form.pdf'
]

// 按分类组织的已知文件（这些是确定存在的文件）
const KNOWN_FILES_BY_CATEGORY = {
  onboarding: [
    'Check List (Chinese).pdf',
    'Check List (Enligsh).pdf',
    'Form I-9.pdf',
    'Form W-4.pdf'
  ],
  client: ['Test-1.pdf', 'Test-6.pdf'],
  training: ['Test-4.pdf', 'Test-5.pdf'],
  forms: ['Test-2.pdf', 'Test-6.pdf']
}

// 动态发现的文件列表（按分类组织）
const discoveredFiles = {
  onboarding: new Set(),
  client: new Set(),
  training: new Set(),
  forms: new Set()
}

/**
 * 检测文件是否存在
 */
async function checkFileExists(category, filename) {
  try {
    const response = await fetch(`/files/${category}/${filename}`, {
      method: 'HEAD',
      cache: 'no-cache'
    })
    return response.ok
  } catch (error) {
    return false
  }
}

/**
 * 获取文件的详细信息
 */
async function getFileDetails(category, filename) {
  try {
    const response = await fetch(`/files/${category}/${filename}`, {
      method: 'HEAD',
      cache: 'no-cache'
    })

    if (!response.ok) return null

    const contentLength = response.headers.get('content-length')
    const lastModified = response.headers.get('last-modified')

    // 格式化文件大小
    const formatSize = (bytes) => {
      if (!bytes) return '未知大小'
      const size = parseInt(bytes)
      if (size < 1024) return `${size} B`
      if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`
      return `${(size / (1024 * 1024)).toFixed(1)} MB`
    }

    // 格式化日期
    const formatDate = (dateString) => {
      if (!dateString) return new Date().toISOString().split('T')[0]
      const date = new Date(dateString)
      return date.toISOString().split('T')[0]
    }

    return {
      name: filename,
      displayName: filename.replace('.pdf', ''), // 使用文件名（去掉扩展名）作为显示名称
      size: formatSize(contentLength),
      date: formatDate(lastModified),
      category: category,
      exists: true,
      lastModified: lastModified ? new Date(lastModified) : new Date()
    }
  } catch (error) {
    console.error(`获取文件详情失败: ${filename}`, error)
    return null
  }
}

/**
 * 获取指定分类要检测的文件名列表
 */
function getFilesToCheck(category) {
  const knownFiles = KNOWN_FILES_BY_CATEGORY[category] || []
  const dynamicFiles = Array.from(discoveredFiles[category] || [])

  // 添加通用模式文件名
  const commonPatterns = COMMON_PDF_PATTERNS.slice()

  // 生成数字序列文件名 (1.pdf, 2.pdf, ..., 50.pdf)
  for (let i = 1; i <= 50; i++) {
    commonPatterns.push(`${i}.pdf`)
  }

  // 生成Test序列文件名 (Test-1.pdf, Test-2.pdf, ..., Test-20.pdf)
  for (let i = 1; i <= 20; i++) {
    commonPatterns.push(`Test-${i}.pdf`)
  }

  // 生成常见的文档名称变体
  const baseNames = ['document', 'file', 'form', 'manual', 'guide', 'policy', 'procedure']
  baseNames.forEach(base => {
    for (let i = 1; i <= 10; i++) {
      commonPatterns.push(`${base}${i}.pdf`)
      commonPatterns.push(`${base}_${i}.pdf`)
      commonPatterns.push(`${base}-${i}.pdf`)
    }
  })

  return [...new Set([...knownFiles, ...dynamicFiles, ...commonPatterns])]
}

/**
 * 扫描指定分类目录中的所有文件
 */
export async function scanCategoryFiles(category) {
  console.log(`🔍 正在扫描 ${category} 目录...`)

  const files = []
  const filesToCheck = getFilesToCheck(category)

  console.log(`📋 检测 ${filesToCheck.length} 个可能的文件名: ${filesToCheck.join(', ')}`)

  // 并行检测所有文件
  const filePromises = filesToCheck.map(async (filename) => {
    const fileDetails = await getFileDetails(category, filename)
    return fileDetails
  })

  const results = await Promise.all(filePromises)

  // 只添加存在的文件
  results.forEach(result => {
    if (result) {
      files.push(result)
      console.log(`✅ 发现文件: ${result.displayName} (${result.size})`)
      // 将发现的文件添加到动态列表中（如果不在已知列表中）
      if (!KNOWN_FILES_BY_CATEGORY[category]?.includes(result.name)) {
        discoveredFiles[category].add(result.name)
      }
    }
  })

  // 按文件名排序
  files.sort((a, b) => a.name.localeCompare(b.name))

  console.log(`📊 ${category} 目录扫描完成，找到 ${files.length} 个文件`)
  return files
}

/**
 * 扫描所有分类的文件
 */
export async function scanAllFiles() {
  const categories = ['onboarding', 'client', 'training', 'forms']
  const result = {}

  console.log('🚀 开始扫描所有文件目录...')

  for (const category of categories) {
    result[category] = await scanCategoryFiles(category)
  }

  const totalFiles = Object.values(result).reduce((sum, files) => sum + files.length, 0)
  console.log(`🎉 扫描完成！总共找到 ${totalFiles} 个文件`)

  return result
}

/**
 * 添加新的可能文件名到指定分类的检测列表
 */
export function addPossibleFilename(filename, category = 'onboarding') {
  // 确保文件名以.pdf结尾
  if (!filename.toLowerCase().endsWith('.pdf')) {
    filename += '.pdf'
  }

  const knownFiles = KNOWN_FILES_BY_CATEGORY[category] || []
  if (!knownFiles.includes(filename) && !discoveredFiles[category]?.has(filename)) {
    if (!discoveredFiles[category]) {
      discoveredFiles[category] = new Set()
    }
    discoveredFiles[category].add(filename)
    console.log(`➕ 添加新的文件名到 ${category} 检测列表: ${filename}`)
  }
}

/**
 * 批量添加文件名到检测列表
 */
export function addMultipleFilenames(filenames, category = 'onboarding') {
  filenames.forEach(filename => {
    addPossibleFilename(filename, category)
  })
}

/**
 * 获取指定分类的可能文件名列表
 */
export function getPossibleFilenames(category) {
  if (category) {
    return getFilesToCheck(category)
  }
  // 返回所有分类的文件名
  const allFiles = []
  Object.keys(KNOWN_FILES_BY_CATEGORY).forEach(cat => {
    allFiles.push(...getFilesToCheck(cat))
  })
  return [...new Set(allFiles)] // 去重
}

/**
 * 清除动态发现的文件列表（用于重置）
 */
export function clearDiscoveredFiles(category = null) {
  if (category) {
    discoveredFiles[category]?.clear()
    console.log(`🧹 清除 ${category} 的动态发现文件列表`)
  } else {
    Object.keys(discoveredFiles).forEach(cat => {
      discoveredFiles[cat].clear()
    })
    console.log('🧹 清除所有动态发现的文件列表')
  }
}

/**
 * 获取统计信息
 */
export function getStats() {
  const knownCount = Object.values(KNOWN_FILES_BY_CATEGORY).reduce((sum, files) => sum + files.length, 0)
  const discoveredCount = Object.values(discoveredFiles).reduce((sum, set) => sum + set.size, 0)

  return {
    knownFiles: knownCount,
    discoveredFiles: discoveredCount,
    totalFiles: knownCount + discoveredCount,
    byCategory: Object.keys(KNOWN_FILES_BY_CATEGORY).reduce((acc, category) => {
      acc[category] = {
        known: KNOWN_FILES_BY_CATEGORY[category].length,
        discovered: discoveredFiles[category]?.size || 0,
        total: KNOWN_FILES_BY_CATEGORY[category].length + (discoveredFiles[category]?.size || 0)
      }
      return acc
    }, {})
  }
}

/**
 * 刷新单个分类的文件列表
 */
export async function refreshCategory(category) {
  console.log(`🔄 刷新 ${category} 分类...`)
  return await scanCategoryFiles(category)
}

export default {
  scanAllFiles,
  scanCategoryFiles,
  refreshCategory,
  addPossibleFilename,
  getPossibleFilenames,
  clearDiscoveredFiles,
  getStats
}
