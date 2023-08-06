/**
 * Class representing a node in a binary tree
 * @class node
 * @property {number} value - The value of the node
 * @property {node | null} left - The left child of the node
 * @property {node | null} right - The right child of the node
 * @property {node | null} parent - The parent of the node
 *
 */
declare class node<T> {
    value: T;
    left: node<T> | null;
    right: node<T> | null;
    parent: node<T> | null;
    constructor({ value }: {
        value: T;
    });
}

/**
 *
 * @class BinTree
 * @description Binary Tree class
 *
 */
declare class BinTree<T> {
    root: node<T> | null;
    /**
     * @constructor
     * @description Creates a new instance of the Binary Tree class
     *
     * @param {node | null} root - The root of the tree
     *
     */
    constructor(root?: node<T> | null, size?: number);
    /**
     *
     * @function insert
     * @description Inserts a node in the tree
     *
     * @param {node} newNode - The node to be inserted
     * @returns {boolean} Whether the node was inserted or not
     *
     */
    insert(value: T): boolean;
    /**
     *
     * @function remove
     *
     * @description Removes a node from the tree (last node in the last level)
     *
     * @returns {boolean} Whether the node was removed or not
     *
     */
    remove(): boolean;
}

export { BinTree as B, node as n };
