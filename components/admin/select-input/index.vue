<script lang="ts" setup>
import type { PropType } from 'vue'
import { reactive, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

const props = defineProps({
  modelValue: Object as PropType<any | undefined | null>,
  filters: {
    type: Array<DynamicFilterInfo>,
    default() {
      return []
    },
  },
})

const emits = defineEmits(['update:modelValue', 'search'])

const filters = props.filters.filter(a => a.componentName === 'el-input')
let filter = {} as DynamicFilterInfo
if (filters.length > 0)
  filter = cloneDeep(filters.find(a => a.defaultSelect) || filters[0])

const state = reactive({
  filters,
  filter: {
    field: props.modelValue?.field || filter.field,
    operator: props.modelValue?.operator || filter.operator,
    value: props.modelValue?.value || filter.value,
  } as DynamicFilterInfo,
})

function onChange() {
  state.filter.value = ''
}

function onSearch() {
  emits('search', cloneDeep(state.filter))
}

watch(
  () => state.filter,
  () => {
    emits('update:modelValue', cloneDeep(state.filter))
  },
  { deep: true },
)
</script>

<template>
  <el-input v-model="state.filter.value" class="my-input-with-select" clearable v-bind="$attrs" @keyup.enter="onSearch">
    <template v-if="state.filters.length > 0" #prepend>
      <el-select v-model="state.filter.field" style="width: 100px" @change="onChange">
        <el-option v-for="field in state.filters" :key="field.field" :label="field.description" :value="field.field" />
      </el-select>
    </template>
  </el-input>
</template>

<style scoped lang="scss">
.my-input-with-select :deep(.el-input-group__prepend) {
  background-color: var(--el-fill-color-blank);
}
</style>
