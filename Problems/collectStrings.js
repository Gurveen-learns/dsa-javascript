function collectStrings(obj) {
	let arr = []

	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			arr.push(obj[key])
		} else if (typeof obj[key] === 'object') {
			arr.push(...collectStrings(obj[key]))
		}
	}

	return arr
}

console.log(
	collectStrings({
		stuff: 'foo',
		data: {
			val: {
				thing: {
					info: 'bar',
					moreInfo: {
						evenMoreInfo: {
							weMadeIt: 'baz',
						},
					},
				},
			},
		},
	})
)
