<script setup lang="ts">
import { appName } from '~/constants'
import '@/assets/theme/index.css'
import other from '@/utils/other'
import setIntroduction from '@/utils/setIconfont'

const nuxtApp = useNuxtApp()

const route = useRoute()

other.elSvg(nuxtApp)
useHead({
  title: appName,
})

// 设置初始化，防止刷新时恢复默认
onBeforeMount(() => {
  // 设置批量第三方 icon 图标
  setIntroduction.cssCdn()
  // 设置批量第三方 js
  setIntroduction.jsCdn()
})

watch(
  () => route.path,
  () => {
    other.useTitle()
  },
  {
    deep: true,
  },
)
</script>

<template>
  <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" /> <!-- I'm here -->
  <NuxtPage />
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #101014;
  color: white;

}

html.light {
  background: #f6f9f8;
  color: black;
}
</style>
