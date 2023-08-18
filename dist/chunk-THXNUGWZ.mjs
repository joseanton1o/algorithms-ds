import {
  BinTree
} from "./chunk-7BSK4L2T.mjs";
import {
  linkSonToParent,
  treeNode
} from "./chunk-SLLFHR75.mjs";

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

export {
  BST
};
