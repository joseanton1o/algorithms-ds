export function mergeSort(arr: any[], comparator = (a:any,b:any) => {return a<b}): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    let middle: number = Math.floor(arr.length / 2);

    let left: number[] = mergeSort(arr.slice(0, middle),comparator);
    let right: number[] = mergeSort(arr.slice(middle), comparator);

    return merge(left, right,comparator);
}

function merge(left: number[], right: number[], comparator: Function): number[] {
    let result: number[] = [];

    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (comparator(left[leftIndex],right[rightIndex])) { // We compare the elements at the current index
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // We add the remaining elements to the result array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}