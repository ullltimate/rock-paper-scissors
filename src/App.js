import process from 'node:process';
import { Game } from './components/Game.js';

class App{
    argv = process.argv;
    
    checkArguments(){
        if (this.argv.length < 3){
            console.log('Please enter your moves (odd number, minimum 3 non-repeated moves) when you launch the app.\nFor example: "npm start rock paper scissors"\n');
        } else if (this.argv.length < 5) {
            console.log('You must enter 3 or more non-repeating moves (odd number).\nFor example: "npm start rock paper scissors" or "npm start rock Spock paper lizard scissors" or "npm start 1 2 3 4 5 6 7"\n');
        } else if (this.argv.length % 2 === 0){
            console.log('Number of moves must be odd\n');
        } else if (new Set(this.argv).size != this.argv.length){
            console.log('Moves must not be repeated\n');
        } else {
            let playGame = new Game();
            playGame.startGame(this.argv);
        }
    }
}
let startApp = new App();
startApp.checkArguments();
