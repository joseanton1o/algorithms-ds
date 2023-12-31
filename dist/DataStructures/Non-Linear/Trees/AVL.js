"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/DataStructures/Non-Linear/Trees/AVL.ts
var AVL_exports = {};
__export(AVL_exports, {
  AVL: () => AVL
});
module.exports = __toCommonJS(AVL_exports);

// src/DataStructures/Non-Linear/Trees/treeNode.ts
var treeNode = class {
  // Constructor
  constructor({ value }) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
};
function height(root) {
  if (root === null) {
    return -1;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

// src/DataStructures/Linear/Queue.ts
var Queue = class {
  constructor() {
    this.data = [];
  }
  push(item) {
    if (item === void 0 || item === null) {
      return;
    }
    this.data.push(item);
  }
  pop() {
    let item = this.data.shift();
    return item === void 0 ? null : item;
  }
  peek() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  clear() {
    this.data = [];
  }
};

// src/DataStructures/Non-Linear/Trees/BinTree.ts
var BinTree = class {
  /**
   * @constructor
   * @description Creates a new instance of the Binary Tree class
   * 
   * @param {treeNode | null} root - The root of the tree
   * 
   */
  constructor(root = null, size = 0) {
    this.root = root;
  }
  // How to insert a treeNode in a binary tree? 
  // 1. If the tree is empty, insert the treeNode as the root
  // 2. If the tree is not empty, insert the treeNode in the first available position
  // 3. If the tree is full, insert the treeNode in the first available position in the last level
  /**
   * 
   * @function insert
   * @description Inserts a treeNode in the tree
   * 
   * @param {treeNode} newNode - The treeNode to be inserted
   * @returns {boolean} Whether the treeNode was inserted or not
   * 
   */
  insert(value) {
    let newNode = new treeNode({ value });
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
        newNode.parent = current;
        current.left = newNode;
        return true;
      }
      if (current.right === null) {
        newNode.parent = current;
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
   * @description Removes a treeNode from the tree (last treeNode in the last level)
   * 
   * @returns {boolean} Whether the treeNode was removed or not
   * 
   */
  remove() {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let previous = null;
    let queue = new Queue();
    queue.push(current);
    while (!queue.isEmpty() && current !== null) {
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
      current = queue.pop();
    }
    previous = current;
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

// src/DataStructures/Non-Linear/Trees/AVL.ts
function rightRotation(current) {
  if (current === null) {
    return;
  }
  if (current.left === null) {
    throw new Error("Left son of current node is null");
  }
  let currentLeft = current.left;
  let parent = current.parent;
  current.left = current.left.right;
  current.parent = currentLeft;
  currentLeft.right = current;
  currentLeft.parent = parent;
  if (currentLeft.parent !== null) {
    currentLeft.parent.left = currentLeft;
  }
}
function leftRotation(current) {
  if (current === null) {
    return;
  }
  if (current.right === null) {
    throw new Error("Right son of current node is null");
  }
  let currentRight = current.right;
  let parent = current.parent;
  current.right = current.right.left;
  current.parent = currentRight;
  currentRight.left = current;
  currentRight.parent = parent;
  if (currentRight.parent !== null) {
    currentRight.parent.right = currentRight;
  }
}
function leftRightRotation(current) {
  console.log("Left right rotation");
  leftRotation(current.left);
  rightRotation(current);
}
function rightLeftRotation(current) {
  console.log("Right left rotation");
  rightRotation(current.right);
  leftRotation(current);
}
var AVL = class extends BinTree {
  constructor(root = null) {
    super(root);
  }
  insert(value) {
    const newNode = new treeNode({ value });
    if (this.root === null) {
      this.root = newNode;
      return true;
    } else {
      let insertion = this.insertNode(this.root, newNode);
      return insertion;
    }
  }
  insertNode(current, newNode) {
    if (newNode.value === void 0 || newNode.value === null) {
      return false;
    }
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
        current.left.parent = current;
        if (this.balance(newNode))
          this.updateRoot();
        return true;
      } else {
        return this.insertNode(current.left, newNode);
      }
    } else if (newNode.value > current.value) {
      if (current.right === null) {
        current.right = newNode;
        current.right.parent = current;
        if (this.balance(newNode))
          this.updateRoot();
        return true;
      } else {
        return this.insertNode(current.right, newNode);
      }
    }
    return false;
  }
  checkBalance(current) {
    if (current === null) {
      return 0;
    }
    return height(current.left) - height(current.right);
  }
  balance(insertedNode) {
    let current = insertedNode.parent;
    let rotated = false;
    while (current !== null && !rotated) {
      let balance = this.checkBalance(current);
      if (balance > 1) {
        if (current.left === null) {
          throw new Error("Left son of current node is null");
        }
        if (insertedNode.value < current.left.value) {
          console.log("Right rotation of ", current.value);
          rightRotation(current);
        } else {
          leftRightRotation(current);
        }
        rotated = true;
      } else if (balance < -1) {
        if (current.right === null) {
          throw new Error("Right son of current node is null");
        }
        if (insertedNode.value > current.right.value) {
          console.log("Left rotation of ", current.value);
          console.log("Left rotation");
          leftRotation(current);
        } else {
          rightLeftRotation(current);
        }
        rotated = true;
      }
      current = current.parent;
    }
    return rotated;
  }
  updateRoot() {
    let newRoot = this.root;
    while (newRoot !== null) {
      if (newRoot.parent !== null)
        newRoot = newRoot.parent;
      else
        break;
    }
    this.root = newRoot;
  }
  search(value) {
    if (this.root === null) {
      return null;
    } else {
      return this.searchNode(this.root, value);
    }
  }
  searchNode(current, value) {
    if (current === null) {
      return null;
    } else if (value < current.value) {
      return this.searchNode(current.left, value);
    } else if (value > current.value) {
      return this.searchNode(current.right, value);
    } else {
      return current;
    }
  }
  isBalanced() {
    return this.isBalancedNode(this.root);
  }
  isBalancedNode(current) {
    if (current === null) {
      return true;
    }
    let balance = this.checkBalance(current);
    if (balance > 1 || balance < -1) {
      return false;
    }
    return this.isBalancedNode(current.left) && this.isBalancedNode(current.right);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVL
});
