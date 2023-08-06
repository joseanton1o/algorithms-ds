import {
  describe,
  globalExpect,
  it
} from "../../../chunk-RBLSP2H7.mjs";
import {
  height,
  isComplete,
  linkSonToParent,
  stringfyInOrder,
  stringfyPostOrder,
  stringfyPreOrder,
  treeNode
} from "../../../chunk-7ZGQKWX2.mjs";
import "../../../chunk-L4DI67DV.mjs";

// src/DataStructures/Non-Linear/Trees/treeNode.test.ts
describe("treeNode", () => {
  let root = new treeNode({ value: 10 });
  root.left = new treeNode({ value: 5 });
  root.left.parent = root;
  root.right = new treeNode({ value: 15 });
  root.right.parent = root;
  root.left.left = new treeNode({ value: 3 });
  root.left.left.parent = root.left;
  root.left.right = new treeNode({ value: 7 });
  root.left.right.parent = root.left;
  root.right.left = new treeNode({ value: 13 });
  root.right.left.parent = root.right;
  root.right.right = new treeNode({ value: 17 });
  root.right.right.parent = root.right;
  it("should have the right height", () => {
    globalExpect(height(root)).toBe(3);
  });
  it("should have the right stringfyPreOrder", () => {
    globalExpect(stringfyPreOrder(root)).toBe("10 5 3 7 15 13 17");
  });
  it("should have the right stringfyInOrder", () => {
    globalExpect(stringfyInOrder(root)).toBe("3 5 7 10 13 15 17");
  });
  it("should have the right stringfyPostOrder", () => {
    globalExpect(stringfyPostOrder(root)).toBe("3 7 5 13 17 15 10");
  });
  it("should be complete", () => {
    globalExpect(isComplete(root)).toBe(true);
  });
  it("should not be complete", () => {
    if (root.right !== null)
      root.right.left = null;
    globalExpect(isComplete(root)).toBe(false);
  });
  it("should link the son to the parent", () => {
    var _a;
    let newNode = new treeNode({ value: 20 });
    linkSonToParent(root.right, newNode);
    globalExpect(root.right).toBe(newNode);
    globalExpect((_a = root.right) == null ? void 0 : _a.parent).toBe(root);
  });
});
