import { stdout } from "node:process";

function movesObj(arr){
    const constMoves = {
        '0': 'exit',
    }
    let obj = arr.reduce((acc, item, index) => {
        acc[index + 1] = item;
        return acc;
    }, {});
    return Object.assign(obj, constMoves);
}
function createMenu(arr){
    let menu = 'Available moves:\n';
    const constMoves = '0 - exit\n? - help\n';
    for (let i=0; i<arr.length; i++){
        menu += `${i+1} - ${arr[i]}\n`;
    }
    menu += constMoves;
    return menu;
}
function showMenu(arr){
    stdout.write(createMenu(arr));
}
function moveComputer(obj){
    let randomNumber = getRandomInt(1, Object.keys(obj).length);
    let randomMove = obj[randomNumber];
    return randomMove;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function chooseWin(arr, compMove, userMove){
    const numberMoves = arr.length;
    const numderWin = Math.floor(numberMoves/2);
    const indComp = arr.indexOf(compMove);
    const indUser = arr.indexOf(userMove);
    console.log(indUser-indUser)
    console.log(indComp-indUser)
    if (compMove === userMove) return 'Draw';
    if (indUser<indComp){
        if(indUser - indComp <= numderWin){
            return 'Lose!'
        }
        return 'Win!'
    }
    if(indComp - indUser <= numberMoves){
        return 'Win!'
    }
    return 'Lose!'
}
export {movesObj, showMenu, moveComputer, chooseWin}