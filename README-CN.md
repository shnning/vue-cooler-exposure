# vue-cooler-exposure

[![npm version](https://img.shields.io/npm/v/vue-cooler-exposure.svg?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![npm downloads](https://img.shields.io/npm/dm/vue-cooler-exposure.svg?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![npm license](https://img.shields.io/npm/l/vue-cooler-exposure?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[英文说明](./README.md)

一款用来做曝光检测和获取曝光节点数据的vue插件。下面是一些特性：
- 轻量，只做一件事就是曝光元素
- 更好的性能，使用浏览器的原生api Intersectionobserver实现
- 你可以针对曝光的数据做自己的处理

## Demo
```bash
npm install
npm run dev
```

## 要求
- Vue 2.x


## 安装
### npm
```bash
npm install vue-cooler-exposure
```


## 使用
main.js:
```javascript
import Vue from 'vue';
import exposurePlugin from 'vue-cooler-exposure';

Vue.use(lazyloadPlugin);
// 可以在Vue.prototype和Vue实例中获取到$exposure
// 在addAfterRecordCallback注册callback，该callback将在有元素可见性发生变化的时候被调用
Vue.prototype.$exposure.addAfterRecordCallback
(exposureList => {
  console.log(exposureList);
  // 可以在这里上传曝光的数据或者处理数据
});
```

template:
```html
<div>
  <img v-exposure="data1" />
  <div v-exposure="data2"></div>
</div>
```
通过v-exposure设置在callback中获取的数据


## 插件的可选项
|key|description|default|options|
|---|-----------|-------|-------|
|border|设置可视区域的边界|{top: 0, bottom: 0, left: 0, right: 0}(默认window))|{top, bottom, left, right}|
|threshold|element进入可视区域的比例|1(默认是1，意味着element完全进入可视区域触发回调事件)|0~1|
|delay|防抖延迟时间(单位: ms)|800|number|

## APIs
|key|description|default param|type|
|---|-----------|-------|-------|
|addAfterRecordCallback|接受一个callback，当页面有element可见性发生变化的时候，触发该回调|null|(exposureList): void|
|exposureCheck|手动触发曝光事件（曝光当前页面），并调用callback|no args|no args|

# 兼容性
该插件的兼容性取决于[IntersectionObserver的兼容性](https://caniuse.com/intersectionobserver)

## License
[MIT](./LICENSE)
