class Node {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addHeadNode = function (val) {
    this.head = new Node(val, this.head);
    this.size++;
    return this.printList(
      `New node with value of ${val} was added at the head of the list: `
    );
  };

  createList = function (...vals) {
    vals.forEach((val) => {
      this.addHeadNode(val);
    });
  };

  deleteHeadNode = function () {
    if (!this.head) return console.log('Empty list');
    let delVal = this.head.val;
    this.head = this.head.next;
    this.size--;
    return this.printList(`Head node with value of ${delVal} was deleted: `);
  };

  addTailNode = function (val) {
    let node = new Node(val);
    if (!this.head) return this.addHeadNode(val);
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = node;
    this.size++;
    return this.printList(
      `New node with value of ${val} was added at the tail of the list: `
    );
  };

  deleteTailNode = function () {
    if (!this.head) return console.log('Empty list');
    if (!this.head.next) return this.deleteHeadNode();
    let cur = this.head;
    let prev;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    let delVal = prev.next.val;
    prev.next = null;
    this.size--;
    return this.printList(`Tail node with value of ${delVal} was deleted: `);
  };

  addNodeAt = function (val, index) {
    if (index > 0 && index > this.size)
      return console.log('Invalid index for new node');
    if (index === 0) return this.addHeadNode(val);
    const node = new Node(val);
    let cur = this.head;
    let prev;
    let count = 0;
    while (count < index) {
      prev = cur;
      cur = cur.next;
      count++;
    }
    prev.next = node;
    node.next = cur;
    this.size++;
    return this.printList(`Node value of ${val} was added at index ${index}: `);
  };

  deleteNodeAt = function (index) {
    if (index > 0 && index > this.size)
      return console.log('Invalid index for new node');
    if (index === 0) return this.deleteHeadNode();
    let cur = this.head;
    let prev;
    let count = 0;
    while (count < index) {
      prev = cur;
      cur = cur.next;
      count++;
    }
    let delVal = prev.next.val;
    prev.next = cur.next;
    this.size--;
    return this.printList(
      `Node value of ${delVal} was deleted at index ${index}: `
    );
  };

  getListValue = function (index) {
    if ((index > 0 && index >= this.size) || !this.head)
      return console.log('Invalid node index');
    let node = this.head;
    let count = 0;
    while (node) {
      if (count === index)
        return console.log(`Value at index ${index} is ${node.val}`);
      node = node.next;
      count++;
    }
    return null;
  };

  printList = function (msg) {
    if (!this.size === 0) return console.log('Empty list');
    let node = this.head;
    let res = [];
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    return console.log(msg, res);
  };

  clearList = function () {
    this.head = null;
    this.size = 0;
    return console.log('List has been cleared head node is now ', this.head);
  };
}
