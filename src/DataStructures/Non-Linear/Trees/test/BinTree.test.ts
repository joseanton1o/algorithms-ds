import { describe, expect, it } from "vitest";

import { BinTree } from "../BinTree";

import { treeNode, stringfyPreOrder, stringfyInOrder, printTree } from "../treeNode";

describe("BinTree", () => {
    it("should insert elements in the right order", () => {
        const tree = new BinTree<number>();

        const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];

        elementsToInsert.forEach((element) => {
            tree.insert(element);
        });

        let result = stringfyPreOrder(tree.root);

        expect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16 18");

        result = stringfyInOrder(tree.root);

        expect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17 18");

    });

    it ("should have every node with the right parent", () => {
        const tree = new BinTree<number>();

        const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];

        elementsToInsert.forEach((element) => {
            tree.insert(element);
        });

        let current = tree.root;

        expect(current).not.toBe(null);

        while (current !== null) {
            if (current.left !== null) {
                expect(current.left.parent).toBe(current);
            }

            if (current.right !== null) {
                expect(current.right.parent).toBe(current);
            }

            current = current.left;
        }
    });

    it ("should delete last inserted element", () => {
        const tree = new BinTree<number>();

        const elementsToInsert = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 8, 12, 14, 16, 18];
        
        elementsToInsert.forEach((element) => {
            tree.insert(element);
        });

        let res = tree.remove();
        
        expect(res).toBe(true);

        let result = stringfyPreOrder(tree.root);

        expect(result).toBe("10 5 3 1 4 7 6 8 15 13 12 14 17 16");

        result = stringfyInOrder(tree.root);

        expect(result).toBe("1 3 4 5 6 7 8 10 12 13 14 15 16 17");

    });
 
});