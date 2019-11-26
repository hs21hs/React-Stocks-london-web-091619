import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.companies().map((company)=>{
            {return <Stock name={company.name} price={company.price} id = {company.id} purchase={this.props.purchase}/>}
          })
        }
      </div>
    );
  }

}

export default StockContainer;
