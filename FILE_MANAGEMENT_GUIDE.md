# 📁 Allcare MD 文件管理指南

## 🎯 概述
本系统支持通过手动添加/删除文件的方式来管理文档，无需上传功能。系统会自动检测文件夹中的PDF文件并在网站上显示。

## 📂 文件夹结构
```
public/files/
├── onboarding/     # 入职文档 (Employment Forms)
├── client/         # 客户文档 (Client Documents)  
├── training/       # 培训资料 (Training Documents)
└── forms/          # 日常表格 (Forms)
```

## 📋 操作步骤

### ✅ 添加新文件
1. **选择正确的文件夹**：
   - 入职相关文档 → `public/files/onboarding/`
   - 客户服务文档 → `public/files/client/`
   - 培训教材资料 → `public/files/training/`
   - 日常使用表格 → `public/files/forms/`

2. **将PDF文件复制到对应文件夹**
3. **刷新网页** - 系统会自动检测新文件

### ❌ 删除文件
1. 直接从对应文件夹中删除PDF文件
2. 刷新网页 - 文件会从列表中消失

## 📝 文件命名建议

### ✅ 推荐的命名方式
- 使用英文文件名：`employee_handbook.pdf`
- 使用下划线分隔：`training_manual.pdf`
- 使用有意义的名称：`safety_guidelines.pdf`
- 简单数字编号：`1.pdf`, `2.pdf`, `3.pdf`

### ❌ 避免的命名方式
- 中文文件名：`员工手册.pdf`
- 包含空格：`employee handbook.pdf`
- 特殊字符：`file@#$.pdf`

## 🔍 自动检测功能

系统会自动检测以下类型的文件名：

### 📊 通用模式
- `document.pdf`, `file.pdf`, `form.pdf`
- `manual.pdf`, `guide.pdf`, `handbook.pdf`
- `policy.pdf`, `procedure.pdf`, `agreement.pdf`

### 🔢 数字序列
- `1.pdf` 到 `50.pdf`
- `Test-1.pdf` 到 `Test-20.pdf`
- `document1.pdf`, `form_1.pdf`, `manual-1.pdf`

### 📁 分类特定文件名
**入职文档 (onboarding/)**
- `employee_handbook.pdf`
- `onboarding_checklist.pdf`
- `employment_agreement.pdf`
- `job_description.pdf`

**客户文档 (client/)**
- `client_agreement.pdf`
- `service_contract.pdf`
- `care_plan.pdf`
- `assessment_form.pdf`

**培训资料 (training/)**
- `training_manual.pdf`
- `safety_guidelines.pdf`
- `certification.pdf`
- `course_materials.pdf`

**日常表格 (forms/)**
- `daily_report.pdf`
- `timesheet.pdf`
- `incident_report.pdf`
- `medication_log.pdf`

## 🚀 快速开始

1. **准备PDF文件** - 确保文件是PDF格式
2. **选择合适的文件夹** - 根据文档类型选择对应目录
3. **复制文件** - 将PDF文件放入选定的文件夹
4. **刷新网页** - 在浏览器中刷新页面查看新文件

## 💡 提示

- 系统每次页面加载时都会重新扫描文件
- 文件大小和修改日期会自动显示
- 支持任何有效的PDF文件名
- 如果文件没有显示，请检查文件名和文件夹位置

## 🔧 故障排除

**文件没有显示？**
1. 检查文件是否在正确的文件夹中
2. 确认文件是PDF格式
3. 检查文件名是否包含特殊字符
4. 刷新浏览器页面

**文件显示错误？**
1. 检查PDF文件是否损坏
2. 确认文件权限设置正确
3. 重新复制文件到文件夹

---
*最后更新：2024年*
