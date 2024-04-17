"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeepChain_1 = __importDefault(require("./models/DeepChain"));
const deepChain = new DeepChain_1.default();
const n = 3;
for (let i = 0; i < n; i++) {
    let data = "Hi! There Block Number: " + (i + 1);
    deepChain.addBlock(data);
}
//# sourceMappingURL=index.js.map