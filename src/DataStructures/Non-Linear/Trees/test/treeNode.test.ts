import { describe, expect, it } from "vitest";

import { treeNode } from "../treeNode";

import {    height, 
            stringfyInOrder, 
            stringfyPreOrder, 
            stringfyPostOrder,
            linkSonToParent,
            isComplete  
        } from "../treeNode";

describe("treeNode", () => {
    // Creating a tree without bintree class
    let root : treeNode<number> = new treeNode<number>({value:10});
    root.left = new treeNode<number>({value:5});
    root.left.parent = root;
    root.right = new treeNode<number>({value:15});
    root.right.parent = root;
    root.left.left = new treeNode<number>({value:3});
    root.left.left.parent = root.left;
    root.left.right = new treeNode<number>({value:7});
    root.left.right.parent = root.left;
    root.right.left = new treeNode<number>({value:13});
    root.right.left.parent = root.right;
    root.right.right = new treeNode<number>({value:17});
    root.right.right.parent = root.right;

    it ("should have the right height", () => {
        expect(height(root)).toBe(2); 
    });

    it ("should have the right stringfyPreOrder", () => {
        expect(stringfyPreOrder(root)).toBe("10 5 3 7 15 13 17");
    });

    it ("should have the right stringfyInOrder", () => {
        expect(stringfyInOrder(root)).toBe("3 5 7 10 13 15 17");
    });

    it ("should have the right stringfyPostOrder", () => {
        expect(stringfyPostOrder(root)).toBe("3 7 5 13 17 15 10");
    });

    it ("should be complete", () => {
        expect(isComplete(root)).toBe(true);
    });

    it ("should not be complete", () => {
        if (root.right !== null)
        root.right.left = null;
        expect(isComplete(root)).toBe(false);
    });

    it ("should link the son to the parent", () => {
        let newNode = new treeNode<number>({value: 20});
        linkSonToParent(root.right, newNode);
        expect(root.right).toBe(newNode);
        expect(root.right?.parent).toBe(root);
    });
});
