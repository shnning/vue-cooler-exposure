import Exposure from "./exposure";

declare module 'vue/types/vue' {
  interface Vue {
    $exposure: Exposure
  }
}

declare global {
  interface HTMLElement {
    payload?: Object
  }
}
