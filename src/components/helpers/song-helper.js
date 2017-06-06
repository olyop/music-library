const checkSongLength = str => {

	let temp

	if (str.length === 5) {
		if (str.slice(0,1) === '0') {
			temp = str.slice(1,6)
		}
	}

	return temp
}

export { checkSongLength }