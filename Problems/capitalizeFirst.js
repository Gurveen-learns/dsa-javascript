function capitalizeFirst(arr) {
	function helper(str) {
		return str[0].toUpperCase().concat(str.slice(1))
	}
	if (arr.length === 1) return helper(arr[0])

	let newArr = []
	newArr.push(helper(arr[0]))
	return newArr.concat(capitalizeFirst(arr.slice(1)))
}

console.log(capitalizeFirst(['one', 'two', 'twohRee']))
