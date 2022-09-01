export class Queue {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  size() {
    return this.queue.length;
  }

  enqueue(...items) {
    return this.reverse
      ? this.queue.push(...items)
      : this.queue.unshift(...items);
  }

  dequeue() {
    if (this.size() === 0) return false;
    return this.reverse ? this.queue.shift() : this.queue.pop();
  }
}
