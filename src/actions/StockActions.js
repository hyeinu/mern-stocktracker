import API from '../API'

const StockActions = {
  getStocks(text){
    API.getStocks(text);
  }
}

export default StockActions
