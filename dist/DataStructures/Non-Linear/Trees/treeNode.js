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

// src/DataStructures/Non-Linear/Trees/treeNode.ts
var treeNode_exports = {};
__export(treeNode_exports, {
  height: () => height,
  isComplete: () => isComplete,
  linkSonToParent: () => linkSonToParent,
  printTree: () => printTree,
  stringfyInOrder: () => stringfyInOrder,
  stringfyPostOrder: () => stringfyPostOrder,
  stringfyPreOrder: () => stringfyPreOrder,
  treeNode: () => treeNode
});
module.exports = __toCommonJS(treeNode_exports);
var treeNode = class {
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
    return -1;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}
function isComplete(root) {
  if (root === null) {
    return true;
  }
  if (root.left === null && root.right === null) {
    return true;
  }
  if (root.left !== null && root.right !== null) {
    return isComplete(root.left) && isComplete(root.right);
  }
  return false;
}
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
function stringfyPreOrder(root) {
  if (root === null) {
    return "";
  }
  let result = "";
  result += root.value + " ";
  result += stringfyPreOrder(root.left);
  result += stringfyPreOrder(root.right);
  if (root.parent === null) {
    result = result.trim();
  }
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
  if (root.parent === null) {
    result = result.trim();
  }
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
  if (root.parent === null) {
    result = result.trim();
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  height,
  isComplete,
  linkSonToParent,
  printTree,
  stringfyInOrder,
  stringfyPostOrder,
  stringfyPreOrder,
  treeNode
});
