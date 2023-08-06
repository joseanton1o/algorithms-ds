/**
 * Class representing a treeNode in a binary tree
 * @class treeNode
 * @property {number} value - The value of the treeNode
 * @property {treeNode | null} left - The left child of the treeNode
 * @property {treeNode | null} right - The right child of the treeNode
 * @property {treeNode | null} parent - The parent of the treeNode
 *
 */
declare class treeNode<T> {
    value: T;
    left: treeNode<T> | null;
    right: treeNode<T> | null;
    parent: treeNode<T> | null;
    constructor({ value }: {
        value: T;
    });
}
/**
 * @function printTree
 * @description Prints the tree in order
 * @param {treeNode | null} current - The current treeNode
 * @param {number} depth - The depth of the current treeNode
 * @returns {void}
 *
 */
declare function printTree(current: treeNode<any> | null, depth?: number): void;
/**
 * @function height
 * @description Returns the height of the tree using recursion
 *
 * @param {treeNode | null} root - The root of the tree
 * @returns {number} The height of the tree
 *
*/
declare function height(root: treeNode<any> | null): number;
declare function isComplete(root: treeNode<any> | null): boolean;
/**
 * @description puts the parent of the old treeNode as the parent of the new treeNode
 * @param oldtreeNode treeNode to be replaced
 * @param newNode treeNode to replace the old treeNode
 *
 */
declare function linkSonToParent(oldtreeNode: treeNode<any> | null, newNode: treeNode<any> | null): void;
declare function stringfyPreOrder(root: treeNode<any> | null): string;
declare function stringfyInOrder(root: treeNode<any> | null): string;
declare function stringfyPostOrder(root: treeNode<any> | null): string;

export { height, isComplete, linkSonToParent, printTree, stringfyInOrder, stringfyPostOrder, stringfyPreOrder, treeNode };
