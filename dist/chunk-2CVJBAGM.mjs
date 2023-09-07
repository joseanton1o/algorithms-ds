import {
  BinTree
} from "./chunk-7BSK4L2T.mjs";
import {
  height,
  treeNode
} from "./chunk-SLLFHR75.mjs";

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

export {
  AVL
};
