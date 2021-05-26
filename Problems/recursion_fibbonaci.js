function fibbonaci(x) {
	if (x <= 2) return 1
	return fibbonaci(x - 1) + fibbonaci(x - 2)
}

fibbonaci(12)
