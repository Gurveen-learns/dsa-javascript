class Node {
	constructor(value) {
		this.value = value
		this.prev = null
	}
}

class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	//push-----------//
	push(value) {
		let newNode = new Node(value)
		if (this.first === null) {
			this.first = newNode
			this.last = newNode
		} else {
			newNode.prev = this.last
			this.last = newNode
		}
		this.size++
		return this.size
	}

	//pop-------------//
	pop() {
		if (this.size === 0) return

		let lastNode = this.last
		if (this.size === 1) {
			this.first = null
			this.last = null
		} else {
			this.last = lastNode.prev
			lastNode.prev = null
		}

		this.size--
		return lastNode
	}
}

let stack = new Stack()
stack.push('zero')
stack.push('one')
stack.push('two')
