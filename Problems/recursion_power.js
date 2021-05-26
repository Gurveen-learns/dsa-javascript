function power(exp, base) {
	if (base <= 0) {
		return 1
	}
	return exp * power(exp, base - 1)
}

console.log(power(2, 6))
