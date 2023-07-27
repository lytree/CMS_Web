<script lang="ts" setup name="my-input-code">
import { computed, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { isMobilePhone } from '@/utils/test'

// import { CaptchaApi } from '@/server/api/admin/Captcha'

const props = defineProps({
  maxlength: {
    type: Number,
    default: 6,
  },
  seconds: {
    type: Number,
    default: 60,
  },
  startText: {
    type: String,
    default: '获取验证码',
  },
  changeText: {
    type: String,
    default: 's秒后重发',
  },
  endText: {
    type: String,
    default: '重新发送验证码',
  },
  mobile: {
    type: String,
    default: '',
  },
  validate: {
    type: Function,
    default: null,
  },
})

const emits = defineEmits(['send'])

// const LCaptchaDialog = defineAsyncComponent(() => import('@/components/l-captcha/dialog.vue'))

const myCaptchaDialogRef = ref()
const countdown = Date.now()

const state = reactive({
  status: 'ready',
  startText: props.startText,
  changeText: props.changeText,
  endText: props.endText,
  countdown,

  showDialog: false,
  codeId: '',
  loading: {
    getCode: false,
  },
})

// 获取验证码文本
const text = computed(() => {
  return state.status === 'ready' ? state.startText : state.endText
})

// 开始倒计时
function startCountdown() {
  state.status = 'countdown'
  state.countdown = Date.now() + (props.seconds + 1) * 1000
}

// 点击获取验证码
function onGetCode() {
  if (state.status !== 'countdown') {
    if (props.validate)
      props.validate(getCode)
    else
      getCode()
  }
}

// 监听倒计时
function onChange(value: number) {
  if (state.countdown !== countdown && value < 1000)
    state.status = 'finish'
}

// 验证通过
async function onOk(data: any) {
  state.showDialog = false

  // 发送短信验证码
  state.loading.getCode = true
  // const res = await new CaptchaApi()
  //   .sendSmsCode({
  //     mobile: props.mobile,
  //     captchaId: data.captchaId,
  //     track: data.track,
  //     codeId: state.codeId,
  //   })
  //   .catch(() => {})
  //   .finally(() => {
  //     state.loading.getCode = false
  //   })
  const res: any = {}
  if (res?.success && res.data) {
    state.codeId = res.data
    emits('send', res.data)
    startCountdown()
  }
}

// 获得验证码
function getCode() {
  // 验证手机号
  if (!isMobilePhone(props.mobile)) {
    ElMessage.warning({ message: '请输入正确的手机号码', grouping: true })
    return
  }

  state.showDialog = true
  // 刷新滑块拼图
  myCaptchaDialogRef.value?.refresh()
}
</script>

<template>
  <div class="w100">
    <el-input text :maxlength="props.maxlength" placeholder="请输入验证码" autocomplete="off" v-bind="$attrs">
      <template #prefix>
        <el-icon class="el-input__icon">
          <ele-Message />
        </el-icon>
      </template>
      <template #suffix>
        <el-button
          v-show="state.status !== 'countdown'"
          :loading="state.loading.getCode"
          type="primary"
          link
          :disabled="state.status === 'countdown'"
          @click.prevent.stop="onGetCode"
        >
          {{ text }}
        </el-button>
        <el-countdown
          v-show="state.status === 'countdown'"
          :format="state.changeText"
          :value="state.countdown"
          value-style="font-size:var(--el-font-size-base);color:var(--el-color-primary)"
          @change="onChange"
        />
      </template>
    </el-input>
    <a-captcha-dialog ref="myCaptchaDialogRef" v-model="state.showDialog" @ok="onOk" />
  </div>
</template>

<style scoped>
:deep(.el-statistic__content) {
  font-size: var(--el-font-size-base);
}
</style>

<style>
.my-captcha .el-dialog__body {
  padding-top: 10px;
}
.my-captcha .captcha__bar {
  border-color: var(--el-border-color) !important;
}
</style>
