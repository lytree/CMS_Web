<script setup lang="ts">
import { computed, defineAsyncComponent, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTagsViewRoutes } from '@/stores/tagsViewRoutes'
import { useKeepALiveNames } from '@/stores/keepAliveNames'
import { useThemeConfig } from '@/stores/themeConfig'
import { Session } from '@/utils/storage'
import mittBus from '@/utils/mitt'

// 引入组件
const Iframes = defineAsyncComponent(() => import('@/layouts/admin/routerView/iframes.vue'))
const LockScreen = defineAsyncComponent(() => import('@/layouts/admin/lockScreen/index.vue'))
const Setings = defineAsyncComponent(() => import('@/layouts/admin/navBars/topBar/setings.vue'))
const CloseFull = defineAsyncComponent(() => import('@/layouts/admin/navBars/topBar/closeFull.vue'))
// const Upgrade = defineAsyncComponent(() => import('@/layouts/admin/upgrade/index.vue'))

// 定义变量内容
// 定义变量内容
const route = useRoute()
const router = useRouter()
const setingsRef = ref()
const stores = useTagsViewRoutes()
const storesKeepAliveNames = useKeepALiveNames()
const storesThemeConfig = useThemeConfig()
// 定义变量内容
const { messages, locale } = useI18n()
const { keepAliveNames, cachedViews } = storeToRefs(storesKeepAliveNames)
const { themeConfig } = storeToRefs(storesThemeConfig)

const state = reactive<ParentViewState>({
  refreshRouterViewKey: '', // 非 iframe tagsview 右键菜单刷新时
  iframeRefreshKey: '', // iframe tagsview 右键菜单刷新时
  keepAliveNameList: [],
  iframeList: [],
})

// 设置主界面切换动画
const setTransitionName = computed(() => {
  return themeConfig.value.animation
})
// 获取组件缓存列表(name值)
const getKeepAliveNames = computed(() => {
  return themeConfig.value.isTagsview ? cachedViews.value : state.keepAliveNameList
})
// 设置 iframe 显示/隐藏
const isIframePage = computed(() => {
  return route.meta.isIframe
})
// 获取全局 i18n
const getGlobalI18n = computed(() => {
  return messages.value[locale.value]
})
// 设置锁屏时组件显示隐藏
const getLockScreen = computed(() => {
  // 防止锁屏后，刷新出现不相关界面
  return themeConfig.value.isLockScreen ? themeConfig.value.lockScreenTime > 1 : themeConfig.value.lockScreenTime >= 0
})

// 获取 iframe 组件列表(未进行渲染)
async function getIframeListRoutes() {
  router.getRoutes().forEach((v) => {
    if (v.meta.isIframe) {
      v.meta.isIframeOpen = false
      v.meta.loading = true
      state.iframeList.push({ ...v })
    }
  })
}
// 页面加载前，处理缓存，页面刷新时路由缓存处理
onBeforeMount(() => {
  state.keepAliveNameList = keepAliveNames.value
  mittBus.on('onTagsViewRefreshRouterView', (fullPath: string) => {
    state.keepAliveNameList = keepAliveNames.value.filter((name: string) => route.name !== name)
    state.refreshRouterViewKey = ''
    state.iframeRefreshKey = ''
    nextTick(() => {
      state.refreshRouterViewKey = fullPath
      state.iframeRefreshKey = fullPath
      state.keepAliveNameList = keepAliveNames.value
    })
  })
})
// 页面加载时
onMounted(() => {
  getIframeListRoutes()
  nextTick(() => {
    setTimeout(() => {
      if (themeConfig.value.isCacheTagsView) {
        const tagsViewArr: RouteItem[] = Session.get('tagsViewList') || []
        cachedViews.value = tagsViewArr.filter(item => item.meta?.isKeepAlive).map(item => item.name as string)
      }
    }, 0)
  })
})
// 页面加载时
onMounted(() => {
  nextTick(() => {
    // 监听布局配'置弹窗点击打开
    mittBus.on('openSetingsDrawer', () => {
      setingsRef.value.openDrawer()
    })
    // 获取缓存中的布局配置
    if (Local.get('themeConfig')) {
      storesThemeConfig.setThemeConfig({ themeConfig: Local.get('themeConfig') })
      document.documentElement.style.cssText = Local.get('themeConfigStyle')
    }
    // 获取缓存中的全屏配置
    if (Session.get('isTagsViewCurrenFull'))
      stores.setCurrenFullscreen(Session.get('isTagsViewCurrenFull'))
  })
})
// 页面销毁时，关闭监听布局配置/i18n监听
onUnmounted(() => {
  mittBus.off('openSetingsDrawer', () => { })
})// 监听路由的变化，设置网站标题
// 页面卸载时
onUnmounted(() => {
  mittBus.off('onTagsViewRefreshRouterView', () => {})
})
// 监听路由变化，防止 tagsView 多标签时，切换动画消失
watch(
  () => route.fullPath,
  () => {
    state.refreshRouterViewKey = decodeURI(route.fullPath)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <el-config-provider :locale="getGlobalI18n">
    <div class="h-full w-full">
      <NuxtLayout name="admin">
        <NuxtPage
          v-show="!isIframePage" :key="state.refreshRouterViewKey" class="w-full" :transition="{
            name: setTransitionName,
            mode: 'out-in',
          }"
          :keepalive="{
            include: getKeepAliveNames,
          }"
          :page-key="state.refreshRouterViewKey"
        />
        <transition :name="setTransitionName" mode="out-in">
          <Iframes v-show="isIframePage" class="w-full" :refresh-key="state.iframeRefreshKey" :name="setTransitionName" :list="state.iframeList" />
        </transition>
      </NuxtLayout>
      <Setings v-show="getLockScreen" ref="setingsRef" />
      <CloseFull v-if="!themeConfig.isLockScreen" />
    </div>
  </el-config-provider>
</template>
