import { stdout } from "node:process";

class Menu {
    createMenu(arr){
        let menu = 'Available moves:\n';
        const constMoves = '0 - exit\n? - help\n';
        for (let i=0; i<arr.length; i++){
            menu += `${i+1} - ${arr[i]}\n`;
        }
        menu += constMoves;
        return menu;
    }
    showMenu(arr){
        stdout.write(this.createMenu(arr));
    }
}

export {Menu}