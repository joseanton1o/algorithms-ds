export class Stack<T> {
    private data: T[] = [];

    push(item: T) {
        if (item === undefined || item === null) {
            return;
        }

        this.data.push(item);
    }

    pop(): T | null {
        let item: T | undefined = this.data.pop();

        return (item === undefined) ? null : item;

    }

    peek(): T | null {
        if (this.data.length === 0) {
            return null;
        }

        return this.data[this.data.length - 1];
    }

    size(): number {
        return this.data.length;
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    clear(): void {
        this.data = [];
    }
}