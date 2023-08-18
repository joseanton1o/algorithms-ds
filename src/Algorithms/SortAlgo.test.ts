import { describe, it, expect } from "vitest";

import { mergeSort } from "./MergeSort";

describe("MergeSort", () => {
    it("should sort an array", () => {
        let arr: number[] = [5, 4, 3, 2, 1];
        let sorted: number[] = mergeSort(arr);

        expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });
});