function rangeSum(num) {
	if (num <= 0) return 0
	return num + rangeSum(num - 1)
}

console.log(rangeSum(100))
