<script lang="ts" setup name="admin/permission/permission-dot-form">
import type { PropType } from 'vue'
import { getCurrentInstance, reactive, ref, toRefs } from 'vue'
import { cloneDeep, replace, trimStart } from 'lodash-es'
import type { ApiListOutput, PermissionListOutput, PermissionUpdateDotInput } from '@/server/api/admin/data-contracts'
// import { PermissionApi } from '@/server/api/admin/Permission'
// import { ApiApi } from '@/server/api/admin/Api'
import { listToTree, treeToList } from '@/utils/tree'
import eventBus from '@/utils/mitt'

defineProps({
  title: {
    type: String,
    default: '',
  },
  permissionTreeData: {
    type: Array as PropType<PermissionListOutput[]>,
    default: () => [],
  },
})

const { proxy } = getCurrentInstance() as any

const formRef = ref()
const state = reactive({
  showDialog: false,
  sureLoading: false,
  form: { enabled: true } as PermissionUpdateDotInput,
  apiTreeData: [] as ApiListOutput[],
  expandRowKeys: [] as number[],
})

const { form } = toRefs(state)

async function getApis() {
  const res = await new ApiApi().getList()
  if (res?.success && res.data && res.data.length > 0)
    state.apiTreeData = listToTree(res.data) as ApiListOutput[]
  else
    state.apiTreeData = []
}

// 打开对话框
async function open(row: any = {}) {
  proxy.$modal.loading()

  await getApis()

  state.expandRowKeys = treeToList(cloneDeep(state.apiTreeData))
    .filter((a: ApiListOutput) => a.parentId === 0)
    .map((a: ApiListOutput) => a.id) as number[]

  if (row.id > 0) {
    const res = await new PermissionApi().getDot({ id: row.id }).catch(() => {
      proxy.$modal.closeLoading()
    })

    if (res?.success) {
      const formData = res.data as PermissionUpdateDotInput
      formData.parentId = formData.parentId && formData.parentId > 0 ? formData.parentId : undefined
      state.form = formData
    }
  }
  else {
    state.form = { enabled: true } as PermissionUpdateDotInput
  }

  proxy.$modal.closeLoading()
  state.showDialog = true
}

function onApiFilterNode(value: string, data: ApiListOutput) {
  if (!value)
    return true
  return data.label?.indexOf(value) !== -1 || data.path?.indexOf(value) !== -1
}

function onApiCurrentChange(data: ApiListOutput) {
  if (data) {
    if (!state.form.label)
      state.form.label = data.label

    if (!state.form.code)
      state.form.code = trimStart(replace(data.path || '', /\//g, ':'), ':')
  }
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
    let res = {} as any
    state.form.parentId = state.form.parentId && state.form.parentId > 0 ? state.form.parentId : undefined
    // if (state.form.id != undefined && state.form.id > 0) {
    //   res = await new PermissionApi().updateDot(state.form, { showSuccessMessage: true }).catch(() => {
    //     state.sureLoading = false
    //   })
    // }
    // else {
    //   res = await new PermissionApi().addDot(state.form, { showSuccessMessage: true }).catch(() => {
    //     state.sureLoading = false
    //   })
    // }

    state.sureLoading = false

    if (res?.success) {
      eventBus.emit('refreshPermission')
      state.showDialog = false
    }
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

      :title="title"
      draggable destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="600px"
    >
      <el-form ref="formRef" :model="form" size="default" label-width="80px">
        <el-row :gutter="35">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="上级菜单">
              <el-tree-select
                v-model="form.parentId"
                :data="permissionTreeData"
                node-key="id"

                clearable check-strictly render-after-expand fit-input-width filterable default-expand-all
                class="w100"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="API接口">
              <el-tree-select
                v-model="form.apiIds"
                :data="state.apiTreeData"
                node-key="id"
                :props="{ label: 'path' }"
                render-after-expand
                fit-input-width
                clearable
                filterable
                multiple
                collapse-tags
                collapse-tags-tooltip
                :filter-node-method="onApiFilterNode"
                class="w100"
                :default-expanded-keys="state.expandRowKeys"
                @current-change="onApiCurrentChange"
              >
                <template #default="{ data }">
                  <span class="my-flex my-flex-between">
                    <span>{{ data.label }}</span>
                    <span class="my-line-1 my-mlr-12" :title="data.path">
                      {{ data.path }}
                    </span>
                  </span>
                </template>
              </el-tree-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="名称" prop="label" :rules="[{ required: true, message: '请输入名称', trigger: ['blur', 'change'] }]">
              <el-input v-model="form.label" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="编码" prop="code" :rules="[{ required: true, message: '请输入编码', trigger: ['blur', 'change'] }]">
              <el-input v-model="form.code" clearable />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="排序">
              <el-input-number v-model="form.sort" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-form-item label="启用">
              <el-switch v-model="form.enabled" />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="说明">
              <el-input v-model="form.description" clearable type="textarea" />
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

<style scoped>
.my-mlr-12 {
  margin-left: 12px;
  margin-right: 12px;
}
</style>
