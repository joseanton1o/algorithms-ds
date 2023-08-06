import {
  BST
} from "../../../chunk-XJ4TXKXJ.mjs";
import "../../../chunk-4U5L2PF5.mjs";
import "../../../chunk-3IVKBVPV.mjs";
import {
  describe,
  globalExpect,
  it
} from "../../../chunk-RBLSP2H7.mjs";
import {
  printTree,
  stringfyInOrder,
  stringfyPreOrder
} from "../../../chunk-7ZGQKWX2.mjs";
import "../../../chunk-L4DI67DV.mjs";

// src/DataStructures/Non-Linear/Trees/BST.test.ts
describe("BST", () => {
  it("should insert elements in the right order", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    let result = stringfyPreOrder(tree.root);
    globalExpect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16 18");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17 18");
  });
  it("should have every node with the right parent", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    let current = tree.root;
    globalExpect(current).not.toBe(null);
    while (current !== null) {
      if (current.left !== null) {
        globalExpect(current.left.parent).toBe(current);
      }
      if (current.right !== null) {
        globalExpect(current.right.parent).toBe(current);
      }
      current = current.left;
    }
  });
  it("should delete the given element", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    tree.remove(10);
    let result = stringfyPreOrder(tree.root);
    globalExpect(result).toBe("12 5 3 1 4 7 6 8 15 13 14 17 16 18");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("1 3 4 5 6 7 8 12 13 14 15 16 17 18");
  });
  it("should delete the element that is at right", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    printTree(tree.root);
    tree.remove();
    let result = stringfyPreOrder(tree.root);
    globalExpect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17");
  });
  it("should return the element with the tag", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    let result = tree.search(10);
    globalExpect(result).not.toBe(null);
    if (result !== null) {
      globalExpect(result.value).toBe(10);
    }
  });
  it("should return null when the element is not in the tree", () => {
    const tree = new BST();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    let result = tree.search(11);
    globalExpect(result).toBe(null);
  });
});
