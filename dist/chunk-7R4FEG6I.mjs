import {
  Queue
} from "./chunk-JXICQII7.mjs";

// src/node.ts
var node = class {
  // Constructor
  constructor({ value }) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
};
function printTree(current, depth = 0) {
  const indentation = "  ".repeat(depth);
  if (current === null) {
    return;
  }
  printTree(current.right, depth + 1);
  console.log(indentation + current.value);
  printTree(current.left, depth + 1);
}
function height(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}
function linkSonToParent(oldNode, newNode) {
  if (oldNode !== null && oldNode.parent !== null) {
    if (newNode !== null) {
      newNode.parent = oldNode.parent;
    }
    if (oldNode.parent.left === oldNode) {
      oldNode.parent.left = newNode;
    } else {
      oldNode.parent.right = newNode;
    }
  } else {
    throw new Error("The node to be replaced is null");
  }
}
function stringfyPreOrder(root) {
  if (root === null) {
    return "";
  }
  let result = "";
  result += root.value + " ";
  result += stringfyPreOrder(root.left);
  result += stringfyPreOrder(root.right);
  return result;
}
function stringfyInOrder(root) {
  if (root === null) {
    return "";
  }
  let result = "";
  result += stringfyInOrder(root.left);
  result += root.value + " ";
  result += stringfyInOrder(root.right);
  return result;
}
function stringfyPostOrder(root) {
  if (root === null) {
    return "";
  }
  let result = "";
  result += stringfyPostOrder(root.left);
  result += stringfyPostOrder(root.right);
  result += root.value + " ";
  return result;
}

// src/DataStructures/Non-Linear/Trees/BinTree.ts
var BinTree = class {
  /**
   * @constructor
   * @description Creates a new instance of the Binary Tree class
   * 
   * @param {node | null} root - The root of the tree
   * 
   */
  constructor(root = null, size = 0) {
    this.root = root;
  }
  // How to insert a node in a binary tree? 
  // 1. If the tree is empty, insert the node as the root
  // 2. If the tree is not empty, insert the node in the first available position
  // 3. If the tree is full, insert the node in the first available position in the last level
  /**
   * 
   * @function insert
   * @description Inserts a node in the tree
   * 
   * @param {node} newNode - The node to be inserted
   * @returns {boolean} Whether the node was inserted or not
   * 
   */
  insert(value) {
    let newNode = new node({ value });
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    let current = this.root;
    let queue = new Queue();
    queue.push(current);
    while (!queue.isEmpty()) {
      current = queue.pop();
      if (current.left === null) {
        current.left = newNode;
        return true;
      }
      if (current.right === null) {
        current.right = newNode;
        return true;
      }
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return false;
  }
  /**
   * 
   * @function remove
   * 
   * @description Removes a node from the tree (last node in the last level)
   * 
   * @returns {boolean} Whether the node was removed or not
   * 
   */
  remove() {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let previous = null;
    let queue = new Queue();
    while (!queue.isEmpty()) {
      current = queue.pop();
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
      previous = current;
    }
    if (previous !== null) {
      if (previous.parent !== null) {
        if (previous.parent.left === previous) {
          previous.parent.left = null;
        } else {
          previous.parent.right = null;
        }
      } else {
        this.root = null;
      }
      return true;
    }
    return false;
  }
};

export {
  node,
  printTree,
  height,
  linkSonToParent,
  stringfyPreOrder,
  stringfyInOrder,
  stringfyPostOrder,
  BinTree
};
