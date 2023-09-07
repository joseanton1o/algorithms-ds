import { describe, it, expect } from "vitest";

import { AVL } from "../AVL";

import { treeNode } from "../treeNode";

import {    height,
            stringfyInOrder,
            stringfyPreOrder,
            stringfyPostOrder,
            linkSonToParent,
            isComplete
        } from "../treeNode";

describe("AVL", () => {

    it ("should insert and keep balance ", () => {
        const tree = new AVL<number>();
        let balanced = tree.isBalanced();
        expect(balanced).toBe(true);

        const elementsToInsert = [10, 5, 15, 3, 7, 12, 17, 2, 4, 6, 9, 11, 14, 16, 18];

        elementsToInsert.forEach((element) => {
            tree.insert(element);
            balanced = tree.isBalanced();
            expect(balanced).toBe(true);

        });

        let result = stringfyPostOrder(tree.root);

        expect(result).toBe("2 4 3 6 9 7 5 11 14 12 16 18 17 15 10");

        result = stringfyInOrder(tree.root);

        expect(result).toBe("2 3 4 5 6 7 9 10 11 12 14 15 16 17 18");

    });

});