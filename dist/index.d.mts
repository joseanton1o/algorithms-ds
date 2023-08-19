export { AVL } from './DataStructures/Non-Linear/Trees/AVL.mjs';
export { BST } from './DataStructures/Non-Linear/Trees/BST.mjs';
export { BinTree } from './DataStructures/Non-Linear/Trees/BinTree.mjs';
export { height, printTree, stringfyInOrder, stringfyPostOrder, stringfyPreOrder, treeNode } from './DataStructures/Non-Linear/Trees/treeNode.mjs';

declare function mergeSort(arr: any[], comparator?: (a: any, b: any) => boolean): number[];

export { mergeSort };
