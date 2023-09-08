import { ComponentType, type ComponentInfo, Framework } from "./types";

export const components: ComponentInfo[] = [
  {
    name: 'Element UI',
    type: [ComponentType.UI],
    framework: [Framework.Vue],
    repository: 'https://github.com/ElemeFE/element',
    homepage: 'https://element.eleme.io/',
    description: 'A Vue.js 2.0 UI Toolkit for Web',
  },
  {
    name: 'Vux',
    type: [ComponentType.UI],
    framework: [Framework.Vue],
    repository: 'https://github.com/airyland/vux',
    homepage: 'https://vux.li/',
    description: 'Mobile UI Components based on Vue & WeUI',
  },
  {
    name: 'Ant Design',
    type: [ComponentType.UI],
    framework: [Framework.React],
    repository: 'https://github.com/ant-design/ant-design',
    homepage: 'https://ant.design/',
    description: 'A UI Design Language',
  }
]
