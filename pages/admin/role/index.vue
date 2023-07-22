<script lang="ts" setup name="admin/role">
import { defineAsyncComponent, getCurrentInstance, nextTick, onBeforeMount, onMounted, reactive, ref } from 'vue'
import { ElTable } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import { Pane } from 'splitpanes'
import type { RoleAddRoleUserListInput, RoleGetListOutput, RoleGetRoleUserListOutput, RoleType, UserGetPageOutput } from '@/server/api/admin/data-contracts'
// import { RoleApi } from '@/server/api/admin/Role'
import { filterTree, listToTree } from '@/utils/tree'
import eventBus from '@/utils/mitt'
import { auth } from '@/utils/authFunction'

// 引入组件
const RoleForm = defineAsyncComponent(() => import('./components/role-form.vue'))
const SetRoleMenu = defineAsyncComponent(() => import('./components/set-role-menu.vue'))
// const SetRoleDataScope = defineAsyncComponent(() => import('./components/set-role-data-scope.vue'))
const UserSelect = defineAsyncComponent(() => import('//views/admin/user/components/user-select.vue'))
const MyDropdownMore = defineAsyncComponent(() => import('//components/my-dropdown-more/index.vue'))
const MyLayout = defineAsyncComponent(() => import('//components/my-layout/index.vue'))

const { proxy } = getCurrentInstance() as any

const roleTableRef = ref()
const roleFormRef = ref()
const userTableRef = ref<InstanceType<typeof ElTable>>()
const userSelectRef = ref()
const setRoleMenuRef = ref()
const setRoleDataScopeRef = ref()

const state = reactive({
  loading: false,
  userListLoading: false,
  sureLoading: false,
  roleFormTitle: '',
  filter: {
    name: '',
    roleName: '',
  },
  roleTreeData: [] as any,
  roleFormTreeData: [] as any,
  userListData: [] as RoleGetRoleUserListOutput[],
  roleId: undefined as number | undefined,
  roleName: '' as string | null | undefined,
})

onMounted(() => {
  onQuery()
  eventBus.off('refreshRole')
  eventBus.on('refreshRole', async () => {
    onQuery()
  })
})

onBeforeMount(() => {
  eventBus.off('refreshRole')
})

async function onQuery() {
  state.loading = true
  const res = await new RoleApi().getList().catch(() => {
    state.loading = false
  })
  if (res && res.data && res.data.length > 0) {
    state.roleTreeData = filterTree(listToTree(cloneDeep(res.data)), state.filter.roleName)
    state.roleFormTreeData = listToTree(cloneDeep(res.data).filter(a => a.parentId === 0))
    if (state.roleTreeData.length > 0 && state.roleTreeData[0].children?.length > 0) {
      nextTick(() => {
        roleTableRef.value!.setCurrentRow(state.roleTreeData[0].children[0])
      })
    }
  }
  else {
    state.roleTreeData = []
    state.roleFormTreeData = []
  }

  state.loading = false
}

function onAdd(type: RoleType, row: RoleGetListOutput | undefined = undefined) {
  switch (type) {
    case 1:
      state.roleFormTitle = '新增分组'
      roleFormRef.value.open({ type: 1 })
      break
    case 2:
      state.roleFormTitle = '新增角色'
      roleFormRef.value.open({ type: 2, parentId: row?.id, dataScope: 1 })
      break
  }
}

function onEdit(row: RoleGetListOutput) {
  switch (row.type) {
    case 1:
      state.roleFormTitle = '编辑分组'
      break
    case 2:
      state.roleFormTitle = '编辑角色'
      break
  }
  roleFormRef.value.open(row)
}

function onDelete(row: RoleGetListOutput) {
  proxy.$modal
    .confirmDelete(`确定要删除角色【${row.name}】?`)
    .then(async () => {
      await new RoleApi().delete({ id: row.id }, { loading: true })
      onQuery()
    })
    .catch(() => {})
}

async function onGetRoleUserList() {
  state.userListLoading = true
  const res = await new RoleApi().getRoleUserList({ RoleId: state.roleId, Name: state.filter.name }).catch(() => {
    state.userListLoading = false
  })
  state.userListLoading = false
  if (res?.success) {
    if (res.data && res.data.length > 0)
      state.userListData = res.data
    else
      state.userListData = []
  }
}

function onCurrentChange(currentRow: RoleGetListOutput, oldCurrentRow: RoleGetListOutput) {
  if (!currentRow)
    return

  if (currentRow?.id !== oldCurrentRow?.id && (oldCurrentRow?.id as number) > 0) {
    if ((currentRow?.parentId as number) === 0)
      roleTableRef.value!.setCurrentRow(oldCurrentRow)
  }
  else {
    if ((currentRow?.parentId as number) === 0)
      roleTableRef.value!.setCurrentRow()
  }

  if ((currentRow?.parentId as number) !== 0 && (oldCurrentRow?.parentId as number) !== 0 && (currentRow?.id as number) > 0) {
    state.roleId = currentRow.id
    state.roleName = currentRow.name
    onGetRoleUserList()
  }
}

function onUserRowClick(row: RoleGetRoleUserListOutput) {
  // TODO: improvement typing when refactor table
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  userTableRef.value!.toggleRowSelection(row, undefined)
}

function onAddUser() {
  if (!((state.roleId as number) > 0)) {
    proxy.$modal.msgWarning('请选择角色')
    return
  }
  userSelectRef.value.open({ roleId: state.roleId })
}

function onRemoveUser() {
  if (!((state.roleId as number) > 0)) {
    proxy.$modal.msgWarning('请选择角色')
    return
  }

  const selectionRows = userTableRef.value!.getSelectionRows() as UserGetPageOutput[]

  if (!((selectionRows.length as number) > 0)) {
    proxy.$modal.msgWarning('请选择员工')
    return
  }

  proxy.$modal
    .confirm('确定要移除吗?')
    .then(async () => {
      const userIds = selectionRows?.map(a => a.id)
      const input = { roleId: state.roleId, userIds } as RoleAddRoleUserListInput
      await new RoleApi().removeRoleUser(input, { loading: true })
      onGetRoleUserList()
    })
    .catch(() => {})
}

async function onSureUser(users: UserGetPageOutput[]) {
  if (!(users?.length > 0)) {
    userSelectRef.value.close()
    return
  }

  state.sureLoading = true
  const userIds = users?.map(a => a.id)
  const input = { roleId: state.roleId, userIds } as RoleAddRoleUserListInput
  await new RoleApi().addRoleUser(input, { showSuccessMessage: true }).catch(() => {
    state.sureLoading = false
  })
  state.sureLoading = false
  userSelectRef.value.close()
  onGetRoleUserList()
}

function onSetRoleMenu(role: RoleGetListOutput) {
  if (!((role?.id as number) > 0)) {
    proxy.$modal.msgWarning('请选择角色')
    return
  }
  setRoleMenuRef.value.open(role)
}

function onSetRoleDataScope(role: RoleGetListOutput) {
  if (!((role?.id as number) > 0)) {
    proxy.$modal.msgWarning('请选择角色')
    return
  }
  setRoleDataScopeRef.value.open(role)
}
</script>

<template>
  <MyLayout>
    <Pane size="50" min-size="30" max-size="70">
      <div class="my-flex-column h100 w100">
        <el-card class="mt8" shadow="never" :body-style="{ paddingBottom: '0' }">
          <el-form :inline="true" @submit.stop.prevent>
            <el-form-item label="角色名称">
              <el-input v-model="state.filter.roleName" placeholder="角色名称" @keyup.enter="onQuery" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="ele-Search" @click="onQuery">
                查询
              </el-button>
              <el-dropdown v-auth="'api:admin:role:add'" style="margin-left: 12px">
                <el-button type="primary">
                  新增<el-icon class="el-icon--right">
                    <ele-ArrowDown />
                  </el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="onAdd(1)">
                      新增分组
                    </el-dropdown-item>
                    <el-dropdown-item @click="onAdd(2)">
                      新增角色
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-form-item>
          </el-form>
        </el-card>

        <el-card class="my-fill mt8" shadow="never">
          <ElTable
            ref="roleTableRef"
            v-loading="state.loading"
            :data="state.roleTreeData"
            row-key="id"
            default-expand-all
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
            highlight-current-row
            style="width: 100%"
            @current-change="onCurrentChange"
          >
            <el-table-column prop="name" label="角色名称" min-width="120" show-overflow-tooltip />
            <el-table-column prop="sort" label="排序" width="80" align="center" show-overflow-tooltip />
            <el-table-column label="操作" width="100" fixed="right" header-align="center" align="right">
              <template #default="{ row }">
                <el-button
                  v-if="row.type === 1"
                  v-auth="'api:admin:role:add'"
                  icon="ele-Plus"
                  size="small"
                  text
                  type="primary"
                  @click="onAdd(2, row)"
                />
                <MyDropdownMore v-auths="['api:admin:permission:assign', 'api:admin:role:update', 'api:admin:role:delete']" icon-only>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item v-if="row.type === 2 && auth('api:admin:permission:assign')" @click="onSetRoleMenu(row)">
                        菜单权限
                      </el-dropdown-item>
                      <el-dropdown-item v-if="row.type === 2" @click="onSetRoleDataScope(row)">
                        数据权限
                      </el-dropdown-item>
                      <el-dropdown-item v-if="auth('api:admin:role:update')" @click="onEdit(row)">
                        编辑{{ row.type === 1 ? '分组' : '角色' }}
                      </el-dropdown-item>
                      <el-dropdown-item v-if="auth('api:admin:role:delete')" @click="onDelete(row)">
                        删除{{ row.type === 1 ? '分组' : '角色' }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </MyDropdownMore>
              </template>
            </el-table-column>
          </ElTable>
        </el-card>
      </div>
    </Pane>
    <Pane>
      <div class="my-flex-column h100 w100">
        <el-card class="mt8" shadow="never" :body-style="{ paddingBottom: '0' }">
          <el-form :inline="true" @submit.stop.prevent>
            <el-form-item label="姓名">
              <el-input v-model="state.filter.name" placeholder="姓名" @keyup.enter="onGetRoleUserList" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="ele-Search" @click="onGetRoleUserList">
                查询
              </el-button>
              <el-button v-auth="'api:admin:role:add-role-user'" type="primary" icon="ele-Plus" @click="onAddUser">
                添加员工
              </el-button>
              <el-button v-auth="'api:admin:role:remove-role-user'" type="danger" icon="ele-Delete" @click="onRemoveUser">
                移除员工
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>

        <el-card class="my-fill mt8" shadow="never">
          <ElTable
            ref="userTableRef"
            v-loading="state.userListLoading"
            :data="state.userListData"
            row-key="id"
            style="width: 100%"
            @row-click="onUserRowClick"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="name" label="姓名" min-width="120" show-overflow-tooltip />
            <el-table-column prop="mobile" label="手机号" min-width="120" show-overflow-tooltip />
            <!-- <el-table-column prop="email" label="邮箱" min-width="120" show-overflow-tooltip /> -->
          </ElTable>
        </el-card>
      </div>
    </Pane>

    <RoleForm ref="roleFormRef" :title="state.roleFormTitle" :role-tree-data="state.roleFormTreeData" />
    <UserSelect
      ref="userSelectRef"
      :title="`添加【${state.roleName}】员工`"
      multiple
      :sure-loading="state.sureLoading"
      @sure="onSureUser"
    />
    <SetRoleMenu ref="setRoleMenuRef" />
    <SetRoleDataScope ref="setRoleDataScopeRef" />
  </MyLayout>
</template>

<style scoped></style>
