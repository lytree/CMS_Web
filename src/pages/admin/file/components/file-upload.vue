<script lang="ts" setup name="admin/file/upload">
import { computed, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { UploadFile, UploadInstance, UploadProps } from 'element-plus'
import eventBus from '@/utils/mitt'
import { useUserInfo } from '@/stores/userInfo'

defineProps({
  title: {
    type: String,
    default: '',
  },
})

const storesUserInfo = useUserInfo()

const uploadRef = ref<UploadInstance>()

const state = reactive({
  showDialog: false,
  sureLoading: false,
  fileDirectory: '',
  fileReName: true,
  fileList: [] as UploadFile[],
  token: storesUserInfo.getToken(),
})

const uploadAction = computed(() => {
  return `${import.meta.env.VITE_API_URL}/api/admin/file/upload-file`
})

const uploadHeaders = computed(() => {
  return { Authorization: `Bearer ${state.token}` }
})

// 打开对话框
async function open() {
  state.showDialog = true
}

// 上传失败
const onError: UploadProps['onError'] = (error) => {
  let message = ''
  if (error.message) {
    try {
      message = JSON.parse(error.message)?.msg
    }
    catch (err) {
      message = error.message || ''
    }
  }
  if (message) {
    ElMessage({
      message,
      type: 'error',
    })
  }
}

// 上传成功
const onSuccess: UploadProps['onSuccess'] = (response) => {
  if (response?.success)
    eventBus.emit('refreshFile')
}

// 清空已上传
async function onClear() {
  uploadRef.value!.clearFiles(['success', 'fail'])
}

// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
async function onSure() {
  uploadRef.value!.submit()
}

defineExpose({
  open,
})
</script>

<template>
  <div>
    <el-dialog v-model="state.showDialog" :title="title" draggable :close-on-click-modal="false" :close-on-press-escape="false" width="600px">
      <div class="mb15">
        <el-row :gutter="35">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-input v-model="state.fileDirectory" placeholder="文件目录" clearable />
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-switch v-model="state.fileReName" active-text="文件自动重命名" />
          </el-col>
        </el-row>
        <div class="mt5">
          <el-alert class="my-el-alert" title="文件目录不填则默认使用本地上传格式：upload/yyyy/MM/dd" type="info" :closable="false" />
        </div>
      </div>
      <div>
        <!-- :before-remove="() => false" -->
        <el-upload
          ref="uploadRef"
          :action="uploadAction"
          :headers="uploadHeaders"
          :data="{ fileDirectory: state.fileDirectory, fileReName: state.fileReName }"
          drag
          multiple
          :auto-upload="false"
          :before-upload="
            () => {
              state.token = storesUserInfo.getToken()
            }
          "
          :on-success="onSuccess"
          :on-error="onError"
        >
          <el-icon class="el-icon--upload">
            <ele-UploadFilled />
          </el-icon>
          <div class="el-upload__text">
            拖拽上传或<em>点击上传</em>
          </div>
          <!-- <template #tip>
            <div class="el-upload__tip"></div>
          </template> -->
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="default" @click="onClear">清空已上传</el-button>
          <el-button size="default" @click="onCancel">取 消</el-button>
          <el-button type="primary" size="default" :loading="state.sureLoading" @click="onSure">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.my-el-alert {
  border: none;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
