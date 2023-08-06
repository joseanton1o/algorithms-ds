import {height, linkSonToParent, treeNode,printTree} from "./treeNode";

import { stringfyInOrder, stringfyPostOrder, stringfyPreOrder } from "./treeNode";

import { BinTree } from "./BinTree";


export class BST <T> extends BinTree<T>{

    constructor(root: treeNode<T> | null = null){
        super(root);
    }

    
    insert(value: T): boolean{
        const newNode = new treeNode({ value: value});
        if(this.root === null){
            this.root = newNode;
            return true;
        }else{
            return this.insertNode(this.root, newNode);
        }
    }

    insertNode(current: treeNode<T> ,newNode: treeNode<T>): boolean{
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
                return true;
            } else {
                return this.insertNode(current.left, newNode);
            }
        } else if (newNode.value > current.value) {
            if (current.right === null) {
                current.right = newNode;
                current.right.parent = current;
                return true;
            } else {
                return this.insertNode(current.right, newNode);
            }
        }

        return false;
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

    // Overloading remove method
    remove (): boolean;
    remove (value: T): boolean;
    // This should not be called with undefined as value as it makes no sense to remove the last node in this kind of tree
    remove(value?: T): boolean{
        if(value === undefined){
            console.log("llamando a remove de bintree")
            return super.remove();
        }

        if(this.root === null){
            return false;
        }else{
            let found : treeNode<T> | null = this.searchNode(this.root, value);
            return this.removeNode(found);
        }
    }

    removeNode(deleting: treeNode<T>|null): boolean{


        if (deleting === null) {
            return false;
        }


        if (!deleting) {
            return false;
        }

        if (deleting.left === null && deleting.right === null) {
            linkSonToParent(deleting, null);
            return true;
        }
        else if (deleting.left !== null && deleting.right === null) {
            linkSonToParent(deleting, deleting.left); // The parent of the node is linked to the child of the node
            
            if (deleting.parent === null) { // The node is the root
                deleting = deleting.left;
            }

            
            
            return true;
        }
        else if (deleting.left === null && deleting.right !== null) {
            linkSonToParent(deleting, deleting.right); // The parent of the node is linked to the child of the node
            if (deleting.parent === null) { // The node is the root
                deleting = deleting.right;
            }

            return true;
        }
        // This else if is not necessary as the previous ones cover all the cases, however in order for typescript not to show an error, it is left here
        else if (deleting.left !== null && deleting.right !== null) {
            
            let aux : treeNode<T> | null = deleting.right;
            
            while(aux.left !== null){
                aux = aux.left;
            }

            // Now aux is the smallest node in the right subtree of the node to be deleted
            // We replace the value of the node to be deleted with the value of aux
            deleting.value = aux.value;
            // Now we delete aux, which is obviously either a leaf or a node with only one child
            // therefore only doing recursion at most once
            return this.removeNode(aux);
        }
        
        return false; // this would originally be not neccessary but in order to transpile typescript we need to add the if clause in the third case and therefore we need to add this return because typescript doesnt know that the last else if (if ever reached) will always return true
    }
}

/* Testing material
const bst = new BST<number>();

bst.insert(10);
bst.insert(3);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(1);
bst.insert(4);
printTree(bst.root);
console.log(height(bst.root));


console.log(stringfyPreOrder(bst.root));
console.log(stringfyInOrder(bst.root));
console.log(stringfyPostOrder(bst.root));

let toRemove = bst.search(3); // node | null

bst.removeNode(toRemove);

printTree(bst.root);
*/

