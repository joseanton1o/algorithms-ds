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

        const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];

        elementsToInsert.forEach((element) => {
            tree.insert(element);
            balanced = tree.isBalanced();
            expect(balanced).toBe(true);

        });

        let result = stringfyPreOrder(tree.root);

        expect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16 18");

        result = stringfyInOrder(tree.root);

        expect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17 18");

    });

});