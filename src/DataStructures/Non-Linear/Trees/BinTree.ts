// Generic Binary Tree

import { treeNode, height, printTree, stringfyInOrder, stringfyPostOrder, stringfyPreOrder } from "./treeNode";

import { Queue } from "../../Linear/Queue";

// Might be interesting to add a competition feature to the tree, maybe with a subclass?
/* 
type competitionTree = {
    isCompetition: boolean,
    numberOfLeaves: number
}
*/
/**
 * 
 * @class BinTree
 * @description Binary Tree class
 * 
 */
export class BinTree <T> {
    root : treeNode<T> | null;

    
    
    /**
     * @constructor
     * @description Creates a new instance of the Binary Tree class
     * 
     * @param {treeNode | null} root - The root of the tree
     * 
     */
    constructor(root: treeNode<T> | null = null, size: number = 0) {        
        this.root = root;

    }

    // How to insert a treeNode in a binary tree? 
    // 1. If the tree is empty, insert the treeNode as the root
    // 2. If the tree is not empty, insert the treeNode in the first available position
    // 3. If the tree is full, insert the treeNode in the first available position in the last level

    /**
     * 
     * @function insert
     * @description Inserts a treeNode in the tree
     * 
     * @param {treeNode} newNode - The treeNode to be inserted
     * @returns {boolean} Whether the treeNode was inserted or not
     * 
     */
    insert(value: T): boolean {
        let newNode = new treeNode<T>({value: value});

        if (this.root === null) {
            this.root = newNode;
            return true;
        } 

        // We need to find the first available position in the last level
        
        let current : treeNode<T> | null = this.root;

        let queue : Queue<treeNode<T>> = new Queue<treeNode<T>>();
        queue.push(current); // We add the root to the queue

        while (!queue.isEmpty()) {
            current = queue.pop() as treeNode<T>;

            if (current.left === null) {
                newNode.parent = current;
                current.left = newNode;
                return true;
            }

            if (current.right === null) {
                newNode.parent = current;
                current.right = newNode;
                return true;
            }

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }

        return false; 
    }

    /**
     * 
     * @function remove
     * 
     * @description Removes a treeNode from the tree (last treeNode in the last level)
     * 
     * @returns {boolean} Whether the treeNode was removed or not
     * 
     */
    remove(): boolean {
        
        if (this.root === null) {
            return false;
        }

        let current : treeNode<T> | null = this.root;
        let previous : treeNode<T> | null = null;

        let queue : Queue<treeNode<T>> = new Queue<treeNode<T>>();
        queue.push(current); // We add the root to the queue
        // We select the last treeNode in the last level
        while (!queue.isEmpty() && current !== null) {
            
            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
            
            current = queue.pop();
        }

        previous = current;

        // Delete the treeNode
        if (previous !== null) {
            if (previous.parent !== null) {
                if (previous.parent.left === previous) {
                    previous.parent.left = null;
                } else {
                    previous.parent.right = null;
                }
            }
            else { // The treeNode is the root
                this.root = null;
            }

            return true;
        }

        return false;
    }
}
