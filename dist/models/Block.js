"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoHelper_1 = __importDefault(require("../utils/CryptoHelper"));
class Block {
    _hash = "";
    _previousHash = "";
    _data = "";
    _timestamp = 0;
    _nonce = 0;
    constructor(previousHash, data) {
        this._previousHash = previousHash;
        this._data = data;
        this._timestamp = Date.now();
        this._hash = this.calculateHash();
    }
    // * Getter methods
    get hash() {
        return this._hash;
    }
    get previousHash() {
        return this._previousHash;
    }
    get data() {
        return this._data;
    }
    get timestamp() {
        return this._timestamp;
    }
    get nonce() {
        return this._nonce;
    }
    // * Setter methods
    set hash(hash) {
        this._hash = hash;
    }
    set previousHash(previousHash) {
        this._previousHash = previousHash;
    }
    set data(data) {
        this._data = data;
    }
    set timestamp(timestamp) {
        this._timestamp = timestamp;
    }
    set nonce(nonce) {
        this._nonce = nonce;
    }
    calculateHash() {
        return CryptoHelper_1.default.apply256(this._previousHash +
            this._data +
            this._timestamp.toString() +
            this._nonce.toString());
    }
    mineBlock(difficulty, debug = false) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this._nonce++;
            this.hash = this.calculateHash();
        }
        if (debug)
            console.log("Block Mined result: " + this.hash);
        return this.hash;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
}
exports.default = Block;
//# sourceMappingURL=Block.js.map