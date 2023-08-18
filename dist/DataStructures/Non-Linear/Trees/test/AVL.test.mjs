import {
  describe,
  globalExpect,
  it
} from "../../../../chunk-RBLSP2H7.mjs";
import {
  AVL
} from "../../../../chunk-SY5W7ACQ.mjs";
import "../../../../chunk-7BSK4L2T.mjs";
import "../../../../chunk-3IVKBVPV.mjs";
import {
  stringfyInOrder,
  stringfyPreOrder
} from "../../../../chunk-SLLFHR75.mjs";
import "../../../../chunk-L4DI67DV.mjs";

// src/DataStructures/Non-Linear/Trees/test/AVL.test.ts
describe("AVL", () => {
  it("should insert and keep balance ", () => {
    const tree = new AVL();
    let balanced = tree.isBalanced();
    globalExpect(balanced).toBe(true);
    const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
      balanced = tree.isBalanced();
      globalExpect(balanced).toBe(true);
    });
    let result = stringfyPreOrder(tree.root);
    globalExpect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16 18");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17 18");
  });
});
