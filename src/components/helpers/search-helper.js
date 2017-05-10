// Import functions
import includes from 'lodash/includes'

// Find matches fr input in an array
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

// Check if the user input is dangerous
const isInputDangerous = dangerousInput => {
	String(dangerousInput.toLowerCase())
	if (includes(dangerousInput, '{')) { return true }
	else if (includes(dangerousInput, '}')) { return true }
	else if (includes(dangerousInput, '<')) { return true }
	else if (includes(dangerousInput, '>')) { return true }
	else if (includes(dangerousInput, '`')) { return true }
	else { return false }
}

export { findMatches, isInputDangerous }