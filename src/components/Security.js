import crypto from 'node:crypto';

class Security {
    hmacKey(){
       return crypto.randomBytes(32).toString('hex').toUpperCase();
    }
    hmac(computerMove, hmacKey){
       return crypto.createHmac('SHA256', hmacKey).update(computerMove).digest('hex').toUpperCase();
    }
}

export {Security}