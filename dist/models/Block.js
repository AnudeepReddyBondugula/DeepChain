"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    _hash = "";
    _previousHash = "";
    _data = "";
    _timestamp = 0;
    constructor(hash, previousHash, data) {
        this._hash = hash;
        this._previousHash = previousHash;
        this._data = data;
        this._timestamp = Date.now();
    }
}
exports.default = Block;
//# sourceMappingURL=Block.js.map