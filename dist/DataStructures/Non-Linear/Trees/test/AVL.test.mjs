import {
  describe,
  globalExpect,
  it
} from "../../../../chunk-RBLSP2H7.mjs";
import {
  AVL
} from "../../../../chunk-2CVJBAGM.mjs";
import "../../../../chunk-7BSK4L2T.mjs";
import "../../../../chunk-3IVKBVPV.mjs";
import {
  stringfyInOrder,
  stringfyPostOrder
} from "../../../../chunk-SLLFHR75.mjs";
import "../../../../chunk-L4DI67DV.mjs";

// src/DataStructures/Non-Linear/Trees/test/AVL.test.ts
describe("AVL", () => {
  it("should insert and keep balance ", () => {
    const tree = new AVL();
    let balanced = tree.isBalanced();
    globalExpect(balanced).toBe(true);
    const elementsToInsert = [10, 5, 15, 3, 7, 12, 17, 2, 4, 6, 9, 11, 14, 16, 18];
    elementsToInsert.forEach((element) => {
      tree.insert(element);
      balanced = tree.isBalanced();
      globalExpect(balanced).toBe(true);
    });
    let result = stringfyPostOrder(tree.root);
    globalExpect(result).toBe("2 4 3 6 9 7 5 11 14 12 16 18 17 15 10");
    result = stringfyInOrder(tree.root);
    globalExpect(result).toBe("2 3 4 5 6 7 9 10 11 12 14 15 16 17 18");
  });
});
