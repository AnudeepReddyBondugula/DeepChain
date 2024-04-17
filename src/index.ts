import DeepChain from "./models/DeepChain";
import Block from "./models/Block";

const deepChain = new DeepChain();

const n: number = 3

for (let i = 0; i < n; i++) {
    let data : string = "Hi! There Block Number: " + (i+1);
    deepChain.addBlock(data);
}