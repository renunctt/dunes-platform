export const getImageUrl = (name: string, ext: string = 'svg') => {
  return new URL(`../assets/images/icons/${name}.${ext}`, import.meta.url).href
}