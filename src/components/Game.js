import { getRandomInt, movesObj} from '../helpers/helper.js';
import { stdout } from 'node:process';
import { Cli } from './Cli.js';
import { Security } from './Security.js';

class Game{
    startGame(argv){
        let moves = argv.slice(2);
        let security = new Security();
        let cli = new Cli();
        const hmacKey = security.hmacKey();
        const computerMove = this.moveComputer(movesObj(moves));
        const hmac = security.hmac(computerMove, hmacKey);
        stdout.write(`HMAC: ${hmac}\n`);
        cli.newMoveUser(moves);
        cli.listenerConsole(moves, computerMove, hmacKey);
    }
    moveComputer(obj){
        let randomNumber = getRandomInt(1, Object.keys(obj).length);
        let randomMove = obj[randomNumber];
        return randomMove;
    }
}
export {Game}