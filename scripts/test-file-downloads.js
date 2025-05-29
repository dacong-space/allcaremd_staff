#!/usr/bin/env node

/**
 * 文件下载功能测试脚本
 * 验证所有PDF文件是否可以正常访问
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

// 文件配置（与 Files.jsx 中的配置保持一致）
const fileConfig = {
  onboarding: [
    { name: 'Test-3.pdf', displayName: '护理服务协议模板', category: 'onboarding' },
    { name: 'Test-6.pdf', displayName: '客户服务合同', category: 'onboarding' },
  ],
  client: [
    { name: 'Test-1.pdf', displayName: '客户权利法案', category: 'client' },
  ],
  training: [
    { name: 'Test-4.pdf', displayName: 'PCA培训手册', category: 'training' },
    { name: 'Test-5.pdf', displayName: 'CPR认证指南', category: 'training' },
  ],
  forms: [
    { name: 'Test-2.pdf', displayName: '护理评估表', category: 'forms' },
  ],
}

function checkFileExists(filePath, displayName) {
  const exists = fs.existsSync(filePath)
  const status = exists ? '✅' : '❌'
  const color = exists ? 'green' : 'red'
  
  if (exists) {
    const stats = fs.statSync(filePath)
    const sizeKB = Math.round(stats.size / 1024)
    log(`${status} ${displayName} (${path.basename(filePath)}) - ${sizeKB} KB`, color)
  } else {
    log(`${status} ${displayName} (${path.basename(filePath)}) - 文件不存在`, color)
  }
  
  return exists
}

function checkDirectoryStructure() {
  log('📁 检查文件目录结构...', 'blue')
  
  const baseDir = 'public/files'
  const categories = ['onboarding', 'client', 'training', 'forms']
  
  let allDirsExist = true
  
  // 检查基础目录
  if (!fs.existsSync(baseDir)) {
    log(`❌ 基础目录不存在: ${baseDir}`, 'red')
    return false
  }
  
  // 检查各分类目录
  categories.forEach(category => {
    const categoryDir = path.join(baseDir, category)
    const exists = fs.existsSync(categoryDir) && fs.statSync(categoryDir).isDirectory()
    const status = exists ? '✅' : '❌'
    const color = exists ? 'green' : 'red'
    log(`${status} ${category} 目录`, color)
    if (!exists) allDirsExist = false
  })
  
  return allDirsExist
}

function checkAllFiles() {
  log('\n📄 检查所有配置的文件...', 'blue')
  
  let totalFiles = 0
  let existingFiles = 0
  
  Object.entries(fileConfig).forEach(([category, files]) => {
    log(`\n📂 ${category} 分类:`, 'yellow')
    
    files.forEach(file => {
      totalFiles++
      const filePath = path.join('public/files', category, file.name)
      const exists = checkFileExists(filePath, file.displayName)
      if (exists) existingFiles++
    })
  })
  
  return { totalFiles, existingFiles }
}

function generateDownloadUrls() {
  log('\n🔗 生成下载URL列表...', 'blue')
  
  Object.entries(fileConfig).forEach(([category, files]) => {
    log(`\n📂 ${category} 分类:`, 'yellow')
    
    files.forEach(file => {
      const url = `/files/${category}/${file.name}`
      log(`   ${file.displayName}: ${url}`, 'reset')
    })
  })
}

function checkFilePermissions() {
  log('\n🔒 检查文件权限...', 'blue')
  
  let allReadable = true
  
  Object.entries(fileConfig).forEach(([category, files]) => {
    files.forEach(file => {
      const filePath = path.join('public/files', category, file.name)
      
      if (fs.existsSync(filePath)) {
        try {
          fs.accessSync(filePath, fs.constants.R_OK)
          log(`✅ ${file.displayName} - 可读`, 'green')
        } catch (error) {
          log(`❌ ${file.displayName} - 权限错误`, 'red')
          allReadable = false
        }
      }
    })
  })
  
  return allReadable
}

function generateReport(results) {
  log('\n📊 文件下载功能测试报告', 'bold')
  log('='.repeat(50), 'blue')
  
  const { totalFiles, existingFiles, dirsExist, permissionsOk } = results
  const fileScore = Math.round((existingFiles / totalFiles) * 100)
  
  log(`文件目录结构: ${dirsExist ? '✅ 正常' : '❌ 异常'}`)
  log(`配置文件总数: ${totalFiles}`)
  log(`存在文件数量: ${existingFiles}`)
  log(`文件完整率: ${fileScore}%`, fileScore === 100 ? 'green' : fileScore >= 80 ? 'yellow' : 'red')
  log(`文件权限检查: ${permissionsOk ? '✅ 正常' : '❌ 异常'}`)
  
  if (fileScore === 100 && dirsExist && permissionsOk) {
    log('\n🎉 文件下载功能完全正常！', 'green')
    log('所有文件都已正确放置，可以正常下载。', 'green')
  } else if (fileScore >= 80) {
    log('\n⚠️ 文件下载功能基本正常，但有少量问题', 'yellow')
    log('建议检查缺失的文件并确保目录结构正确。', 'yellow')
  } else {
    log('\n❌ 文件下载功能存在问题', 'red')
    log('请检查文件是否正确上传到对应目录。', 'red')
  }
  
  log('\n💡 使用建议:', 'blue')
  log('1. 确保所有PDF文件都放在正确的子目录中')
  log('2. 文件名必须与配置中的名称完全一致')
  log('3. 检查文件权限，确保Web服务器可以访问')
  log('4. 在浏览器中测试实际下载功能')
}

// 主测试函数
function main() {
  log('🔍 开始测试文件下载功能...', 'bold')
  
  const dirsExist = checkDirectoryStructure()
  const { totalFiles, existingFiles } = checkAllFiles()
  const permissionsOk = checkFilePermissions()
  
  generateDownloadUrls()
  
  generateReport({
    totalFiles,
    existingFiles,
    dirsExist,
    permissionsOk
  })
}

// 运行测试
main()
