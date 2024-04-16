// * This Class consists of methods related to cryptographic operations used throughout the Project

import * as crypto from 'crypto';

export default class CryptoHelper {
    
    // * Gives SHA-256 Hash of the corresponding data
    apply256 (data: string) : string {
        return crypto.createHash('sha256').update(data).digest('hex')
    }
}