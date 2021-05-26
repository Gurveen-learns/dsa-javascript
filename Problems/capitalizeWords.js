function capitalizeWords(arr) {
	let newArr = []
	if (arr.length === 1) return arr[0].toUpperCase()

	newArr.push(arr[0].toUpperCase())

	return newArr.concat(capitalizeWords(arr.slice(1)))
}

console.log(capitalizeWords(['one', 'two', 'three', 'adfFGd']))
