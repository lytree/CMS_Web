import { authDirective } from './directive/authDirective'
import { dragDirective, wavesDirective } from './directive/customDirective'

export default defineNuxtPlugin((nuxtApp) => {
  // 用户权限指令
  authDirective(nuxtApp.vueApp)
  // 按钮波浪指令
  wavesDirective(nuxtApp.vueApp)
  // 自定义拖动指令
  dragDirective(nuxtApp.vueApp)
})
