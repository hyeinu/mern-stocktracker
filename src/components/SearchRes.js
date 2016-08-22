import React, { Component } from 'react'


export default class SearchRes extends Component {
  render(){
    let {Name, Symbol, Exchange} = this.props.stock
    console.log('this.props.stock:', this.props.stock)
    return(
      <button className="btn btn-primary">{Name} || {Symbol}</button>
    )
  }
}
