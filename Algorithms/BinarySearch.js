function binarySearch(arr, value) {
	let start = 0
	let end = arr.length - 1

	while (start <= end) {
		let middle = Math.ceil((start + end) / 2)

		if (value < arr[middle]) {
			end = middle - 1
		} else if (value > arr[middle]) {
			start = middle + 1
		} else {
			return middle
		}
	}
	return -1
}

let a = [1, 3, 5, 7, 9, 13, 15, 24]
