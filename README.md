# qiankun 主应用

## 技术栈

antdesign pro

## 子应用列表

### alpha

umi 子应用，路由`/hello`用来解决子应用新页面打开其他页面，会跳到主应用同路由页面问题

### Liao

dumi 制作的博客，现在的问题是子应用打开后会覆盖主应用的菜单

### shi

create-react-app 创建的子应用，现在字体加载不出来

### PPTist

vue3+ts 子应用，没有导出生命周期，但是也可以用，现在会遮住主应用菜单，且会出现样式错乱

### jsplumb

vue2 子应用，工作项目子应用使用 jsplumb 库后，接入主应用会出现无法连线，报错，正在研究中...

## TODO

- [ ] ppt 子应用还是得导出生命周期
- [ ] shi 字体出不来...
- [ ] 主子应用菜单样式会错乱，得好好改一下
- [ ] micro-alpha 子应用新页面打开其他页面，会跳到主应用同路由页面
- [ ] 主子应用打包有点大，性能也得好好优化
- [ ] jsplumb 里面 jsplumb 库会用到 window，子应用的 window 打印出来是 proxy，会报错
- [ ] 等晚上验证 pptist 可以运行时，删除 micro-ppt 代码库
