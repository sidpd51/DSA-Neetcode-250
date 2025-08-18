export default class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop(element) {
		if (this.isEmpty()) return "Underflow";
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	clear() {
		this.items = [];
	}

	print() {
		console.log(this.items.toString());
	}
}
