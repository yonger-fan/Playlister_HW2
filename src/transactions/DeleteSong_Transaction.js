import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, stack1,stack2,index, copySong) {
        super();
        this.app = initApp;
        this.stack1 = stack1;
        this.stack2 = stack2;
        this.index = index;
        this.copySong = copySong;
    }

    doTransaction() {
        this.stack1.push(this.copySong);
        this.stack2.push(this.index);
        this.app.deleteSong(this.index);
    }
    
    undoTransaction() {
        this.app.insertSong(this.stack1,this.stack2);
    }
}