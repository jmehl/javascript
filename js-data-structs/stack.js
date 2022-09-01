export class Stack {
  constructor(...items) {
    this.reverse = false;
    this.stack = [...items];
  }

  size() {
    return this.stack.length;
  }

  push(...items) {
    return this.reverse
      ? this.stack.unshift(...items)
      : this.stack.push(...items);
  }

  pop() {
    if (this.size() === 0) return false;
    return this.reverse ? this.stack.shift() : this.stack.pop();
  }
}
