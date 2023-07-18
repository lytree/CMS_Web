<script lang="ts" setup>
import { computed, defineAsyncComponent, reactive, ref, toRefs } from 'vue'
import type { RoleGetListOutput, RoleSetDataScopeInput } from '@/api/admin/data-contracts'
import { RoleApi } from '@/api/admin/Role'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const OrgMenu = defineAsyncComponent(() => import('//views/admin/org/components/org-menu.vue'))

const orgRef = ref()
const innerTitle = computed(() => {
  return props.title ? props.title : state.roleName ? `设置【${state.roleName}】数据权限` : '设置数据权限'
})

const state = reactive({
  showDialog: false,
  loading: false,
  sureLoading: false,
  permissionTreeData: [],
  roleId: 0 as number | undefined,
  roleName: '' as string | undefined | null,
  checkedKeys: [] as number[] | undefined | null,
  form: {} as RoleSetDataScopeInput,
  dataScopeList: [
    { label: '全部', value: 1 },
    { label: '本部门和下级部门', value: 2 },
    { label: '本部门', value: 3 },
    { label: '本人数据', value: 4 },
    { label: '指定部门', value: 5 },
  ],
})

const { form } = toRefs(state)

// 打开对话框
async function open(role: RoleGetListOutput) {
  state.roleId = role.id
  state.roleName = role.name

  if ((role.id as number) > 0) {
    const res = await new RoleApi().get({ id: role.id }, { loading: true })

    if (res?.success) {
      const data = res.data
      state.form = { roleId: data?.id, dataScope: data?.dataScope, orgIds: data?.orgIds } as RoleSetDataScopeInput

      state.showDialog = true
    }
  }
}

// 关闭对话框
function close() {
  state.showDialog = false
}

// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
async function onSure() {
  state.sureLoading = true
  const res = await new RoleApi().setDataScope(state.form, { showSuccessMessage: true }).catch(() => {
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
    <el-form ref="formRef" :model="form" size="default" label-width="80px" label-position="top">
      <el-row :gutter="35">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="数据范围">
            <el-select key="dataScope" v-model="form.dataScope" placeholder="请选择" class="w100">
              <el-option v-for="item in state.dataScopeList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <OrgMenu
              v-show="form.dataScope === 5" ref="orgRef" v-model="form.orgIds" show-checkbox check-on-click-node
              :default-checked-keys="form.orgIds" class="w100"
            />
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
</template>

<style scoped>
:deep(.el-dialog__body) {
  padding: 5px 10px;
}
</style>
