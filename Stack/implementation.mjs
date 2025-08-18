import Stack from "./class.mjs";

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
stack.push(5);
stack.print();
console.log(stack.peek());
stack.pop();
stack.print();
