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
function createMenu(arr){
    let menu = 'Available moves:\n';
    const constMoves = '0 - exit\n? - help';
    for (let i=0; i<arr.length; i++){
        menu += `${i+1} - ${arr[i]}\n`;
    }
    menu += constMoves;
    return menu;
}
export {movesObj, createMenu}