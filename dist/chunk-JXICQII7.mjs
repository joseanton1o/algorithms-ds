// src/DataStructures/Linear/Queue.ts
var Queue = class {
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
    return this.data.shift();
  }
  peek() {
    return this.data[0];
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
  Queue
};
