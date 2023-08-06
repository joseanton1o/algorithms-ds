import { treeNode } from './treeNode.mjs';
import { BinTree } from './BinTree.mjs';

declare class BST<T> extends BinTree<T> {
    constructor(root?: treeNode<T> | null);
    insert(value: T): boolean;
    insertNode(current: treeNode<T>, newNode: treeNode<T>): boolean;
    search(value: T): treeNode<T> | null;
    searchNode(current: treeNode<T> | null, value: T): treeNode<T> | null;
    remove(): boolean;
    remove(value: T): boolean;
    removeNode(deleting: treeNode<T> | null): boolean;
}

export { BST };
