class ResultGame{
    chooseWin(arr, compMove, userMove){
        const numberMoves = arr.length;
        const numderWin = Math.floor(numberMoves/2);
        const indComp = arr.indexOf(compMove);
        const indUser = arr.indexOf(userMove);
        if (compMove === userMove) return 'Draw';
        if (indUser<indComp){
            if(indComp - indUser <= numderWin){
                return 'Lose!'
            }
            return 'Win!'
        }
        if(indUser - indComp <= numderWin){
            return 'Win!'
        }
        return 'Lose!'
    }
}

export {ResultGame}