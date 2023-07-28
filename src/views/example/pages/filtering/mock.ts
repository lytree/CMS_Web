// 导航数据
export const filtering = [
  {
    title: '权限',
    isMore: false,
    isShowMore: false,
    id: 0,
    children: [
      {
        id: '01',
        label: '全部',
        active: true,
      },
      {
        id: '02',
        label: '普通用户',
        active: false,
      },
      {
        id: '03',
        label: '管理员',
        active: false,
      },
    ],
  },
  {
    title: '布局',
    isMore: false,
    isShowMore: false,
    id: 1,
    children: [
      {
        id: 11,
        label: '全部',
        active: true,
      },
      {
        id: 12,
        label: '默认',
        active: false,
      },
      {
        id: 13,
        label: '经典',
        active: false,
      },
      {
        id: 14,
        label: '横向',
        active: false,
      },
      {
        id: 15,
        label: '分栏',
        active: false,
      },
    ],
  },
  {
    title: '配置',
    isMore: false,
    isShowMore: false,
    id: 2,
    children: [
      {
        id: 21,
        label: '全部',
        active: true,
      },
      {
        id: 22,
        label: '开启 Breadcrumb',
        active: false,
      },
      {
        id: 23,
        label: '开启 Tags-View',
        active: false,
      },
      {
        id: 24,
        label: '固定 Header',
        active: false,
      },
      {
        id: 25,
        label: '侧边栏 Logo',
        active: false,
      },
      {
        id: 26,
        label: '开启折叠 NavMenu',
        active: false,
      },
      {
        id: 27,
        label: '开启一个 NavMenu 展开',
        active: false,
      },
      {
        id: 28,
        label: '登录用户头像',
        active: false,
      },
    ],
  },
]

// 列表数据
export const filterList = [
  {
    img: 'http://news.sznews.com/pic/2020-08/14/9d9c9a60-f0af-41aa-b617-683b07c87642.jpg',
    title: '嘉陵江2020年第1号洪水”在嘉陵江支流涪江形成',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 1,
  },
  {
    img: 'http://www.sznews.com/news/pic/2020-08/13/0ea47d3c-feb9-4bd7-8597-a8a373aa6340c6ec12c7-3b33-4528-91a6-85ec8ca1df67_watermark.png',
    title: '让《民法典》走近群众 盐田街道开展人民调解宣传活动',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 2,
  },
  {
    img: 'http://www.sznews.com/photo/pic/2020-08/12/a08d6eb0-1d53-4f76-a313-ad3e5d701f98.jpg',
    title: '记者手记：可可西里，“挪”向“藏羚羊大产房”的14个半小时',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 3,
  },
  {
    img: 'http://www.sznews.com/photo/pic/2020-08/11/43cc0e14-9bca-45b9-9a8b-342e09d6a4c7.jpg',
    title: '以优异成绩庆祝深圳经济特区建立40周年',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 4,
  },
  {
    img: 'http://www.sznews.com/photo/pic/2020-08/11/a4dc322b-68ec-40e6-8906-3124142c3e49.jpg',
    title: '草原上的“太阳姑娘”',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 5,
  },
  {
    img: 'http://www.sznews.com/zhuanti/pic/2020-08/07/57f087b4-4812-46cc-adb9-ead73621284e.png',
    title: '奇观天下|带你走进非洲野生动物观光第一目的地',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 6,
  },
  {
    img: 'http://news.sznews.com/pic/2020-09/02/t2_(101X54X600X335)7cd39301-d9cf-45f1-91c3-9575b1e5ce0e.jpg.2',
    title: '五角大楼发布“中国军力报告” 华春莹： 罔顾事实，充满偏见',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 7,
  },
  {
    img: 'http://news.sznews.com/pic/2020-09/02/b8b41d9c-0508-4498-8d37-6e597493769f.jpg',
    title: '最新地铁消息汇总：4号线北延、2号线三期、8号线一期等今年通车',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 8,
  },
  {
    img: 'http://www.sznews.com/photo/pic/2020-08/10/1635374c-f4d6-475c-ac47-1334176f365d.png',
    title: '9月1日深圳新增5例无症状感染者！钟南山这段话冲上热搜！',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 9,
  },
  {
    img: 'http://www.sznews.com/news/pic/2020-08/13/646e5458-92b7-4636-9940-9b0799babfe1.png',
    title: '全能“小福宝” 为文明社区建设添砖加瓦',
    evaluate: (Math.random() * 10).toFixed(2),
    collection: (Math.random() * 100).toFixed(2),
    price: (Math.random() * 10).toFixed(2),
    monSales: (Math.random() * 20).toFixed(2),
    id: 10,
  },
]
