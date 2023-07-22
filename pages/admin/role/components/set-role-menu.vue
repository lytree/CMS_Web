<script lang="ts" setup>
import { computed, getCurrentInstance, reactive, ref } from 'vue'
import { ElTree } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import type { PermissionAssignInput, RoleGetListOutput } from '@/server/api/admin/data-contracts'

// import { PermissionApi } from '@/server/api/admin/Permission'
import { listToTree } from '@/utils/tree'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const innerTitle = computed(() => {
  return props.title ? props.title : state.roleName ? `设置【${state.roleName}】菜单权限` : '设置菜单权限'
})

const state = reactive({
  showDialog: false,
  loading: false,
  sureLoading: false,
  permissionTreeData: [],
  roleId: 0 as number | undefined,
  roleName: '' as string | undefined | null,
  checkedKeys: [],
})

const { proxy } = getCurrentInstance() as any
const permissionTreeRef = ref<InstanceType<typeof ElTree>>()

async function getRolePermissionList() {
  // const res = await new PermissionApi().getRolePermissionList({ roleId: state.roleId })
  const res: any = {}
  state.checkedKeys = res?.success ? (res.data as never[]) : []
}

// 打开对话框
async function open(role: RoleGetListOutput) {
  state.roleId = role.id
  state.roleName = role.name
  proxy.$modal.loading()
  await onQuery()
  await getRolePermissionList()
  proxy.$modal.closeLoading()
  state.showDialog = true
}

// 关闭对话框
function close() {
  state.showDialog = false
}

async function onQuery() {
  state.loading = true

  // const res = await new PermissionApi().getPermissionList().catch(() => {
  //   state.loading = false
  // })
  const res: any = {}
  if (res && res.data && res.data.length > 0)
    state.permissionTreeData = listToTree(cloneDeep(res.data))
  else
    state.permissionTreeData = []

  state.loading = false
}

function customNodeClass(data: any) {
  return data.row ? 'is-penultimate' : ''
}

// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
async function onSure() {
  state.sureLoading = true
  const permissionIds = permissionTreeRef.value?.getCheckedKeys(true)
  const input = { roleId: state.roleId, permissionIds } as PermissionAssignInput
  const res = await new PermissionApi().assign(input, { showSuccessMessage: true }).catch(() => {
    state.sureLoading = false
  })
  state.sureLoading = false

  if (res?.success)
    state.showDialog = false
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <el-dialog
    v-model="state.showDialog" destroy-on-close :title="innerTitle" append-to-body draggable
    :close-on-click-modal="false" :close-on-press-escape="false" width="780px"
  >
    <div>
      <el-tree
        ref="permissionTreeRef" :data="state.permissionTreeData" node-key="id"
        show-checkbox check-on-click-node highlight-current default-expand-all :expand-on-click-node="false" :props="{ class: customNodeClass }"
        :default-checked-keys="state.checkedKeys"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="default" @click="onCancel">取 消</el-button>
        <el-button type="primary" size="default" :loading="state.sureLoading" @click="onSure">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
:deep(.el-dialog__body) {
  padding: 5px 10px;
}

:deep(.is-penultimate) .el-tree-node__children {
  padding-left: 65px;
  white-space: pre-wrap;
  line-height: 100%;
}
:deep(.is-penultimate) .el-tree-node__children .el-tree-node {
  display: inline-block;
}
:deep(.is-penultimate) .el-tree-node__children .el-tree-node__content {
  padding-left: 12px !important;
  padding-right: 12px;
}
:deep(.is-penultimate) .el-tree-node__children .el-tree-node__content .el-tree-node__expand-icon.is-leaf {
  display: none;
}
</style>
