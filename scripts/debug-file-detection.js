#!/usr/bin/env node

/**
 * 调试文件检测功能
 * 手动测试每个文件的存在性
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

function debugFileDetection() {
  log('🔍 调试文件检测功能...', 'bold')
  
  const categories = ['onboarding', 'client', 'training', 'forms']
  const knownFiles = ['Test-1.pdf', 'Test-2.pdf', 'Test-3.pdf', 'Test-4.pdf', 'Test-5.pdf', 'Test-6.pdf']
  
  log('\n📊 实际文件系统检查:', 'blue')
  
  categories.forEach(category => {
    log(`\n📁 ${category} 目录:`, 'yellow')
    const categoryPath = path.join('public/files', category)
    
    if (fs.existsSync(categoryPath)) {
      const actualFiles = fs.readdirSync(categoryPath).filter(f => f.endsWith('.pdf'))
      log(`  实际文件数量: ${actualFiles.length}`)
      
      actualFiles.forEach(file => {
        const filePath = path.join(categoryPath, file)
        const stats = fs.statSync(filePath)
        const sizeKB = Math.round(stats.size / 1024)
        log(`  ✅ ${file} (${sizeKB} KB, ${stats.mtime.toISOString().split('T')[0]})`, 'green')
      })
      
      // 检查已知文件在此目录中的存在性
      log(`  检查已知文件:`)
      knownFiles.forEach(file => {
        const filePath = path.join(categoryPath, file)
        if (fs.existsSync(filePath)) {
          log(`    ✅ ${file} 存在`, 'green')
        } else {
          log(`    ❌ ${file} 不存在`, 'red')
        }
      })
    } else {
      log(`  ❌ 目录不存在: ${categoryPath}`, 'red')
    }
  })
  
  log('\n🌐 HTTP访问测试:', 'blue')
  log('请在浏览器中打开开发者工具，查看网络请求:')
  log('1. 访问 http://localhost:3000/docs')
  log('2. 点击"刷新文件列表"按钮')
  log('3. 查看控制台输出和网络请求')
  
  log('\n📋 预期结果:', 'blue')
  categories.forEach(category => {
    const categoryPath = path.join('public/files', category)
    if (fs.existsSync(categoryPath)) {
      const actualFiles = fs.readdirSync(categoryPath).filter(f => f.endsWith('.pdf'))
      log(`  ${category}: 应该显示 ${actualFiles.length} 个文件`)
    }
  })
  
  log('\n💡 如果显示的文件数量不正确:', 'yellow')
  log('1. 检查浏览器控制台的错误信息')
  log('2. 检查网络请求是否返回正确的状态码')
  log('3. 确认文件路径和权限设置正确')
  
  return {
    categories: categories.length,
    knownFiles: knownFiles.length
  }
}

// 运行调试
debugFileDetection()
