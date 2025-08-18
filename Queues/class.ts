export default class Queue<T> {
    private items: T[];
	constructor() {
		this.items = [];
	}

	enqueue(element:T):void {
		this.items.push(element);
	}

	dequeue():T|undefined {
		if (this.isEmpty()) {
            throw new Error("Underflow")
        }
		return this.items.shift();
	}

	front():T|undefined {
		if (this.isEmpty()) {throw new Error("No elements in Queue");}
		return this.items[0];
	}

	isEmpty():boolean {
		return this.items.length === 0;
	}

	size():number {
		return this.items.length;
	}

	print():void {
		console.log(this.items.toString());
	}
}