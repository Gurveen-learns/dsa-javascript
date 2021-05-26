function isPalindrome(inputStr) {
	const len = inputStr.length

	//base cases
	if (len === 1) return true
	if (len === 2) return inputStr[0] === inputStr[1]

	return (
		inputStr[0] === inputStr[len - 1] &&
		isPalindrome(inputStr.slice(1, len - 1))
	)
}

console.log(isPalindrome('racecar'))
