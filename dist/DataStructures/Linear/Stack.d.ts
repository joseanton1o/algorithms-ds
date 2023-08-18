declare class Stack<T> {
    private data;
    push(item: T): void;
    pop(): T | null;
    peek(): T | null;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}

export { Stack };
