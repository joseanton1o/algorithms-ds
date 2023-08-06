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

// src/DataStructures/Non-Linear/Trees/BinTree.ts
var BinTree_exports = {};
__export(BinTree_exports, {
  BinTree: () => BinTree
});
module.exports = __toCommonJS(BinTree_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BinTree
});
