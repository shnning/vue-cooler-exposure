import { VNodeDirective } from 'vue';
import { ExposureOptions, IntersectionObserverConfig } from './type';
import { warning, debounce, isIntersecting } from './utils';

export default class Exposure {
  observer!: IntersectionObserver;
  exposureList: Set<HTMLElement>;
  afterRecordCallbackQueue!: Function[];

  constructor(options: ExposureOptions = {}) {
    this.exposureList = new Set<HTMLElement>();
    this.afterRecordCallbackQueue = [];
    this._init(options);
  }

  private _init(options: ExposureOptions) {
    const config = this._initOptions(options);
    const delay = options.delay || 800;
    const exposureCheck = debounce((exposureList: Set<HTMLElement>) => {
      const items = Array.from(exposureList.values()).map(
        el => el.payload
      );
      this.afterRecordCallbackQueue.forEach(fn => {
        fn(items);
      });
    }, delay);

    this.observer = new IntersectionObserver((entries => {
      entries.forEach(entry => {
        if (isIntersecting(entry, config.threshold)) {
          this.exposureList.add(entry.target as HTMLElement);
        } else {
          this.exposureList.delete(entry.target as HTMLElement);
        }
      });
      exposureCheck(this.exposureList);
    }), config);
  }

  private _initOptions(options?: ExposureOptions): IntersectionObserverConfig {
    let config: IntersectionObserverConfig;
    if (options) {
      let { border, threshold = 0 } = options;
      border = { ...{ top: 0, bottom: 0, left: 0, right: 0 }, ...border };
      if (threshold > 1) {
        threshold = 1;
      } else if (threshold < 0) {
        threshold = 0;
      }
      config = {
        rootMargin: `${border.top}px ${border.right}px ${border.bottom}px ${border.left}px`,
        threshold: threshold,
      };
    } else {
      config = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
      };
    }

    return config;
  }

  add(el: HTMLElement, binding: VNodeDirective) {
    const { value } = binding;
    if (!value) {
      warning('v-exposure requires a argument which you want to record.');
    }
    el.payload = value;
    this.observer.observe(el);
  }

  update(el: HTMLElement, binding: VNodeDirective) {
    const { value } = binding;
    if (!value) {
      warning('v-exposure requires a argument which you want to record.');
    }
    el.payload = value;
    this.observer.observe(el);
  }

  addAfterRecordCallback(fn: Function) {
    this.afterRecordCallbackQueue.push(fn);
  }
}
