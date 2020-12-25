import Vue from 'vue';
import exposurePlugin from '../../dist/index';
import App from './App.vue';

Vue.use(exposurePlugin);

Vue.prototype.$exposure
  .addAfterRecordCallback(items => {
    console.log(items);
  })
  .addAfterRecordCallback(items => {
    console.log('second callback: ', items);
  });

new Vue({
  el: '#app',
  render() {
    return <App />;
  },
});
