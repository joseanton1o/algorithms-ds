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

export {
  treeNode,
  printTree,
  height,
  isComplete,
  linkSonToParent,
  stringfyPreOrder,
  stringfyInOrder,
  stringfyPostOrder
};
