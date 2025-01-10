class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		//or
		//this.tail = this.head
		this.length = 1;
	}
	push(value) {
		const newPushedNode = new Node(value);
		//edge case - what if this is a linkedl ist with no nodes?
		if (!this.head) {
			this.head = newPushedNode;
			this.tail = newPushedNode;
		} else {
			//This sets the last item's next proeprty to the new node!
			this.tail.next = newPushedNode;
			//This moves the tail variable to point at the newly created LAST node
			this.tail = newPushedNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let temp = this.head,
			pre = this.head;
		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}
	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}
	insert(index, value) {
		// we retun b/c we want to return what these methods return AND stop running code
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);
		if (index < 0 || index > this.length) return false;
		const newNode = new Node(value);
		const temp = this.get(index - 1);
		newNode = temp.next;
		this.length++;
		temp.next = newNode;
		return true;
	}
	remove() {}
	reverse() {}
}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);
