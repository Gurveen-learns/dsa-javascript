function buildPatternTable(pattern) {
	//first value of this table is zero( because for just one character there is no  prefix or suffix)
	let table = [0]
	let prefix = 0
	let suffix = 1
	while (suffix < pattern.length) {
		if (pattern[prefix] === pattern[suffix]) {
			table[suffix] = prefix + 1
			prefix++
			suffix++
		} else if (prefix === 0) {
			table[suffix] = 0
			suffix++
		} else {
			prefix = table[prefix - 1]
		}
	}

	return lpsArr
}

function kmpSearch(text, pattern) {
	let textIndex = 0
	let patternIndex = 0
	let patternTable = buildPatternTable(pattern)

	while (textIndex < text.length) {
		//If we find a match
		if (text[textIndex] === pattern[patternIndex]) {
			//If we matched whole pattern string
			if (patternIndex === pattern.length - 1) {
				console.log(textIndex - patternIndex)
			}
			//Move to next index in both text and pattern
			textIndex++
			patternIndex++
		} else if (patternIndex > 0) {
			//If it is not a match and it is not on first Index of pattern
			patternIndex = patternTable[patternIndex - 1]
		} else {
			patternIndex = 0
			textIndex += 1
		}
	}
}
