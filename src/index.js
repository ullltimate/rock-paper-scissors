import process from 'node:process';
import { moveComputer, movesObj, showMenu } from './helpers/helper.js';
import { stdin, stdout } from 'node:process';
//import crypto from 'node:crypto';
//console.log(crypto.randomBytes(32).toString('hex'))

let argv = process.argv;

if (argv.length < 3){
    //throw new Error('Please enter your moves (odd number, minimum 3 non-repeated moves) when you launch the app. For example: "npm start rock paper scissors"') 
    console.log('Please enter your moves (odd number, minimum 3 non-repeated moves) when you launch the app.\nFor example: "npm start rock paper scissors"\n');
} else if (argv.length < 5) {
    console.log('You must enter 3 or more non-repeating moves (odd number).\nFor example: "npm start rock paper scissors" or "npm start rock Spock paper lizard scissors" or "npm start 1 2 3 4 5 6 7"\n');
} else if (argv.length % 2 === 0){
    console.log('Number of moves must be odd\n');
} else if (new Set(argv).size != argv.length){
    console.log('Moves must not be repeated\n');
} else {
    let moves;
    moves = argv.slice(2);
    console.log(moves);
    //console.log(movesObj(moves));
    showMenu(moves);
    function listenerConsole(){
        stdout.write('Enter your move: ');
        stdin.on('data', data => {
            //console.log(data.toString().trim());
            //console.log(Object.keys(movesObj(moves)));
            if(data.toString().trim() === '?'){
                console.log('help')
            } else if(data.toString().trim() === '0'){
                process.exit();
            }else{
               let filterArr = Object.keys(movesObj(moves)).filter(el => el === data.toString().trim());
               if (filterArr > 0){
                stdout.write(`Your move: ${movesObj(moves)[filterArr[0]]}\n`);
                stdout.write(`Computer move: ${moveComputer(movesObj(moves))}\n`);
                process.exit();
               } else if (filterArr.length === 0){
                showMenu(moves);
                stdout.write('Enter your move: ');
               }
            }
        })
        process.on('SIGINT', () => process.exit());
    }
    listenerConsole();
}


