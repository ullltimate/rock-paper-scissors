import process from 'node:process';

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
    console.log(moves)
}


