import Queue from "./class.mjs";

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print(); // 1,2,3
console.log(q.dequeue()); // 1
console.log(q.front()); // 2
