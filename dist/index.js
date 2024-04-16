"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Block_1 = __importDefault(require("./models/Block"));
const genesis = new Block_1.default("0", "1", "Hey");
console.log(genesis);
//# sourceMappingURL=index.js.map