<script lang="ts" setup>
import type { PropType } from 'vue'
import { reactive, ref, watch } from 'vue'
import iconSelect from './icon-select.vue'
</script>

<script lang="ts">
const props = defineProps({
  modelValue: String as PropType<string | undefined | null>,
})

const emits = defineEmits(['update:modelValue'])

const iconSelectRef = ref()

const state = reactive({
  value: props.modelValue,
})

function onOpen() {
  iconSelectRef.value!.open()
}

function onClear() {
  emits('update:modelValue', undefined)
}

async function onSure(value: string) {
  iconSelectRef.value.close()
  if (value) {
    state.value = value
    emits('update:modelValue', value)
  }
}

watch(
  () => state.value,
  () => {
    emits('update:modelValue', state.value)
  },
)
</script>

<template>
  <el-input v-model="state.value" placeholder="请选择图标" class="w100" v-bind="$attrs" @clear="onClear">
    <template #prepend>
      <c-svg-icon :name="state.value" />
    </template>
    <template #append>
      <el-button icon="ele-MoreFilled" @click="onOpen" />
    </template>
  </el-input>

  <icon-select ref="iconSelectRef" v-model="state.value" title="选择图标" :modal="true" v-bind="$attrs" @sure="onSure" />
</template>

<style scoped></style>
