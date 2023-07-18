<script lang="ts" setup name="admin/user/components/my-select-user">
import type { PropType } from 'vue'
import { defineAsyncComponent, reactive, ref } from 'vue'
import type { UserGetPageOutput } from '@/api/admin/data-contracts'

const props = defineProps({
  name: String as PropType<string | undefined | null>,
  modelValue: Number as PropType<number | undefined | null>,
})

const emits = defineEmits(['update:modelValue'])

// 引入组件
const UserSelect = defineAsyncComponent(() => import('./user-select.vue'))

const userSelectRef = ref()

const state = reactive({
  label: props.name,
})

function onOpen() {
  userSelectRef.value!.open()
}

function onClear() {
  emits('update:modelValue', undefined)
}

async function onSureUser(user: UserGetPageOutput) {
  userSelectRef.value.close()
  if ((user?.id as number) > 0) {
    state.label = user.name as string

    emits('update:modelValue', user.id)
  }
}
</script>

<template>
  <el-select
    v-model="state.label"
    placeholder="请选择直属主管"
    remote
    :suffix-transition="false"
    suffix-icon="ele-MoreFilled"
    class="w100"
    v-bind="$attrs"
    @click="onOpen"
    @clear="onClear"
  />

  <UserSelect ref="userSelectRef" title="选择直属主管" :modal="true" v-bind="$attrs" @sure="onSureUser" />
</template>

<style scoped></style>
