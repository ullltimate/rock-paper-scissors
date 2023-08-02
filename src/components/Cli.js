import process from 'node:process';
import { movesObj } from '../helpers/helper.js'
import { stdin, stdout } from 'node:process';
import { Menu } from './Menu.js';
import { TableHelp } from './TableHelp.js';
import { ResultGame } from './ResultGame.js';

class Cli {
    listenerConsole(moves, computerMove, hmacKey){
        stdin.on('data', data => {
            if(data.toString().trim() === '?'){
                let tableHelp = new TableHelp();
                tableHelp.help(moves);
                this.newMoveUser(moves);
            } else if(data.toString().trim() === '0'){
                process.exit();
            }else{
               let resultGame = new ResultGame(); 
               let filterArr = Object.keys(movesObj(moves)).filter(el => el === data.toString().trim());
               if (filterArr > 0){
                stdout.write(`Your move: ${movesObj(moves)[filterArr[0]]}\n`);
                stdout.write(`Computer move: ${computerMove}\n`);
                stdout.write(`${resultGame.chooseWin(moves, computerMove, movesObj(moves)[filterArr[0]]) === 'Draw' ? 'Draw' : 'You ' + resultGame.chooseWin(moves, computerMove, movesObj(moves)[filterArr[0]])}\n`);
                stdout.write(`HMAC key: ${hmacKey}\n`);
                process.exit();
               } else if (filterArr.length === 0){
                stdout.write('Please enter correct move\n');
                this.newMoveUser(moves);
               }
            }
        })
        process.on('SIGINT', () => process.exit());
    }
    newMoveUser(moves){
        let menu = new Menu();
        menu.showMenu(moves);
        stdout.write('Enter your move: ');
    }
}

export {Cli}