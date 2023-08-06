// All functions and classes related to the treeNode class are here

/**
 * Class representing a treeNode in a binary tree
 * @class treeNode
 * @property {number} value - The value of the treeNode
 * @property {treeNode | null} left - The left child of the treeNode
 * @property {treeNode | null} right - The right child of the treeNode
 * @property {treeNode | null} parent - The parent of the treeNode
 * 
 */
export class treeNode <T> {
    // Public members (like a struct in C++)
    public value: T;
    public left: treeNode<T> | null;
    public right: treeNode<T> | null;
    public parent: treeNode<T> | null;

    // Constructor
    constructor({ value}: { value: T }) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

/**
 * @function printTree
 * @description Prints the tree in order
 * @param {treeNode | null} current - The current treeNode
 * @param {number} depth - The depth of the current treeNode
 * @returns {void}
 * 
 */
export function printTree(current: treeNode<any> | null, depth: number = 0): void {
    const indentation = "  ".repeat(depth); // Two spaces per depth level

    if (current === null) {
      return;
    }

    printTree(current.right, depth + 1);

    console.log(indentation + current.value);

    printTree(current.left, depth + 1);
}

/**
 * @function height
 * @description Returns the height of the tree using recursion
 * 
 * @param {treeNode | null} root - The root of the tree
 * @returns {number} The height of the tree
 *  
*/
export function height(root: treeNode<any>|null): number {
    if (root === null) {
        return 0;
    }

    return 1 + Math.max(height(root.left), height(root.right));
}

export function isComplete(root: treeNode<any>|null): boolean {

    if (root === null) {
        return true;
    }

    if (root.left === null && root.right === null) {
        return true;
    }

    if (root.left !== null && root.right !== null) {
        return isComplete(root.left) && isComplete(root.right);
    }

    return false;
}
/**
 * @description puts the parent of the old treeNode as the parent of the new treeNode
 * @param oldtreeNode treeNode to be replaced
 * @param newNode treeNode to replace the old treeNode
 * 
 */
export function linkSonToParent(oldtreeNode: treeNode<any> | null, newNode: treeNode<any>|null): void {
    
    if (oldtreeNode !== null && oldtreeNode.parent !== null) {
        if (newNode !== null) {
            newNode.parent = oldtreeNode.parent;
        }

        if (oldtreeNode.parent.left === oldtreeNode) {
            oldtreeNode.parent.left = newNode;
        }
        else {
            oldtreeNode.parent.right = newNode;
        }
    }
    else{
        throw new Error("The treeNode to be replaced is null");
    }
}



export function stringfyPreOrder(root: treeNode<any>|null): string {
    if (root === null) {
        return "";
    }

    let result : string = "";
    result += root.value + " ";
    result += stringfyPreOrder(root.left);
    result += stringfyPreOrder(root.right);
    if (root.parent === null){

        result = result.trim();
    }


    return result;
}

export function stringfyInOrder(root: treeNode<any>|null): string {
    if (root === null) {
        return "";
    }
    let result : string = "";
    result += stringfyInOrder(root.left);
    result += root.value + " ";
    result += stringfyInOrder(root.right);
    if (root.parent === null){

        result = result.trim();
    }
    return result;
}

export function stringfyPostOrder(root: treeNode<any>|null): string {

    if (root === null) {
        return "";
    }

    let result : string = "";
    result += stringfyPostOrder(root.left);
    result += stringfyPostOrder(root.right);
    result += root.value + " ";
    
    if (root.parent === null){
        result = result.trim();
    }

    return result;
}
