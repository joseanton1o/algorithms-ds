"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/DataStructures/Linear/Stack.ts
var Stack_exports = {};
__export(Stack_exports, {
  Stack: () => Stack
});
module.exports = __toCommonJS(Stack_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Stack
});
