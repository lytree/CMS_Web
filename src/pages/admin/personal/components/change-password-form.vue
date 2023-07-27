<script lang="ts" setup name="admin/personal/change-password-form">
import { reactive, ref, toRefs } from 'vue'
import type { UserChangePasswordInput } from '@/server/api/admin/data-contracts'

// import { UserApi } from '@/server/api/admin/User'

defineProps({
  title: {
    type: String,
    default: '',
  },
})

const formRef = ref()
const state = reactive({
  showDialog: false,
  sureLoading: false,
  form: {} as UserChangePasswordInput,
})
const { form } = toRefs(state)

// 新密码验证器
function testNewPassword(rule: any, value: any, callback: any) {
  if (value) {
    if (state.form.confirmPassword !== '')
      formRef.value.validateField('confirmPassword')

    callback()
  }
}

// 确认密码验证器
function testConfirmPassword(rule: any, value: any, callback: any) {
  if (value) {
    if (value !== state.form.newPassword)
      callback(new Error('新密码和确认密码不一致!'))
    else
      callback()
  }
}

// 打开对话框
async function open() {
  state.showDialog = true
}

// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
function onSure() {
  formRef.value.validate(async (valid: boolean) => {
    if (!valid)
      return

    state.sureLoading = true
    // const res = await new UserApi().changePassword(state.form, { showSuccessMessage: true }).catch(() => {
    //   state.sureLoading = false
    // })
    const res: any = {}
    state.sureLoading = false

    if (res?.success)
      state.showDialog = false
  })
}

defineExpose({
  open,
})
</script>

<template>
  <div>
    <el-dialog
      v-model="state.showDialog"
      destroy-on-close
      :title="title"
      draggable
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="475px"
    >
      <el-form ref="formRef" :model="form" size="default" label-width="80px" label-position="left">
        <el-row :gutter="35">
          <el-col :span="24">
            <el-form-item label="旧密码" prop="oldPassword" :rules="[{ required: true, message: '请输入旧密码', trigger: ['blur', 'change'] }]">
              <el-input v-model="form.oldPassword" show-password autocomplete="off" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="新密码"
              prop="newPassword"
              :rules="[
                { required: true, message: '请输入新密码', trigger: ['blur', 'change'] },
                { validator: testNewPassword, trigger: ['blur', 'change'] },
              ]"
            >
              <el-input v-model="form.newPassword" show-password autocomplete="off" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="确认密码"
              prop="confirmPassword"
              :rules="[
                { required: true, message: '请输入确认密码', trigger: ['blur', 'change'] },
                { validator: testConfirmPassword, trigger: ['blur', 'change'] },
              ]"
            >
              <el-input v-model="form.confirmPassword" show-password autocomplete="off" clearable />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="default" @click="onCancel">取 消</el-button>
          <el-button type="primary" size="default" :loading="state.sureLoading" @click="onSure">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
