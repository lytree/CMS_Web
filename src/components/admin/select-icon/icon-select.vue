<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, defineComponent, onMounted, reactive } from 'vue'
import initIconfont from '@/utils/getStyleSheets'
</script>

<script lang="ts">
// 定义父组件传过来的值
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  sureLoading: {
    type: Boolean,
    default: false,
  },
  // icon 图标类型
  type: {
    type: String,
    default: () => 'all',
  },
  // 自定义空状态描述文字
  emptyDescription: {
    type: String,
    default: () => '无相关图标',
  },
  modelValue: {
    type: String as PropType<string | undefined | null>,
    default: () => '',
  },
})

// 定义子组件向父组件传值/事件
const emits = defineEmits(['update:modelValue', 'get', 'clear', 'sure'])

const state = reactive({
  showDialog: false,
  loading: false,
  fontIconPrefix: props.modelValue,
  fontIconSearch: '',
  fontIconSheetsList: [],
  fontIconType: 'ele',
})

// 处理 icon type 类型为 all 时，类型 ali、ele、awe 回显问题
function initFontIconTypeEcho() {
  if (props.modelValue!.includes('iconfont'))
    onIconChange('ali')
  else if (props.modelValue!.includes('ele-'))
    onIconChange('ele')
  else if (props.modelValue!.includes('fa'))
    onIconChange('awe')
  else onIconChange('ele')
}

// 图标搜索及图标数据显示
const fontIconSheetsFilterList = computed(() => {
  if (!state.fontIconSearch)
    return state.fontIconSheetsList
  const search = state.fontIconSearch.trim().toLowerCase()
  return state.fontIconSheetsList.filter((item: string) => {
    if (item.toLowerCase()?.indexOf(search) !== -1)
      return item
  })
})

// 初始化数据
async function initFontIconData(type: string) {
  state.fontIconSheetsList = []
  if (type === 'ali') {
    await initIconfont.ali().then((res: any) => {
      // 阿里字体图标使用 `iconfont xxx`
      state.fontIconSheetsList = res.map((i: string) => `iconfont ${i}`)
    })
  }
  else if (type === 'ele') {
    await initIconfont.ele().then((res: any) => {
      state.fontIconSheetsList = res
    })
  }
  else if (type === 'awe') {
    await initIconfont.awe().then((res: any) => {
      // fontawesome字体图标使用 `fa xxx`
      state.fontIconSheetsList = res.map((i: string) => `fa ${i}`)
    })
  }
}

// 图标点击切换
function onIconChange(type: string) {
  state.fontIconType = type
  initFontIconData(type)
}

// 获取当前点击的 icon 图标
function onColClick(v: string) {
  state.fontIconPrefix = v
  // emits('get', state.fontIconPrefix)
  // emits('update:modelValue', state.fontIconPrefix)
}

// 页面加载时
onMounted(() => {})

// 打开对话框
async function open() {
  await initFontIconTypeEcho()
  state.showDialog = true
}

// 关闭对话框
function close() {
  state.showDialog = false
}
// 取消
function onCancel() {
  state.showDialog = false
}

// 确定
function onSure() {
  emits('sure', state.fontIconPrefix)
}

defineExpose({
  open,
  close,
})

export default defineComponent({
  name: 'MyIconSelect',
})
</script>

<template>
  <el-dialog v-model="state.showDialog" destroy-on-close :title="title" append-to-body draggable width="780px">
    <div style="padding: 0px 0px 8px 8px; background-color: var(--ba-bg-color)">
      <div>
        <el-input v-model="state.fontIconSearch" placeholder="筛选图标" clearable />
      </div>
      <div class="icon-selector-popper">
        <div class="icon-selector-warp">
          <div class="icon-selector-warp-title flex">
            <div class="flex-auto">
              {{ title }}
            </div>
            <div v-if="type === 'all'" class="icon-selector-warp-title-tab">
              <span :class="{ 'span-active': state.fontIconType === 'ali' }" class="ml10" title="iconfont 图标" @click="onIconChange('ali')">
                ali
              </span>
              <span :class="{ 'span-active': state.fontIconType === 'ele' }" class="ml10" title="elementPlus 图标" @click="onIconChange('ele')">
                ele
              </span>
              <span :class="{ 'span-active': state.fontIconType === 'awe' }" class="ml10" title="fontawesome 图标" @click="onIconChange('awe')">
                awe
              </span>
            </div>
          </div>
          <div class="icon-selector-warp-row">
            <el-row v-if="fontIconSheetsFilterList.length > 0">
              <el-col v-for="(v, k) in fontIconSheetsFilterList" :key="k" :xs="6" :sm="4" :md="4" :lg="4" :xl="4" @click="onColClick(v)">
                <div class="icon-selector-warp-item" :class="{ 'icon-selector-active': state.fontIconPrefix === v }" @dblclick="onSure">
                  <div class="flex-margin">
                    <div class="icon-selector-warp-item-value my-flex-column my-flex-items-center">
                      <SvgIcon :name="v" />
                      <div class="icon-name my-line-1" :title="v">
                        {{ v }}
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-empty v-if="fontIconSheetsFilterList.length <= 0" :image-size="100" :description="emptyDescription" />
          </div>
        </div>
      </div>
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

.icon-selector-popper {
  padding: 0 !important;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-title {
  height: 40px;
  line-height: 40px;
  padding: 0px 5px;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-title .icon-selector-warp-title-tab span {
  cursor: pointer;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-title .icon-selector-warp-title-tab span:hover {
  color: var(--el-color-primary);
  text-decoration: underline;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-title .icon-selector-warp-title-tab .span-active {
  color: var(--el-color-primary);
  text-decoration: underline;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row {
  border: 1px solid var(--el-border-color);
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-top: 1px solid var(--el-border-color);
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .el-scrollbar__bar.is-horizontal {
  display: none;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item {
  display: flex;
  border: 1px solid var(--el-border-color);
  height: 90px;
  border-left-width: 0px;
  border-top-width: 0px;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item .icon-selector-warp-item-value i {
  font-size: 20px !important;
  color: var(--el-text-color-regular);
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item .icon-selector-warp-item-value .icon-name {
  margin-top: 8px;
  padding: 0px 5px;
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item:hover {
  cursor: pointer;
  background-color: var(--el-color-primary-light-9);
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item:hover .icon-selector-warp-item-value i,
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-warp-item:hover .icon-selector-warp-item-value .icon-name {
  color: var(--el-color-primary);
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-active {
  background-color: var(--el-color-primary-light-9);
}
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-active .icon-selector-warp-item-value i,
.icon-selector-popper .icon-selector-warp .icon-selector-warp-row .icon-selector-active .icon-selector-warp-item-value .icon-name {
  color: var(--el-color-primary);
}
</style>
