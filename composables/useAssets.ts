export const useAsset = (path: string): string => {
  const assets = (import.meta as any).glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/' + path] ?? ''
}
