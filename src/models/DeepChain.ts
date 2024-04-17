import Block from "./Block";

export default class DeepChain {
    private _blocks: Block[] = [];
    private _chainLength: number = 0;
    private _difficulty: number = 4;

    constructor() {
        this.blocks.push(new Block("0", "Genesis Block"));
        this.chainLength = 1;
    }

    addBlock(data : string, debug : boolean = false): void {
        const block = new Block(this.blocks[this.blocks.length - 1].hash, data);
        block.mineBlock(this._difficulty, debug);
        this.blocks.push(block);
        this.chainLength++;
    }

    // * getter methods

    getGenesisBlock(): Block {
        return this.getBlock(0);
    }

    getLatestBlock(): Block {
        return this.getBlock(this.chainLength - 1);
    }

    getBlock(index: number): Block {
        return this.blocks[index];
    }

    get blocks() : Block[] {
        return this._blocks;
    }

    get chainLength() : number {
        return this._chainLength;
    }

    get difficulty() : number {
        return this._difficulty;
    }



    // *Setter methods

    set blocks(blocks: Block[]) {
        this._blocks = blocks;
    }

    set chainLength(chainLength: number) {
        this._chainLength = chainLength;
    }

    set difficulty(difficulty: number) {
        this._difficulty = difficulty;
    }

    toString() : string {
        return JSON.stringify(this, null, 2);
    }

    isValidChain () : boolean {
        for(let i = 0; i < this.chainLength-1; i++) {
            let previousBlock = this.blocks[i];
            let currentBlock = this.blocks[i+1];

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