import _Vue, { PluginObject, VNodeDirective } from 'vue';
import Exposure from './exposure';
import { ExposureOptions } from './type';

export const ExposurePlugin: PluginObject<ExposureOptions> = {
  install(Vue: typeof _Vue, options?) {
    const $exposure = (Vue.prototype.$exposure = new Exposure(options));

    Vue.directive('exposure', {
      bind(el: HTMLElement, binding: VNodeDirective) {
        $exposure.add(el, binding);
      },
      update(el: HTMLElement, binding: VNodeDirective) {
        $exposure.update(el, binding);
      },
    });
  },
};
