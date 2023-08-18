import {
  describe,
  globalExpect,
  it
} from "../../../../chunk-RBLSP2H7.mjs";
import {
  BinTree
} from "../../../../chunk-7BSK4L2T.mjs";
import "../../../../chunk-3IVKBVPV.mjs";
import {
  stringfyInOrder,
  stringfyPreOrder
} from "../../../../chunk-SLLFHR75.mjs";
import "../../../../chunk-L4DI67DV.mjs";

// src/DataStructures/Non-Linear/Trees/test/BinTree.test.ts
describe("BinTree", () => {
  it("should insert elements in the right order", () => {
    const tree = new BinTree();
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
    const tree = new BinTree();
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
  it("should delete last inserted element", () => {
    const tree = new BinTree();
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
    });
    let res = tree.remove();
    globalExpect(res).toBe(true);
    let result = stringfyPreOrder(tree.root);
    globalExpect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17");
  });
});
