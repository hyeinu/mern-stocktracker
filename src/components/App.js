import React, { Component } from 'react';
import { Link } from 'react-router'
import StockAction from '../actions/StockActions'
import StockStore from '../stores/StockStore'
import SearchRes from './SearchRes'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      stock: '',
      stocks: []
    }
    this.changeInput = this.changeInput.bind(this)
    this.searchStock = this.searchStock.bind(this)
    this._onChange = this._onChange.bind(this)
    this.searchDetails = this.searchDetails.bind(this)
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({stocks: StockStore.getAll()})
  }
  changeInput(e){
    this.setState({stock: e.target.value})
  }
  searchStock(e){
    e.preventDefault()
    let term = this.state.stock
    StockAction.getStocks(term)
    this.setState({stock: ''})
  }
  render() {
    let term = this.state.stock
    let stocks
    console.log(this.state.stocks.length)
    // let stockArr = this.state.stocks
    if(this.state.stocks.length){
      stocks = this.state.stocks.map((stock, index) =>{
        return <SearchRes key={index} stock={stock} searchDetails={this.searchDetails}/>
      })
    } else {
      stocks = (<div></div>)
    }
    return (
      <div className="container">
        <h3>
          {/* <Link to="/"><button className="btn btn-primary">Home</button></Link>
          <Link to="/details"><button className="btn btn-primary">Details</button></Link> */}
          <div className="input-group form-inline">
            <input type="text" className="form-control" onChange={this.changeInput} value={term}/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-md" id="btn-chat" onClick={this.searchStock}>
              Enter
              </button>
            </span>
          </div>
        </h3>
        { stocks }
      </div>
    )
  }
}
