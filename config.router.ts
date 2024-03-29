/**
 * 生成面包屑 key和title键值对
 * @returns {
 *  key:title
 * }
 */
export const getBreadCrumbMenus = () => {
  const result: Record<string, string> = {};
  const generate = (originArr: any[]) => {
    originArr.forEach((item) => {
      const { key, children } = item;
      if (key) result[key] = item.title;
      if (Array.isArray(children) && children.length) {
        generate(children);
      } else return;
    });
  };
  generate(menus);
  return result;
};
export const menus = [
  // 菜单的配置项，用于动态渲染 key:	唯一标志 title: 菜单项值 path：用于路由跳转
  {
    key: 'dashboard',
    title: 'dashboard',
    iconCode: 'icon-dashboard',
    path: '/dashboard',
  },
  {
    key: 'complete-demo',
    title: '组件',
    iconCode: 'icon-zujian',
    children: [
      { key: 'modal', title: '动态对话框', path: '/complete-demo/modal' },
      {
        key: 'IconsList',
        title: 'icons列表',
        path: '/complete-demo/IconsList',
      },
      { key: 'detail', title: '详情页', path: '/complete-demo/detail' },
      { key: 'table', title: '表格', path: '/complete-demo/table' },
      {
        key: 'virtualTable',
        title: '虚拟表格',
        path: '/complete-demo/virtualTable',
      },
      {
        key: 'publishDocs',
        title: '组件文档',
        path: '/complete-demo/publishDocs',
      },
    ],
  },
  {
    key: 'unComplete-demo',
    title: '未封装组件',
    iconCode: 'icon-zujian',
    children: [
      // { key: 'virtualTable', title: '虚拟表格', path: '/unComplete-demo/virtualTable' },
    ],
  },
  {
    key: 'protable-cn',
    title: 'ProTable表格',
    iconCode: 'icon-xiaoxizhongxin',
    path: '/protable-cn',
  },
  {
    key: 'echarts-explore',
    title: 'echart探索',
    iconCode: 'icon-tubiao-bingtu',
    children: [
      {
        key: 'lineAndpie',
        title: '折线图&饼图',
        path: '/echarts-explore/lineAndpie',
      },
      { key: 'ploar', title: '极坐标系', path: '/echarts-explore/polar' },
      // {
      //   key: 'scrollTable',
      //   title: '滚动表格',
      //   path: '/echarts-explore/scrollTable',
      // },
      // {
      //   key: 'bigScree',
      //   title: '数据大屏',
      //   path: '/echarts-explore/bigScreen',
      // },
      { key: 'animate', title: 'css3动画', path: '/echarts-explore/animate' },
    ],
  },
  {
    key: 'sortable',
    title: '拖拽数据',
    iconCode: 'icon-tuozhuai',
    path: '/sortable',
  },
  {
    key: 'debug-page',
    title: '调试组件页面',
    iconCode: 'icon-tiaoshi1',
    path: '/debug-page',
  },
  // {
  //   key: 'select-cn',
  //   title: 'select选择',
  //   iconCode: 'icon-select',
  //   path: '/select-cn',
  // },
  // {
  //   key: 'fetch-Spell',
  //   title: '封装多个函数组件',
  //   iconCode: 'icon-xiaoxizhongxin',
  //   path: '/fetch-Spell',
  // },
  // {
  //   key: 'assembly',
  //   title: 'assembly',
  //   iconCode:'icon-xiaoxizhongxin',
  //   children: [
  //     {
  //       key: 'select',
  //       title: 'select',
  //       iconCode: 'icon-xiaoxizhongxin',
  //       path: '/assembly/select',
  //     },
  //   ],
  // },

  // {
  //   key: 'message',
  //   title: '消息中心',
  //   iconCode: 'icon-xiaoxizhongxin',
  //   path: '/message',
  // },
  // {
  //   key: 'globalState',
  //   title: 'hooks的全局状态共享',
  //   iconCode: 'icon-WebHooks',
  //   path: '/globalState',
  // },
  // {
  //   key: 'test-ts',
  //   title: 'test模块',
  //   iconCode: 'icon-ceshishenqing',
  //   path: '/test-ts',
  // },
  {
    key: 'antdUI',
    title: 'antd组件',
    iconCode: 'icon-antdesign',
    children: [
      { key: 'g2-legend', title: 'G2可视化使用', path: '/antdUI/g2-legend' },
      { key: 'calendar', title: 'Calender日历', path: '/antdUI/calendar-cn' },
      { key: 'form-cn', title: 'Form表单', path: '/antdUI/form-cn' },
      { key: 'step-cn', title: 'Step步骤条', path: '/antdUI/step-cn' },
      { key: 'image-cn', title: 'Image图片', path: '/antdUI/image-cn' },
      {
        key: 'combination',
        title: 'Tabs+Table',
        path: '/antdUI/combination',
      },
      { key: 'tree-cn', title: 'tree树', path: '/antdUI/tree-cn' },
      // {
      //   key: 'upload',
      //   title: 'Upload上传',
      //   children: [
      //     {
      //       key: 'file-upload',
      //       title: '文件上传',
      //       path: '/antdUI/upload/file-upload',
      //     },
      //     {
      //       key: 'image-upload',
      //       title: '图片上传',
      //       path: '/antdUI/upload/image-upload',
      //     },
      //   ],
      // },
      {
        key: 'datePicker-cn',
        title: 'DatePicker日期',
        path: '/antdUI/datePicker-cn',
      },
      {
        key: 'datePicker-cn1',
        title: 'DatePicker日期1',
        path: '/antdUI/datePicker-cn1',
      },
    ],
  },
  {
    key: 'about',
    title: '关于',
    iconCode: 'icon-select',
    path: '/about',
  },
];
