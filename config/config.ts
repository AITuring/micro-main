// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;
// TODO 根据环境变量动态配置环境
const DEV = {
  alpha: '//micro-alpha.vercel.app:7081',
  Liao: '//micro-main.vercel.app:7083',
  PPTist: '//micro-main.vercel.app:7084',
};

const PRODUCTION = {
  alpha: 'https://micro-alpha.vercel.app/',
  Liao: '//micro-main.vercel.app:7083',
  PPTist: '//micro-main.vercel.app:7084',
};

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 按需加载
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  // 快速刷新
  fastRefresh: {},
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'alpha',
          entry: 'https://micro-alpha.vercel.app/',
        },
        // {
        //   name: 'avatar-gen',
        //   entry: '//localhost:7082',
        // },
        {
          name: 'Liao',
          entry: 'https://liao.vercel.app/',
        },
        {
          name: 'PPTist',
          entry: 'https://ppt-ist.vercel.app/',
        },
        {
          name: 'shi',
          entry: 'https://shi.vercel.app/',
        },
        {
          name: 'jsplumb',
          entry: 'https://vue-jsplumb-editor.vercel.app/',
        },
      ],
    },
  },
});
