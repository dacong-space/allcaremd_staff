#!/usr/bin/env node

/**
 * 网站状态检查脚本
 * 检查网站的各种状态和性能指标
 */

import fs from 'fs'
import path from 'path'

// 颜色输出
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function checkFileExists(filePath, description) {
  const exists = fs.existsSync(filePath)
  const status = exists ? '✅' : '❌'
  const color = exists ? 'green' : 'red'
  log(`${status} ${description}: ${filePath}`, color)
  return exists
}

function checkDirectoryExists(dirPath, description) {
  const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()
  const status = exists ? '✅' : '❌'
  const color = exists ? 'green' : 'red'
  log(`${status} ${description}: ${dirPath}`, color)
  return exists
}

function checkPackageJson() {
  log('\n📦 检查 package.json 依赖...', 'blue')

  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const requiredDeps = [
      '@mui/material',
      '@mui/icons-material',
      'react',
      'react-dom',
      'react-router-dom'
    ]

    let allDepsPresent = true
    requiredDeps.forEach(dep => {
      const exists = packageJson.dependencies && packageJson.dependencies[dep]
      const status = exists ? '✅' : '❌'
      const color = exists ? 'green' : 'red'
      log(`${status} ${dep}`, color)
      if (!exists) allDepsPresent = false
    })

    return allDepsPresent
  } catch (error) {
    log('❌ 无法读取 package.json', 'red')
    return false
  }
}

function checkSourceFiles() {
  log('\n📁 检查源文件结构...', 'blue')

  const requiredFiles = [
    { path: 'src/App.jsx', desc: '主应用组件' },
    { path: 'src/main.jsx', desc: '应用入口' },
    { path: 'index.html', desc: 'HTML模板' },
    { path: 'src/components/Navbar.jsx', desc: '导航组件' },
    { path: 'src/components/Footer.jsx', desc: '页脚组件' },
    { path: 'src/components/ErrorBoundary.jsx', desc: '错误边界组件' },
    { path: 'src/components/LoadingSpinner.jsx', desc: '加载动画组件' },
    { path: 'src/components/LazyImage.jsx', desc: '懒加载图片组件' },
    { path: 'src/components/SEOHead.jsx', desc: 'SEO组件' },
    { path: 'src/config/siteConfig.js', desc: '网站配置文件' }
  ]

  let allFilesPresent = true
  requiredFiles.forEach(file => {
    const exists = checkFileExists(file.path, file.desc)
    if (!exists) allFilesPresent = false
  })

  return allFilesPresent
}

function checkPages() {
  log('\n📄 检查页面文件...', 'blue')

  const pageFiles = [
    { path: 'src/pages/Home.jsx', desc: '首页' },
    { path: 'src/pages/About.jsx', desc: '关于页面' },
    { path: 'src/pages/Training.jsx', desc: '培训总览页面' },
    { path: 'src/pages/PCATraining.jsx', desc: 'PCA培训页面' },
    { path: 'src/pages/CPRTraining.jsx', desc: 'CPR培训页面' },
    { path: 'src/pages/OtherTraining.jsx', desc: '其他培训页面' },
    { path: 'src/pages/ElderlyManual.jsx', desc: '老人手册页面' },
    { path: 'src/pages/Files.jsx', desc: '文档中心页面' },
    { path: 'src/pages/Others.jsx', desc: '帮助页面' }
  ]

  let allPagesPresent = true
  pageFiles.forEach(page => {
    const exists = checkFileExists(page.path, page.desc)
    if (!exists) allPagesPresent = false
  })

  return allPagesPresent
}

function checkAssets() {
  log('\n🖼️ 检查资源文件...', 'blue')

  const assetDirs = [
    { path: 'public/images', desc: '图片目录' },
    { path: 'public/files', desc: '文档文件目录' }
  ]

  let allAssetsPresent = true
  assetDirs.forEach(dir => {
    const exists = checkDirectoryExists(dir.path, dir.desc)
    if (!exists) allAssetsPresent = false
  })

  // 检查关键图片文件
  const imageFiles = fs.readdirSync('public/images').filter(file =>
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
  )

  log(`📊 图片文件数量: ${imageFiles.length}`, imageFiles.length > 0 ? 'green' : 'yellow')

  return allAssetsPresent
}

function checkBuildConfig() {
  log('\n⚙️ 检查构建配置...', 'blue')

  const configFiles = [
    { path: 'vite.config.js', desc: 'Vite配置文件' },
    { path: '.gitignore', desc: 'Git忽略文件' }
  ]

  let allConfigsPresent = true
  configFiles.forEach(config => {
    const exists = checkFileExists(config.path, config.desc)
    if (!exists) allConfigsPresent = false
  })

  return allConfigsPresent
}

function generateReport(results) {
  log('\n📊 检查报告', 'bold')
  log('='.repeat(50), 'blue')

  const totalChecks = Object.keys(results).length
  const passedChecks = Object.values(results).filter(Boolean).length
  const score = Math.round((passedChecks / totalChecks) * 100)

  log(`总检查项: ${totalChecks}`)
  log(`通过检查: ${passedChecks}`)
  log(`检查得分: ${score}%`, score >= 90 ? 'green' : score >= 70 ? 'yellow' : 'red')

  if (score === 100) {
    log('\n🎉 恭喜！网站状态完美！', 'green')
  } else if (score >= 90) {
    log('\n✅ 网站状态良好，有少量问题需要修复', 'yellow')
  } else if (score >= 70) {
    log('\n⚠️ 网站状态一般，建议修复发现的问题', 'yellow')
  } else {
    log('\n❌ 网站状态需要改进，请修复关键问题', 'red')
  }

  log('\n建议:', 'blue')
  if (!results.sourceFiles) {
    log('- 确保所有必需的源文件都存在')
  }
  if (!results.pages) {
    log('- 检查页面文件是否完整')
  }
  if (!results.assets) {
    log('- 确保资源文件目录结构正确')
  }
  if (!results.dependencies) {
    log('- 安装缺失的依赖包')
  }
}

// 主检查函数
function main() {
  log('🔍 开始检查网站状态...', 'bold')

  const results = {
    dependencies: checkPackageJson(),
    sourceFiles: checkSourceFiles(),
    pages: checkPages(),
    assets: checkAssets(),
    buildConfig: checkBuildConfig()
  }

  generateReport(results)
}

// 运行检查
main()
