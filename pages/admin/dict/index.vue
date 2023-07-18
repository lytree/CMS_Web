<script lang="ts" setup name="admin/dict">
import { defineAsyncComponent, ref } from 'vue'
import { Pane } from 'splitpanes'
import type { DictTypeGetPageOutput } from '@/api/admin/data-contracts'

// 引入组件
const DictType = defineAsyncComponent(() => import('./dict-type.vue'))
const Dict = defineAsyncComponent(() => import('./dict.vue'))
const MyLayout = defineAsyncComponent(() => import('//components/my-layout/index.vue'))

const dictRef = ref()

function onChange(data: DictTypeGetPageOutput) {
  dictRef.value?.refresh(data)
}
</script>

<template>
  <MyLayout>
    <Pane size="50" min-size="30" max-size="70">
      <DictType @change="onChange" />
    </Pane>
    <Pane>
      <Dict ref="dictRef" />
    </Pane>
  </MyLayout>
</template>

<style scoped></style>
