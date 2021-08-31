import { defineConfig } from 'dumi';
import path from 'path';

const pkaDocPath = path.resolve(__dirname, '../packages/pkg-a/docs');
console.log('pkaDocPath', pkaDocPath);
// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'dumi-demo',
  mode: 'site',
  publicPath: '/',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  devServer: {
    port: 3000,
  },
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  resolve: {
    includes: ['docs', pkaDocPath],
  },
});
