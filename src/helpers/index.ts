export const getImageUrl = (
	name: string,
	dir: string,
	ext: string = 'svg'
) => {
	return new URL(
		`../assets/images/icons/${dir}/${name}.${ext}`,
		import.meta.url
	).href
}
