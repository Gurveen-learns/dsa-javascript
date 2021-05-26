function flatArr(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			newArr = newArr.concat(flatArr(arr[i]))
		} else {
			newArr.push(arr[i])
		}
	}
	return newArr
}

console.log(flatArr([[1, 2], 3]))
