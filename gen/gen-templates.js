// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import pkg from 'swagger-typescript-api'

// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const { generateTemplates } = pkg
// 导出swagger-typescript-api内置模板
generateTemplates({
  cleanOutput: false,
  output: resolve(__dirname, './templates'),
  httpClientType: 'fetch',
  modular: true,
  silent: false,
  rewrite: false,
})
