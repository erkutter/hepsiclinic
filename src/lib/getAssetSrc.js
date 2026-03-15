export function getAssetSrc(asset) {
  return typeof asset === 'string' ? asset : asset?.src ?? ''
}
