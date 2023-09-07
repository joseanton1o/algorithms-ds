import { height, printTree, stringfyInOrder, stringfyPostOrder, stringfyPreOrder } from "./treeNode";

import { BinTree } from "./BinTree";

import { treeNode } from "./treeNode";

function rightRotation(current: treeNode<any> | null): void{

    if (current === null) {
        return;
    }

    if (current.left === null) {
        throw new Error("Left son of current node is null");
    }

    let currentLeft = current.left;
    let parent = current.parent;

    current.left = current.left.right; // Right son of currentLeft will be left son of current
    current.parent = currentLeft; // Left son of currentLeft will be the new parent of current
    currentLeft.right = current; // As the new parent of current, currentLeft will have current as right son

    currentLeft.parent = parent; // Parent of currentLeft will be the parent of current (either null or a treeNode)
    if (currentLeft.parent !== null) {
        currentLeft.parent.left = currentLeft;
    }

}

function leftRotation(current: treeNode<any>|null): void | never{
    if (current === null) {
        return;
    }

    if (current.right === null) {
        throw new Error("Right son of current node is null");
    }

    let currentRight = current.right;
    let parent = current.parent;
    // console.log(current.parent);
    
    current.right = current.right.left;
    current.parent = currentRight;
    currentRight.left = current;

    
    currentRight.parent = parent;
    if (currentRight.parent !== null) {
        currentRight.parent.right = currentRight;
    }
}

function leftRightRotation(current: treeNode<any>): void{
    console.log("Left right rotation");
    leftRotation(current.left);
    rightRotation(current);
}

function rightLeftRotation(current: treeNode<any>): void{
    console.log("Right left rotation");
    rightRotation(current.right);
    leftRotation(current);
}

export class AVL <T> extends BinTree<T>{

    constructor(root: treeNode<T> | null = null){
        super(root);
    }

    insert(value: T): boolean{

        const newNode = new treeNode({ value: value});
        if(this.root === null){
            this.root = newNode;
            return true;
        }else{
            let insertion = this.insertNode(this.root, newNode);

            return insertion;
        }

    }

    insertNode(current: treeNode<T>, newNode : treeNode<T> ): boolean{

        if (newNode.value === undefined || newNode.value === null) {
            return false;
        }

        if (this.root === null) { // Can only be null as the constructor states
            this.root = newNode;
            return true;
        }

        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode;
                current.left.parent = current;
                if(this.balance(newNode))
                this.updateRoot();

                return true;
            } else {
                return this.insertNode(current.left, newNode);
            }
        } else if (newNode.value > current.value) {
            if (current.right === null) {
                current.right = newNode;
                current.right.parent = current;
                if(this.balance(newNode))
                this.updateRoot();
                return true;
            } else {
                return this.insertNode(current.right, newNode);
            }
        }

        return false;
    }


    checkBalance(current: treeNode<T> | null): number{
        if (current === null) {
            return 0;
        }

        return height(current.left) - height(current.right);
    }

    balance(insertedNode: treeNode<T>): boolean{
        // Inserted node wont have inbalance
        let current: treeNode<T> | null = insertedNode.parent;
        let rotated = false;
        while (current !== null && !rotated){
            let balance = this.checkBalance(current);
            if (balance > 1) {
                if (current.left === null) { // Will never happen as the node was inserted
                    throw new Error("Left son of current node is null");
                } 
                if (insertedNode.value < current.left.value ) {
                    console.log("Right rotation of ", current.value);
                    rightRotation(current);
                } else {
                    leftRightRotation(current);
                }
                rotated = true;
            } else if (balance < -1) { // Right heavy
                if (current.right === null) { // Same as above, will never happen as the node was inserted
                    throw new Error("Right son of current node is null");
                }
                if (insertedNode.value > current.right.value) {
                    console.log("Left rotation of ", current.value);

                    console.log("Left rotation");
                    leftRotation(current);
                } else {
                    rightLeftRotation(current);
                }
                rotated = true;
            }
            // If balance is 0, 1 or -1, the tree is balanced
            current = current.parent;
        }

        return rotated;
    }
    updateRoot(): void{
        let newRoot = this.root;
        while (newRoot !== null ) {
            if (newRoot.parent !== null)
                newRoot = newRoot.parent;
            else
                break;

        }
        
        this.root = newRoot;

    }
    search(value: T): treeNode<T> | null{
        if(this.root === null){
            return null;
        }else{
            return this.searchNode(this.root, value);
        }
    }

    searchNode(current: treeNode<T>|null, value: T): treeNode<T> | null{
        if(current === null){
            return null;
        }else if(value < current.value){
            return this.searchNode(current.left, value);
        }else if(value > current.value){
            return this.searchNode(current.right, value);
        }else{
            return current;
        }
    }

    isBalanced(): boolean{
        return this.isBalancedNode(this.root);
    }

    isBalancedNode(current: treeNode<T> | null): boolean{
        if (current === null) {
            return true;
        }

        let balance = this.checkBalance(current);
        if (balance > 1 || balance < -1) {
            return false;
        }

        return this.isBalancedNode(current.left) && this.isBalancedNode(current.right);
    }


    
}
