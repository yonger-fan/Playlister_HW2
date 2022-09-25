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
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, length) {
        super();
        this.app = initApp;
        this.length = length;
    }

    doTransaction() {
        this.app.createNewSong();
    }
    
    undoTransaction() {
        this.app.deleteSong(this.length);
    }
}