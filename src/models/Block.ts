import CryptoHelper from "../utils/CryptoHelper";

export default class Block {
    
    private _hash : string = "";
    private _previousHash : string = "";
    private _data : string = "";
    private _timestamp : number = 0;

    constructor (previousHash : string, data : string) {
        this._previousHash = previousHash;
        this._data = data;
        this._timestamp = Date.now();
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

    calculateHash (): void {
        const cryptoHelper : CryptoHelper = new CryptoHelper();

        this._hash = cryptoHelper.apply256(
            this._previousHash + 
            this._data + 
            this._timestamp.toString()
        );
    }
}