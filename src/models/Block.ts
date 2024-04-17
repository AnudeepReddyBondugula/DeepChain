import CryptoHelper from "../utils/CryptoHelper";

export default class Block {
    
    private _hash : string = "";
    private _previousHash : string = "";
    private _data : string = "";
    private _timestamp : number = 0;
    private _nonce : number = 0;

    constructor (previousHash : string, data : string) {
        this._previousHash = previousHash;
        this._data = data;
        this._timestamp = Date.now();
        this._hash = this.calculateHash();
    }

    // * Getter methods
    get hash () : string {
        return this._hash;
    }

    get previousHash () : string {
        return this._previousHash;
    }

    get data () : string {
        return this._data;
    }

    get timestamp () : number {
        return this._timestamp;
    }

    get nonce () : number {
        return this._nonce;
    }

    // * Setter methods
    set hash (hash : string) {
        this._hash = hash;
    }

    set previousHash (previousHash : string) {
        this._previousHash = previousHash;
    }

    set data (data : string) {
        this._data = data;
    }

    set timestamp (timestamp : number) {
        this._timestamp = timestamp;
    }

    set nonce (nonce : number) {
        this._nonce = nonce;
    }

    calculateHash (): string {
        return CryptoHelper.apply256(
            this._previousHash + 
            this._data + 
            this._timestamp.toString() +
            this._nonce.toString()
        );
    }

    mineBlock (difficulty : number, debug : boolean = false): string {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this._nonce++;
            this.hash = this.calculateHash();
        }
        if (debug) console.log("Block Mined result: " + this.hash);
        return this.hash;
    }

    toString () : string {
        return JSON.stringify(this, null, 2);
    }
}