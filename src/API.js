import axios from 'axios'
import ServerAction from './actions/ServerActions'

const API = {
  getStocks(text){
    axios.get(`/api/stocks/${text}`)
      .then(res => {
        return res.data
      })
      .then(ServerAction.recieveStocks)
      .catch(console.error)
  },
  getDetails(symbol){
    axios.get(`/api/stocks/details/${symbol}`)
      .then(res => {
        return res.data
      })
      .then(ServerAction.recieveDetails)
      .catch(console.error)
  }
}

export default API
