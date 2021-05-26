class Node {
	constructor(val) {
		this.val = val
		this.prev = null
		this.next = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = null
	}

	//push-----------------------//
	push(value) {
		let newNode = new Node(value)
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}

		this.length++
		return this
	}

	//pop----------------------//
	pop() {
		if (this.head === null) return
		let lastNode = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = lastNode.prev
			this.tail.next = null
			lastNode.prev = null
		}

		this.length--
		return lastNode
	}

	//shift---------------------//
	shift() {
		if (this.head === null) return
		let firstNode = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = firstNode.next
			this.head.prev = null
			firstNode.next = null
		}
		this.length--
		return firstNode
	}

	//unshift---------------------//
	unshift(value) {
		let newNode = new Node(value)
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}

		this.length++
		return this
	}

	//get-----------------------------//
	get(index) {
		if (index < 0 || index >= this.length) return
		let current, count
		if (index <= this.length / 2) {
			count = 0
			current = this.head
			while (count !== index) {
				current = current.next
				count++
			}
		} else {
			count = this.length - 1
			current = this.tail
			while (count !== index) {
				current = current.prev
				count--
			}
		}

		return current
	}

	//set-------------------------------//
	set(index, value) {
		let reqNode = this.get(index)
		if (!reqNode) return false

		reqNode.val = value

		return true
	}

	//insert--------------------------------//
	insert(index, value) {
		if (index < 0 || index > this.length) return
		if (index === 0) {
			return this.unshift(value)
		} else if (index === this.length) {
			return this.push(value)
		} else {
			let currentNode = this.get(index)
			let newNode = new Node(value)

			newNode.next = currentNode
			newNode.prev = currentNode.prev
			currentNode.prev = newNode
			newNode.prev.next = newNode

			this.length++
			return newNode
		}
	}

	//remove------------------------//
	remove(index) {
		let reqNode = this.get(index)
		if (!reqNode) return
		if (index === 0) {
			return this.shift()
		} else if (index === this.length - 1) {
			return this.pop()
		} else {
			let prevNode = reqNode.prev
			let nextNode = reqNode.next

			prevNode.next = nextNode
			nextNode.prev = prevNode

			reqNode.prev = null
			reqNode.next = null
			this.length--
			return reqNode
		}
	}

	//print-------------------------//
	print() {
		let arr = []
		let current = this.head
		for (let i = 0; i < this.length; i++) {
			arr.push(current.val)
			current = current.next
		}

		return arr
	}

	//reverse---------------------//
	reverse() {
		if (this.head === null) {
			return null
		}

		let currentNode = this.head
		this.tail = currentNode

		while (currentNode !== null) {
			let prev = currentNode.prev
			currentNode.prev = currentNode.next
			currentNode.next = prev

			if (currentNode.prev) {
				currentNode = currentNode.prev
			} else {
				this.head = currentNode
				break
			}
		}
	}
}

let dll = new DoublyLinkedList()
dll.push('zero')
dll.push('one')
dll.push('two')
dll.push('three')
