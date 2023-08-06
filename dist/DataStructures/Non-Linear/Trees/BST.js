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

// src/DataStructures/Non-Linear/Trees/BST.ts
var BST_exports = {};
__export(BST_exports, {
  BST: () => BST
});
module.exports = __toCommonJS(BST_exports);

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
function linkSonToParent(oldtreeNode, newNode) {
  if (oldtreeNode !== null && oldtreeNode.parent !== null) {
    if (newNode !== null) {
      newNode.parent = oldtreeNode.parent;
    }
    if (oldtreeNode.parent.left === oldtreeNode) {
      oldtreeNode.parent.left = newNode;
    } else {
      oldtreeNode.parent.right = newNode;
    }
  } else {
    throw new Error("The treeNode to be replaced is null");
  }
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

// src/DataStructures/Non-Linear/Trees/BST.ts
var BST = class extends BinTree {
  constructor(root = null) {
    super(root);
  }
  insert(value) {
    const newNode = new treeNode({ value });
    if (this.root === null) {
      this.root = newNode;
      return true;
    } else {
      return this.insertNode(this.root, newNode);
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
        return true;
      } else {
        return this.insertNode(current.left, newNode);
      }
    } else if (newNode.value > current.value) {
      if (current.right === null) {
        current.right = newNode;
        current.right.parent = current;
        return true;
      } else {
        return this.insertNode(current.right, newNode);
      }
    }
    return false;
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
  // This should not be called with undefined as value as it makes no sense to remove the last node in this kind of tree
  remove(value) {
    if (value === void 0) {
      console.log("llamando a remove de bintree");
      return super.remove();
    }
    if (this.root === null) {
      return false;
    } else {
      let found = this.searchNode(this.root, value);
      return this.removeNode(found);
    }
  }
  removeNode(deleting) {
    if (deleting === null) {
      return false;
    }
    if (!deleting) {
      return false;
    }
    if (deleting.left === null && deleting.right === null) {
      linkSonToParent(deleting, null);
      return true;
    } else if (deleting.left !== null && deleting.right === null) {
      linkSonToParent(deleting, deleting.left);
      if (deleting.parent === null) {
        deleting = deleting.left;
      }
      return true;
    } else if (deleting.left === null && deleting.right !== null) {
      linkSonToParent(deleting, deleting.right);
      if (deleting.parent === null) {
        deleting = deleting.right;
      }
      return true;
    } else if (deleting.left !== null && deleting.right !== null) {
      let aux = deleting.right;
      while (aux.left !== null) {
        aux = aux.left;
      }
      deleting.value = aux.value;
      return this.removeNode(aux);
    }
    return false;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BST
});
