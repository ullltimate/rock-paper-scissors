import {ResultGame} from './ResultGame.js';

class TableHelp {
    help(arr){
        let resultGame = new ResultGame();
        let objTable = arr.reduce((acc, item) => {
            acc[item] = arr.reduce((tar, el) => {
                tar[el] = resultGame.chooseWin(arr, item, el);
                return tar;
            }, {});
            return acc;
        }, {});
        console.log('\nThe table shows the results from the users point of view (columns - user move, rows - computer move):')
        console.table(objTable);
    }
}

export {TableHelp}