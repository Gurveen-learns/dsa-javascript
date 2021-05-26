class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.start = null
		this.end = null
		this.length = 0
	}

	//enqueue--------------//
	enqueue(value) {
		let newNode = new Node(value)
		if (this.start === null) {
			this.start = newNode
			this.end = newNode
		} else {
			this.end.next = newNode
			this.end = newNode
		}

		this.length++
		return this.length
	}

	//dequeue-----------------//
	dequeue() {
		if (this.length === 0) return
		let firstNode = this.start
		if (this.length === 1) {
			this.start = null
			this.end = null
		} else {
			this.start = firstNode.next
			firstNode.next = null
		}

		this.length--
		return firstNode
	}
}

let q = new Queue()
q.enqueue('1')
q.enqueue('2')
q.enqueue('3')
