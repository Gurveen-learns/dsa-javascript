function prodArr(arr) {
	if (arr.length === 0) return 1
	return arr[0] * prodArr(arr.slice(1))
}

console.log(prodArr([]))
