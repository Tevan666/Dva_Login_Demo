import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/graphin', component: '@/pages/graphin/index' },

  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: true,
    lazyLoad: true,
  },
  mfsu: {},
  webpack5: {},
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:5500/',
      'changeOrigin': true,
    }
  }
});
