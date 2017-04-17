import includes from 'lodash/includes'

const findMatches = (array, arrayLength, input) => {
	let filteredArray = []
	for (var i = 0; i < arrayLength; i++) {
		let item = array[i]
		const condition = includes(item.title.toUpperCase().toLowerCase(), input)
		if (condition) {
			filteredArray.push(item)
		}
	}
	return filteredArray
}

const isInputDangerous = dangerousInput => {
	const normalInput = String(dangerousInput.toLowerCase())
	if (includes(normalInput, '{')) { return true }
	else if (includes(normalInput, '}')) { return true }
	else if (includes(normalInput, '<')) { return true }
	else if (includes(normalInput, '>')) { return true }
	else if (includes(normalInput, '`')) { return true }
	else if (includes(normalInput, '/')) { return true }
	else { return false }
}

export { findMatches, isInputDangerous }