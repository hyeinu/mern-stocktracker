import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

const ServerAction = {
  recieveStocks(stocks){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_STOCKS,
      stocks
    })
  }
}

export default ServerAction
