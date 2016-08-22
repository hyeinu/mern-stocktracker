import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _stocks = [];
let _details = [];

class StockStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_STOCKS:
          _stocks = action.stocks;
          this.emit('CHANGE');
          break;
        case Constants.RECIEVE_DETAILS:
          break;
      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }

  getAll(){
    return _stocks;
  }
}

export default new StockStore()
