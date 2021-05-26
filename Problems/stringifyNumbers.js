function stringify(obj) {
	var newObj = {}
	for (var key in obj) {
		if (typeof obj[key] === 'number') {
			newObj[key] = obj[key].toString()
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			newObj[key] = stringify(obj[key])
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj
}

console.log(stringify({ a: 1, b: { c: 3 } }))
