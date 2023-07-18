<script lang="ts" setup name="admin/dictData">
import { defineAsyncComponent, getCurrentInstance, onBeforeMount, onMounted, reactive, ref } from 'vue'
import type { DictGetPageOutput, DictTypeGetPageOutput, PageInputDictGetPageDto } from '@/api/admin/data-contracts'
import { DictApi } from '@/api/admin/Dict'
import eventBus from '@/utils/mitt'

// 引入组件
const DictForm = defineAsyncComponent(() => import('./components/dict-form.vue'))

const { proxy } = getCurrentInstance() as any

const dictFormRef = ref()

const state = reactive({
  loading: false,
  dictFormTitle: '',
  filterModel: {
    name: '',
    dictTypeId: 0,
  },
  total: 0,
  pageInput: {
    currentPage: 1,
    pageSize: 20,
  } as PageInputDictGetPageDto,
  dictListData: [] as Array<DictGetPageOutput>,
  dictTypeName: '',
})

onMounted(async () => {
  eventBus.off('refreshDict')
  eventBus.on('refreshDict', () => {
    onQuery()
  })
})

onBeforeMount(() => {
  eventBus.off('refreshDict')
})

async function onQuery() {
  state.loading = true
  state.pageInput.filter = state.filterModel
  const res = await new DictApi().getPage(state.pageInput).catch(() => {
    state.loading = false
  })
  state.dictListData = res?.data?.list ?? []
  state.total = res?.data?.total ?? 0
  state.loading = false
}

function onAdd() {
  if (!(state.filterModel.dictTypeId > 0)) {
    proxy.$modal.msgWarning('请选择字典类型')
    return
  }
  state.dictFormTitle = `新增【${state.dictTypeName}】字典`
  dictFormRef.value.open({ dictTypeId: state.filterModel.dictTypeId })
}

function onEdit(row: DictGetPageOutput) {
  state.dictFormTitle = `编辑【${state.dictTypeName}】字典`
  dictFormRef.value.open(row)
}

function onDelete(row: DictGetPageOutput) {
  proxy.$modal
    .confirmDelete(`确定要删除【${row.name}】?`)
    .then(async () => {
      await new DictApi().delete({ id: row.id }, { loading: true, showSuccessMessage: true })
      onQuery()
    })
    .catch(() => {})
}

function onSizeChange(val: number) {
  state.pageInput.pageSize = val
  onQuery()
}

function onCurrentChange(val: number) {
  state.pageInput.currentPage = val
  onQuery()
}

function refresh(data: DictTypeGetPageOutput) {
  if ((data?.id as number) > 0) {
    state.filterModel.dictTypeId = data.id as number
    state.dictTypeName = data.name as string
    onQuery()
  }
}

defineExpose({
  refresh,
})
</script>

<template>
  <div class="my-flex-column h100 w100">
    <el-card class="mt8" shadow="never" :body-style="{ paddingBottom: '0' }">
      <el-form :model="state.filterModel" :inline="true" @submit.stop.prevent>
        <el-form-item prop="name">
          <el-input v-model="state.filterModel.name" placeholder="名称或编码" @keyup.enter="onQuery" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="ele-Search" @click="onQuery">
            查询
          </el-button>
          <el-button v-auth="'api:admin:dict:add'" type="primary" icon="ele-Plus" @click="onAdd">
            新增
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="my-fill mt8" shadow="never">
      <el-table v-loading="state.loading" :data="state.dictListData" row-key="id" style="width: 100%">
        <el-table-column prop="name" label="名称" min-width="120" show-overflow-tooltip />
        <el-table-column prop="code" label="编码" min-width="120" show-overflow-tooltip />
        <el-table-column prop="value" label="值" width="80" show-overflow-tooltip />
        <el-table-column prop="sort" label="排序" width="60" align="center" show-overflow-tooltip />
        <el-table-column label="状态" width="70" align="center" show-overflow-tooltip>
          <template #default="{ row }">
            <el-tag v-if="row.enabled" type="success">
              启用
            </el-tag>
            <el-tag v-else type="danger">
              禁用
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="140" fixed="right" header-align="center" align="center">
          <template #default="{ row }">
            <el-button v-auth="'api:admin:dict:update'" icon="ele-EditPen" size="small" text type="primary" @click="onEdit(row)">
              编辑
            </el-button>
            <el-button v-auth="'api:admin:dict:delete'" icon="ele-Delete" size="small" text type="danger" @click="onDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="my-flex my-flex-end" style="margin-top: 20px">
        <el-pagination
          v-model:currentPage="state.pageInput.currentPage"
          v-model:page-size="state.pageInput.pageSize"
          :total="state.total"
          :page-sizes="[10, 20, 50, 100]"
          small
          background
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="onSizeChange"
          @current-change="onCurrentChange"
        />
      </div>
    </el-card>

    <DictForm ref="dictFormRef" :title="state.dictFormTitle" />
  </div>
</template>

<style scoped></style>
