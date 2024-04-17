"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("./Block"));
class DeepChain {
    _blocks = [];
    _chainLength = 0;
    _difficulty = 4;
    constructor() {
        this.blocks.push(new Block_1.default("0", "Genesis Block"));
        this.chainLength = 1;
    }
    addBlock(data, debug = false) {
        const block = new Block_1.default(this.blocks[this.blocks.length - 1].hash, data);
        block.mineBlock(this._difficulty, debug);
        this.blocks.push(block);
        this.chainLength++;
    }
    // * getter methods
    getGenesisBlock() {
        return this.getBlock(0);
    }
    getLatestBlock() {
        return this.getBlock(this.chainLength - 1);
    }
    getBlock(index) {
        return this.blocks[index];
    }
    get blocks() {
        return this._blocks;
    }
    get chainLength() {
        return this._chainLength;
    }
    get difficulty() {
        return this._difficulty;
    }
    // *Setter methods
    set blocks(blocks) {
        this._blocks = blocks;
    }
    set chainLength(chainLength) {
        this._chainLength = chainLength;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    toString() {
        return JSON.stringify(this, null, 2);
    }
    isValidChain() {
        for (let i = 0; i < this.chainLength - 1; i++) {
            let previousBlock = this.blocks[i];
            let currentBlock = this.blocks[i + 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.hash.substring(0, this._difficulty) !== Array(this._difficulty + 1).join("0")) {
                return false;
            }
        }
        return true;
    }
}
exports.default = DeepChain;
//# sourceMappingURL=DeepChain.js.map