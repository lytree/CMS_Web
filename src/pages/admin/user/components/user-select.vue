<script lang="ts" setup name="admin/user/components/user-select">
import { defineAsyncComponent, reactive, ref } from 'vue'
import { ElTable } from 'element-plus'
import type { OrgListOutput, PageInputUserGetPageDto, UserGetPageOutput } from '@/server/api/admin/data-contracts'
import { UserApi } from '@/server/api/admin/User'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  sureLoading: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['sure'])

// 引入组件
const OrgMenu = defineAsyncComponent(() => import('//views/admin/org/components/org-menu.vue'))

const userTableRef = ref<InstanceType<typeof ElTable>>()

const state = reactive({
  showDialog: false,
  loading: false,
  filter: {
    name: '',
  },
  total: 0,
  pageInput: {
    currentPage: 1,
    pageSize: 20,
    filter: {
      orgId: null,
    },
  } as PageInputUserGetPageDto,
  userListData: [] as Array<UserGetPageOutput>,
})

// 打开对话框
function open() {
  state.showDialog = true
  if (state.pageInput.filter)
    state.pageInput.filter.orgId = null

  onQuery()
}

// 关闭对话框
function close() {
  state.showDialog = false
}

async function onQuery() {
  state.loading = true
  state.pageInput.dynamicFilter = {
    field: 'name',
    operator: 0,
    value: state.filter.name,
  }
  const res = await new UserApi().getPage(state.pageInput).catch(() => {
    state.loading = false
  })

  state.userListData = res?.data?.list ?? []
  state.total = res?.data?.total ?? 0
  state.loading = false
}

function onSizeChange(val: number) {
  state.pageInput.pageSize = val
  onQuery()
}

function onCurrentChange(val: number) {
  state.pageInput.currentPage = val
  onQuery()
}

function onOrgNodeClick(node: OrgListOutput | null) {
  if (state.pageInput.filter)
    state.pageInput.filter.orgId = node?.id

  onQuery()
}

function onRowClick(row: UserGetPageOutput) {
  // TODO: improvement typing when refactor table
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  userTableRef.value!.toggleRowSelection(row, props.multiple ? undefined : true)
}

function onRowDbClick() {
  if (!props.multiple)
    onSure()
}

// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
function onSure() {
  const selectionRows = userTableRef.value!.getSelectionRows() as UserGetPageOutput[]
  emits('sure', props.multiple ? selectionRows : selectionRows.length > 0 ? selectionRows[0] : null)
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <el-dialog
    v-model="state.showDialog"
    destroy-on-close
    :title="title"
    append-to-body
    draggable
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="780px"
  >
    <div style="padding: 0px 0px 8px 8px; background-color: var(--ba-bg-color)">
      <el-row :gutter="8" style="width: 100%">
        <el-col :xs="24" :sm="9">
          <div class="my-flex-column h100">
            <OrgMenu class="my-flex-fill" @node-click="onOrgNodeClick" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="15">
          <el-card shadow="never" :body-style="{ paddingBottom: '0' }" style="margin-top: 8px">
            <el-form :model="state.filter" :inline="true" @submit.stop.prevent>
              <el-form-item label="姓名" prop="name">
                <el-input v-model="state.filter.name" placeholder="姓名" @keyup.enter="onQuery" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon="ele-Search" @click="onQuery">
                  查询
                </el-button>
              </el-form-item>
            </el-form>
          </el-card>

          <el-card shadow="never" style="margin-top: 8px">
            <ElTable
              ref="userTableRef"
              v-loading="state.loading"
              :data="state.userListData"
              style="width: 100%"
              row-key="id"
              default-expand-all
              :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
              :highlight-current-row="!multiple"
              @row-click="onRowClick"
              @row-dblclick="onRowDbClick"
            >
              <el-table-column v-if="multiple" type="selection" width="55" />
              <el-table-column prop="name" label="姓名" min-width="80" show-overflow-tooltip />
              <el-table-column prop="mobile" label="手机号" min-width="120" show-overflow-tooltip />
              <!-- <el-table-column prop="email" label="邮箱" min-width="120" show-overflow-tooltip /> -->
            </ElTable>
            <div class="my-flex my-flex-end" style="margin-top: 20px">
              <el-pagination
                v-model:currentPage="state.pageInput.currentPage"
                v-model:page-size="state.pageInput.pageSize"
                :total="state.total"
                :page-sizes="[10, 20, 50, 100]"
                small
                background
                layout="total, sizes, prev, pager, next"
                @size-change="onSizeChange"
                @current-change="onCurrentChange"
              />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button size="default" @click="onCancel">取 消</el-button>
        <el-button type="primary" size="default" :loading="sureLoading" @click="onSure">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
:deep(.el-dialog__body) {
  padding: 5px 10px;
}
</style>
