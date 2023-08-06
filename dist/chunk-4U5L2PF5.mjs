import {
  Queue
} from "./chunk-3IVKBVPV.mjs";
import {
  treeNode
} from "./chunk-7ZGQKWX2.mjs";

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

export {
  BinTree
};
