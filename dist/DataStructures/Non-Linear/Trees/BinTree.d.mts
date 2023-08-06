import { treeNode } from './treeNode.mjs';

/**
 *
 * @class BinTree
 * @description Binary Tree class
 *
 */
declare class BinTree<T> {
    root: treeNode<T> | null;
    /**
     * @constructor
     * @description Creates a new instance of the Binary Tree class
     *
     * @param {treeNode | null} root - The root of the tree
     *
     */
    constructor(root?: treeNode<T> | null, size?: number);
    /**
     *
     * @function insert
     * @description Inserts a treeNode in the tree
     *
     * @param {treeNode} newNode - The treeNode to be inserted
     * @returns {boolean} Whether the treeNode was inserted or not
     *
     */
    insert(value: T): boolean;
    /**
     *
     * @function remove
     *
     * @description Removes a treeNode from the tree (last treeNode in the last level)
     *
     * @returns {boolean} Whether the treeNode was removed or not
     *
     */
    remove(): boolean;
}

export { BinTree };
