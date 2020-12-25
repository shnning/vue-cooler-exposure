export function warning(error: string) {
  console.warn(`[vue-cooler-exposure]: ${error}`);
}

export function debounce(fn: Function, delay: number) {
  let timer: number;
  return function(this: any, args?: any) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      fn.call(this, args);
    }, delay);
  };
}

export function isIntersecting(
  entry: IntersectionObserverEntry,
  threshold: number
) {
  return (
    entry.isIntersecting ||
    (threshold === 0
      ? entry.intersectionRatio > 0
      : entry.intersectionRatio >= threshold)
  );
}
