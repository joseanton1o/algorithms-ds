import { BinTree } from './BinTree.mjs';
import { treeNode } from './treeNode.mjs';

declare class AVL<T> extends BinTree<T> {
    constructor(root?: treeNode<T> | null);
    insert(value: T): boolean;
    insertNode(current: treeNode<T>, newNode: treeNode<T>): boolean;
    checkBalance(current: treeNode<T> | null): number;
    balance(insertedNode: treeNode<T>): boolean;
    updateRoot(): void;
    search(value: T): treeNode<T> | null;
    searchNode(current: treeNode<T> | null, value: T): treeNode<T> | null;
    isBalanced(): boolean;
    isBalancedNode(current: treeNode<T> | null): boolean;
}

export { AVL };
