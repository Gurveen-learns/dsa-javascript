class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}

	//push-----------------------//
	push(val) {
		let newNode = new Node(val)
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}

	//pop-------------------------//
	pop() {
		if (this.length === 0) return
		let current = this.head
		let ahead = this.head

		while (ahead.next) {
			current = ahead
			ahead = ahead.next
		}

		current.next = null
		this.tail = current
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return ahead
	}

	//shift----------------------//
	shift() {
		if (!this.head) return

		let firstNode = this.head
		this.head = firstNode.next
		firstNode.next = null

		this.length--
		if (this.length === 0) {
			this.tail = null
		}

		return firstNode
	}

	//unshift-------------------------//
	unshift(val) {
		let newNode = new Node(val)
		if (this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}

	//get---------------------------------//
	get(index) {
		if (index < 0 || index >= this.length) {
			return null
		} else {
			let reqNode = this.head
			for (let i = 1; i <= index; i++) {
				reqNode = reqNode.next
			}
			return reqNode
		}
	}

	//set-----------------------------//
	set(index, value) {
		if (index < 0 || index >= this.length) {
			return null
		} else {
			let reqNode = this.get(index)
			reqNode.val = value
			return reqNode
		}
	}

	//insert---------------------//
	insert(index, value) {
		if (index < 0 || index > this.length) return false

		if (index === 0) {
			this.unshift(value)
		} else if (index === this.length) {
			this.push(value)
		} else {
			let newNode = new Node(value)
			let prev = this.get(index - 1)
			newNode.next = prev.next
			prev.next = newNode
			this.length++
		}
		return true
	}

	//remove---------------------//
	remove(index) {
		if (index < 0 || index >= this.length) return null

		if (index === 0) {
			return this.shift()
		} else if (index === this.length - 1) {
			return this.pop()
		} else {
			let prev = this.get(index - 1)
			let current = prev.next
			prev.next = current.next
			current.next = null
			this.length--

			return current
		}
	}

	//reverse------------------------//
	reverse() {
		let current = this.head
		let prev = null
		let ahead = null

		this.head = this.tail
		this.tail = current

		for (let i = 0; i < this.length; i++) {
			ahead = current.next
			current.next = prev
			prev = current
			current = ahead
		}

		return this
	}

	//print----------------------//
	print() {
		let arr = []
		let current = this.head
		for (let i = 0; i < this.length; i++) {
			arr.push(current.val)
			current = current.next
		}
		return arr
	}
}

let sll = new SinglyLinkedList()
sll.push('one')
sll.push('two')
sll.push('three')
sll.push('four')
