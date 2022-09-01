class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Tree Structure
//            1
//          /  \
//        2     3
//      / \    / \
//     4  5   6  7
//    /
//   8

function createTree() {
  let root = new TreeNode(1);

  root.left = new TreeNode(2);
  root.right = new TreeNode(3);

  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  root.left.left.right = new TreeNode(8);

  return root;
}

// pre-order traversal trivial recursive solution
function preOrder(root) {
  if (root === null) return;
  // print the node value
  console.log(root.val);
  // explore left
  preOrder(root.left);
  // explore right
  preOrder(root.right);
}

// pre-order traversal iterative solution
function preOrderIter(root) {
  let res = [];
  if (root === null) return res;
  // add root to the stack
  let stack = [root];
  // while the stack is not empty loop
  while (stack.length) {
    let cur = stack.pop();
    // push current node value to response array
    res.push(cur.val);
    // if right node is not null push right node onto the stack
    if (cur.right) {
      stack.push(cur.right);
    }
    // if left node is not null push left node onto the stack
    // the left node is now on the top of the stack
    // the traversal can now continue in the pre-order left to right pattern
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return res;
}

// in-order traversal trivial recursive solution
function inOrder(root) {
  if (root === null) return;
  // explore left node
  inOrder(root.left);
  // print the node value
  console.log(root.val);
  // explore right node
  inOrder(root.right);
}

// in-order traversal iterative solution
function inOrderIter(root) {
  let res = [];
  if (root === null) return res;
  let stack = [];
  let cur = root;
  // while the cur node is not null or the stack is not empty loop
  while (cur || stack.length) {
    // explore left node
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    // push the node value to response array
    cur = stack.pop();
    // push right node onto the stack
    res.push(cur.val);
    cur = cur.right;
  }

  return res;
}

// post-order traversal trivial recursive solution
function postOrder(root) {
  if (root === null) return;
  // explore left node
  postOrder(root.left);
  // explore right node
  postOrder(root.right);
  // print the node value
  console.log(root.val);
}

// post-order traversal iterative solution
function postOrderIter(root) {
  let res = [];
  if (root === null) return res;
  // add root to the stack
  let stack = [root];
  // while the stack is not empty loop
  while (stack.length) {
    let cur = stack.pop();
    // push current node value to response array
    res.push(cur.val);
    // if left node is not null push left node onto the stack
    if (cur.left) {
      stack.push(cur.left);
    }
    // if right node is not null push right node onto the stack
    // the right node is now on the top of the stack
    if (cur.right) {
      stack.push(cur.right);
    }
  }
  // reverse the response array after exploring the tree from right to left
  return res.reverse();
}

// level-order traversal iterative solution
function levelOrderIter(root) {
  let res = [];
  if (root === null) return res;
  // add root to the queue
  let queue = [root];
  // while the queue is not empty loop
  while (queue.length) {
    let cur = queue.shift();
    // push current node value to response array
    res.push(cur.val);
    // if left node is not null push left node onto the queue
    // the left node will now be at the front of the queue
    if (cur.left) {
      queue.push(cur.left);
    }
    // if right node is not null push right node onto the queue
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  // reverse the response array after exploring the tree from right to left
  return res;
}

console.log('Pre-Order traversal', preOrderIter(createTree()));
console.log('In-Order traversal', inOrderIter(createTree()));
console.log('Post-Order traversal', postOrderIter(createTree()));
console.log('Level-Order traversal', levelOrderIter(createTree()));
