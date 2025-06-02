/**
 * 文件添加助手工具
 * 使用此脚本快速添加新的文件名到检测列表
 */

import { addPossibleFilename, addMultipleFilenames } from './src/utils/dynamicFileDetector.js'

// 示例：添加单个文件
// addPossibleFilename('employee_handbook.pdf', 'onboarding')

// 示例：批量添加文件到入职文档
const onboardingFiles = [
  'employee_handbook.pdf',
  'onboarding_checklist.pdf',
  'employment_agreement.pdf',
  'job_description.pdf',
  'orientation_guide.pdf',
  'company_policies.pdf',
  'benefits_overview.pdf',
  'emergency_contacts.pdf'
]

// 示例：批量添加文件到客户文档
const clientFiles = [
  'client_agreement.pdf',
  'service_contract.pdf',
  'care_plan_template.pdf',
  'client_intake_form.pdf',
  'assessment_form.pdf',
  'consent_form.pdf',
  'medical_history.pdf',
  'emergency_contact_form.pdf'
]

// 示例：批量添加文件到培训资料
const trainingFiles = [
  'training_manual.pdf',
  'safety_guidelines.pdf',
  'certification_requirements.pdf',
  'course_materials.pdf',
  'competency_checklist.pdf',
  'cpr_certification.pdf',
  'infection_control.pdf',
  'medication_management.pdf'
]

// 示例：批量添加文件到日常表格
const formsFiles = [
  'daily_report.pdf',
  'timesheet.pdf',
  'incident_report.pdf',
  'medication_log.pdf',
  'care_notes.pdf',
  'evaluation_form.pdf',
  'progress_report.pdf',
  'communication_log.pdf'
]

// 执行批量添加（取消注释以使用）
// console.log('添加入职文档...')
// addMultipleFilenames(onboardingFiles, 'onboarding')

// console.log('添加客户文档...')
// addMultipleFilenames(clientFiles, 'client')

// console.log('添加培训资料...')
// addMultipleFilenames(trainingFiles, 'training')

// console.log('添加日常表格...')
// addMultipleFilenames(formsFiles, 'forms')

console.log('文件添加助手已准备就绪！')
console.log('取消注释相应的代码行来添加文件到检测列表。')

// 如果您有特定的文件名要添加，请在这里添加：
// addPossibleFilename('your_file_name.pdf', 'category_name')

export {
  onboardingFiles,
  clientFiles,
  trainingFiles,
  formsFiles
}
