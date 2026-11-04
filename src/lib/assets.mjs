const base = import.meta.env.BASE_URL;

export function assetKey(src) {
  return base !== '/' && src.startsWith(base) ? '/' + src.slice(base.length) : src;
}

export function assetUrl(src) {
  return src.startsWith('/') && !src.startsWith(base) ? base + src.slice(1) : src;
}
