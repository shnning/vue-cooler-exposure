# vue-cooler-exposure

[![npm version](https://img.shields.io/npm/v/vue-cooler-exposure.svg?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![npm downloads](https://img.shields.io/npm/dm/vue-cooler-exposure.svg?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![npm license](https://img.shields.io/npm/l/vue-cooler-exposure?style=flat-square)](https://www.npmjs.com/package/vue-cooler-exposure)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[中文说明](./README-CN.md)

A vue plugin used to exposure elements and record data. Here are the advantages:
- Be lighterweight, just do one thing is that exposure elements
- use the browser native API Intersectionobserver, better performance
- offer hooks which you can deal with the data of elements exposured

## Demo
```bash
npm install
npm run dev
```

## Requirements
- Vue 2.x


## Installation
### npm
```bash
npm install vue-cooler-exposure
```


## Usage
main.js:
```javascript
import Vue from 'vue';
import exposurePlugin from 'vue-cooler-exposure';

Vue.use(lazyloadPlugin);
// you can get $exposure in the prototype of Vue and Vue instance.
// register callback which would be called when visibility of some element has changed.
Vue.prototype.$exposure.addAfterRecordCallback
(exposureList => {
  console.log(exposureList);
  // upload exposureList or some ...
})
```

template:
```html
<div>
  <img v-exposure="data1" />
  <div v-exposure="data2"></div>
</div>
```
v-exposure would set the data, which you could get it in the callback args, in the element.


## Plugin Options
|key|description|default|options|
|---|-----------|-------|-------|
|border|the viewport you want to listen|{top: 0, bottom: 0, left: 0, right: 0}(window)|{top, bottom, left, right}|
|threshold|the proportion of element insert into viewport|0(0 means that when a element go into the viewport, image begins load)|0~1|
|delay|a delay time for debounce(unit: ms)|800|number|

## APIs
|key|description|default param|type|
|---|-----------|-------|-------|
|addAfterRecordCallback|when visibility of some element has changed, it would be called and the arg is the list of data which elements in viewport take.|null|(exposureList): void|
|exposureCheck|call callback at once|no args|no args|

## Compatibility
The compatibility of this plugin depends on [compatibility of IntersectionObserver](https://caniuse.com/intersectionobserver)
## License
[MIT](./LICENSE)
