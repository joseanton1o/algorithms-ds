import {
  BST
} from "./chunk-THXNUGWZ.mjs";
import {
  AVL
} from "./chunk-SY5W7ACQ.mjs";
import {
  BinTree
} from "./chunk-7BSK4L2T.mjs";
import "./chunk-3IVKBVPV.mjs";
import {
  height,
  printTree,
  stringfyInOrder,
  stringfyPostOrder,
  stringfyPreOrder,
  treeNode
} from "./chunk-SLLFHR75.mjs";
import "./chunk-L4DI67DV.mjs";

// src/Algorithms/MergeSort.ts
function mergeSort(arr, comparator = (a, b) => {
  return a < b;
}) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle), comparator);
  let right = mergeSort(arr.slice(middle), comparator);
  return merge(left, right, comparator);
}
function merge(left, right, comparator) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (comparator(left[leftIndex], right[rightIndex])) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
export {
  AVL,
  BST,
  BinTree,
  height,
  mergeSort,
  printTree,
  stringfyInOrder,
  stringfyPostOrder,
  stringfyPreOrder,
  treeNode
};
