// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.next = null;
//   }
// }

// export class HashTable {
//   constructor(size) {
//     this.cells = new Array(size);
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);
//     console.log(total % this.cells.length);
//     return total % this.cells.length;
//   }

//   insert(key, value) {
//     const hash = this.hash(key);
//     if (!this.cells[hash]) {
//       this.cells[hash] = new Node(key, value);
//     } else if (this.cells[hash].key === key) {
//       this.cells[hash].value = value;
//     } else {
//       let node = this.cells[hash];
//       while (node.next) {
//         if (node.next.key === key) {
//           node.next.value = value;
//           return;
//         }
//         node = node.next;
//       }
//       node.next = new Node(key, value);
//     }
//   }

//   get(key) {
//     const hash = this.hash(key);
//     if (!this.cells[hash]) return null;
//     else {
//       let node = this.cells[hash];
//       while (node) {
//         if (node.key === key) return node.value;
//         node = node.next;
//       }
//       return null;
//     }
//   }

//   getAll() {
//     const table = [];
//     for (let i = 0; i < this.cells.length; i++) {
//       const cell = [];
//       let node = this.cells[i];
//       while (node) {
//         cell.push(node.value);
//         node = node.next;
//       }
//       table.push(cell);
//     }
//     return table;
//   }
// }

// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.next = null;
//   }
// }

// export class HashTable {
//   constructor() {
//     this.nodes = [];
//   }

//   hash(key) {
//     key = toString();
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       let char = key.charCodeAt(i);
//       hash = (hash << 5) - hash + char;
//       hash = hash & hash;
//     }
//     return hash;
//   }

//   insert(key, value) {
//     const hash = this.hash(key);
//     if (!this.nodes[hash]) {
//       this.nodes[hash] = new Node(key, value);
//     } else if (this.nodes[hash].key === key) {
//       this.nodes[hash].value = value;
//     } else {
//       let node = this.nodes[hash];
//       while (node.next) {
//         if (node.next.key === key) {
//           node.next.value = value;
//           return;
//         }
//         node = node.next;
//       }
//       node.next = new Node(key, value);
//     }
//   }

//   get(key) {
//     const hash = this.hash(key);
//     if (!this.nodes[hash]) return null;
//     else {
//       let node = this.nodes[hash];
//       while (node) {
//         if (node.key === key) return node.value;
//         node = node.next;
//       }
//       return null;
//     }
//   }
// }

export class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
  }

  hash(key) {
    key = key.toString();
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash;
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  has(key) {
    const hash = this.hash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return true;
    } else {
      return false;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }

  delete(key) {
    const hash = this.hash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      delete this.values[hash];
      this.length--;
    } else {
      return null;
    }
  }

  clear() {
    this.length = 0;
    this.values = {};
  }
}
