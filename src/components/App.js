import React, { Component } from 'react';
import {Link} from 'react-router'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      stock: ''
    }
    this.changeInput = this.changeInput.bind(this)
    this.searchStock = this.searchStock.bind(this)
  }
  changeInput(e){
    this.setState({stock: e.target.value})
  }
  searchStock(e){
    e.preventDefault()
    console.log('this.state:', this.state)
  // this.setState({stock: ''})
  }
  render() {
    let text = this.state.stock
    return (
      <div className="container">
        <h3>
          {/* <Link to="/"><button className="btn btn-primary">Home</button></Link>
          <Link to="/details"><button className="btn btn-primary">Details</button></Link> */}
          <div className="input-group form-inline">
            <input type="text" className="form-control" onChange={this.changeInput} value={text}/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-md" id="btn-chat" onClick={this.searchStock}>Enter</button>
            </span>
          </div>
        </h3>
      </div>
    )
  }
}
