<script setup lang="ts" name="layoutDefaults">
import { computed, defineAsyncComponent, nextTick, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '@/stores/themeConfig'
import { NextLoading } from '@/utils/loading'

// import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import { useTagsViewRoutes } from '@/stores/tagsViewRoutes'

// 引入组件
const LayoutAside = defineAsyncComponent(() => import('@/layouts/admin/aside.vue'))
const LayoutHeader = defineAsyncComponent(() => import('@/layouts/admin/header.vue'))
const LayoutMain = defineAsyncComponent(() => import('@/layouts/admin/main.vue'))
const LayoutParentView = defineAsyncComponent(() => import('@/layouts/admin/routerView/parent.vue'))
const LayoutFooter = defineAsyncComponent(() => import('@/layouts/admin/footer/index.vue'))

// 定义变量内容
const layoutScrollbarRef = ref<RefType>('')
const layoutMainRef = ref<InstanceType<typeof LayoutMain>>()
const route = useRoute()
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)
const layoutMainScrollbarRef = ref()
const storesTagsViewRoutes = useTagsViewRoutes()
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes)
// 重置滚动条高度
function updateScrollbar() {
  // 更新父级 scrollbar
  layoutScrollbarRef.value?.update()
  // 更新子级 scrollbar
  layoutMainRef.value?.layoutMainScrollbarRef.update()
}
// 重置滚动条高度，由于组件是异步引入的
function initScrollBarHeight() {
  nextTick(() => {
    setTimeout(() => {
      updateScrollbar()
      if (layoutScrollbarRef.value)
        layoutScrollbarRef.value.wrapRef.scrollTop = 0
      if (layoutMainRef.value)
        layoutMainRef.value!.layoutMainScrollbarRef.wrapRef.scrollTop = 0
    }, 500)
  })
}
// 页面加载时
onMounted(() => {
  initScrollBarHeight()
  NextLoading.done(600)
})
// 监听路由的变化，切换界面时，滚动条置顶
watch(
  () => route.path,
  () => {
    initScrollBarHeight()
  },
)
// 监听 themeConfig 配置文件的变化，更新菜单 el-scrollbar 的高度
watch(
  () => [themeConfig.value.isTagsview, themeConfig.value.isFixedHeader],
  () => {
    nextTick(() => {
      updateScrollbar()
    })
  },
  {
    deep: true,
  },
)

// 引入组件

// 设置 footer 显示/隐藏
const isFooter = computed(() => {
  return themeConfig.value.isFooter && !route.meta.isIframe
})
// 设置 header 固定
const isFixedHeader = computed(() => {
  return themeConfig.value.isFixedHeader
})
// 设置 Backtop 回到顶部
const setBacktopClass = computed(() => {
  if (themeConfig.value.isFixedHeader)
    return '.layout-backtop-header-fixed .el-scrollbar__wrap'
  else return '.layout-backtop .el-scrollbar__wrap'
})
// 设置主内容区的高度
const setMainHeight = computed(() => {
  if (isTagsViewCurrenFull.value)
    return '0px'
  const { isTagsview, layout } = themeConfig.value
  if (isTagsview && layout !== 'classic')
    return '85px'
  else return '51px'
})
// 页面加载前
onMounted(() => {
  NextLoading.done(600)
})

// 暴露变量
defineExpose({
  layoutMainScrollbarRef,
})
</script>

<template>
  <el-container class="layout-container">
    <LayoutAside />
    <el-container class="layout-container-view h-full">
      <el-scrollbar ref="layoutScrollbarRef" class="layout-backtop">
        <LayoutHeader />
        <el-main ref="layoutMainRef" class="layout-main" :style="isFixedHeader ? `height: calc(100% - ${setMainHeight})` : `minHeight: calc(100% - ${setMainHeight})`">
          <el-scrollbar
            ref="layoutMainScrollbarRef"
            class="layout-main-scroll layout-backtop-header-fixed"
            wrap-class="layout-main-scroll"
            view-class="layout-main-scroll"
          >
            <div class="layout-parent w-full">
              <slot />
            </div>
            <LayoutFooter v-if="isFooter" />
          </el-scrollbar>
          <el-backtop :target="setBacktopClass" :right="15" />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
