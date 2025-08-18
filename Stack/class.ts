export default class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    }
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

<<<<<<< HEAD
  clear(): void {
    this.items = [];
  }

  print(): void {
=======
  clear() {
    this.items = [];
  }

  print() {
>>>>>>> 4ae7913f5281be6ea56426f648a5d6a0b446ab76
    console.log(this.items.toString());
  }
}