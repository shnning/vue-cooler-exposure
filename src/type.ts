export interface Border {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface ExposureOptions {
  border?: Border;
  threshold?: number;
  delay?: number;
}

export interface IntersectionObserverConfig {
  rootMargin: string;
  threshold: number;
}
