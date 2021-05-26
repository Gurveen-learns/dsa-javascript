function someArr(arr, callback) {
	if (arr.length === 0) {
		return false
	}

	if (callback(arr[0])) return true

	return someArr(arr.slice(1), callback)
}

function isEven(num) {
	return num % 2 === 0
}

console.log(someArr([1], isEven))
