function getRand(num) {
	return Math.round(Math.random() * num)
}
function generateAlleles(TYPES = ['A', 'B', 'O']) {
	let allArr = []
	allArr.push(TYPES[getRand(2)])
	allArr.push(TYPES[getRand(2)])
	return allArr
}
class Person {
	constructor() {
		this.parents = null
		this.alleles = null
	}

	getRandomAllele() {
		if (this.alleles === null) return null
		return this.alleles[getRand(1)]
	}
}

function createFamily(gen) {
	let p1 = new Person()
	let p2 = new Person()

	p1.alleles = generateAlleles()
	p2.alleles = generateAlleles()

	console.log('Generation 0')
	console.log(
		`p1: ${p1.alleles[0]}, ${p1.alleles[1]} | p2: ${p2.alleles[0]}, ${p2.alleles[1]}`
	)

	for (let i = 1; i <= gen; i++) {
		let c1 = new Person()
		let c2 = new Person()
		c1.parents = [p1, p2]
		c1.alleles = [p1.getRandomAllele(), p2.getRandomAllele()]
		c2.parents = [p1, p2]
		c2.alleles = [p1.getRandomAllele(), p2.getRandomAllele()]
		console.log(`Generation ${i}`)
		console.log(
			`c1: ${c1.alleles[0]}, ${c1.alleles[1]} | c2: ${c2.alleles[0]}, ${c2.alleles[1]}`
		)

		p1 = c1
		p2 = c2
	}
	return p1
}
