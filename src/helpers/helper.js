function movesObj(arr){
    const constMoves = {
        '0': 'exit',
        '?': 'help'
    }
    let obj = arr.reduce((acc, item, index) => {
        acc[index + 1] = item;
        return acc;
    }, {});
    return Object.assign(obj, constMoves);
}

export {movesObj}