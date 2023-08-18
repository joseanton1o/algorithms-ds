import "../../chunk-L4DI67DV.mjs";

// src/DataStructures/Linear/Stack.ts
var Stack = class {
  constructor() {
    this.data = [];
  }
  push(item) {
    if (item === void 0 || item === null) {
      return;
    }
    this.data.push(item);
  }
  pop() {
    let item = this.data.pop();
    return item === void 0 ? null : item;
  }
  peek() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[this.data.length - 1];
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  clear() {
    this.data = [];
  }
};
export {
  Stack
};
