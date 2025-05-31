#!/usr/bin/env node

/**
 * 动态文件检测功能测试脚本
 * 模拟添加新文件并测试检测功能
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

// 创建测试PDF文件的函数
function createTestPdf(filePath, content = 'Test PDF Content') {
  const pdfHeader = '%PDF-1.4\n'
  const pdfContent = `1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n\n2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n/Contents 4 0 R\n>>\nendobj\n\n4 0 obj\n<<\n/Length 44\n>>\nstream\nBT\n/F1 12 Tf\n100 700 Td\n(${content}) Tj\nET\nendstream\nendobj\n\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000206 00000 n \ntrailer\n<<\n/Size 5\n/Root 1 0 R\n>>\nstartxref\n299\n%%EOF`
  
  fs.writeFileSync(filePath, pdfHeader + pdfContent)
}

// 测试场景
const testScenarios = [
  {
    name: '新员工入职文件',
    category: 'onboarding',
    files: [
      '新员工手册.pdf',
      '入职培训指南.pdf',
      '工作合同模板.pdf'
    ]
  },
  {
    name: '客户服务文件',
    category: 'client', 
    files: [
      '服务协议.pdf',
      '隐私政策.pdf'
    ]
  },
  {
    name: '培训资料',
    category: 'training',
    files: [
      '基础护理培训.pdf',
      '安全操作指南.pdf',
      '紧急处理手册.pdf'
    ]
  },
  {
    name: '工作表格',
    category: 'forms',
    files: [
      '日常记录表.pdf',
      '客户评估表.pdf'
    ]
  }
]

function testDynamicDetection() {
  log('🧪 开始动态文件检测功能测试...', 'bold')
  
  // 1. 记录当前文件状态
  log('\n📊 当前文件状态:', 'blue')
  const categories = ['onboarding', 'client', 'training', 'forms']
  const currentFiles = {}
  
  categories.forEach(category => {
    const categoryPath = path.join('public/files', category)
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.pdf'))
      currentFiles[category] = files
      log(`  ${category}: ${files.length} 个文件 - ${files.join(', ')}`)
    } else {
      currentFiles[category] = []
      log(`  ${category}: 目录不存在`)
    }
  })
  
  // 2. 创建测试文件
  log('\n➕ 创建测试文件...', 'blue')
  const createdFiles = []
  
  testScenarios.forEach(scenario => {
    log(`\n📁 ${scenario.name} (${scenario.category}):`)
    
    scenario.files.forEach(filename => {
      const filePath = path.join('public/files', scenario.category, filename)
      
      try {
        createTestPdf(filePath, `${scenario.name} - ${filename}`)
        createdFiles.push(filePath)
        
        const stats = fs.statSync(filePath)
        const sizeKB = Math.round(stats.size / 1024)
        log(`  ✅ 创建: ${filename} (${sizeKB} KB)`, 'green')
      } catch (error) {
        log(`  ❌ 创建失败: ${filename} - ${error.message}`, 'red')
      }
    })
  })
  
  // 3. 验证文件创建
  log('\n🔍 验证文件创建结果...', 'blue')
  let totalCreated = 0
  
  categories.forEach(category => {
    const categoryPath = path.join('public/files', category)
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.pdf'))
      const newFiles = files.filter(f => !currentFiles[category].includes(f))
      totalCreated += newFiles.length
      
      if (newFiles.length > 0) {
        log(`  ${category}: +${newFiles.length} 个新文件`, 'green')
        newFiles.forEach(file => {
          log(`    📄 ${file}`)
        })
      }
    }
  })
  
  // 4. 生成测试说明
  log('\n📋 测试说明:', 'blue')
  log('1. 刷新浏览器页面 (http://localhost:3000/docs)')
  log('2. 点击"刷新文件列表"按钮')
  log('3. 查看各分类中是否出现新创建的文件')
  log('4. 测试文件下载功能')
  log('5. 验证文件信息显示是否正确（文件名、大小、日期）')
  
  // 5. 生成清理脚本
  log('\n🧹 清理测试文件:', 'blue')
  log('如需清理测试文件，请运行以下命令:')
  createdFiles.forEach(filePath => {
    log(`rm "${filePath}"`)
  })
  
  // 6. 生成报告
  log('\n📊 测试报告:', 'bold')
  log('='.repeat(50), 'blue')
  log(`创建测试文件: ${totalCreated} 个`)
  log(`测试场景: ${testScenarios.length} 个`)
  log(`涉及分类: ${categories.length} 个`)
  
  if (totalCreated > 0) {
    log('\n🎉 测试文件创建成功！', 'green')
    log('现在可以在浏览器中测试动态文件检测功能。', 'green')
  } else {
    log('\n❌ 没有创建任何测试文件', 'red')
    log('请检查文件权限和目录结构。', 'red')
  }
  
  return {
    totalCreated,
    createdFiles,
    scenarios: testScenarios.length
  }
}

// 清理函数
function cleanupTestFiles() {
  log('🧹 清理测试文件...', 'blue')
  
  let cleaned = 0
  testScenarios.forEach(scenario => {
    scenario.files.forEach(filename => {
      const filePath = path.join('public/files', scenario.category, filename)
      
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath)
          log(`  ✅ 删除: ${filename}`, 'green')
          cleaned++
        } catch (error) {
          log(`  ❌ 删除失败: ${filename} - ${error.message}`, 'red')
        }
      }
    })
  })
  
  log(`\n📊 清理完成，删除了 ${cleaned} 个测试文件`, cleaned > 0 ? 'green' : 'yellow')
}

// 主函数
function main() {
  const args = process.argv.slice(2)
  
  if (args.includes('--cleanup') || args.includes('-c')) {
    cleanupTestFiles()
  } else {
    testDynamicDetection()
    
    log('\n💡 提示:', 'yellow')
    log('- 运行 "node scripts/test-dynamic-detection.js --cleanup" 清理测试文件')
    log('- 在浏览器中访问 http://localhost:3000/docs 测试功能')
  }
}

// 运行测试
main()
