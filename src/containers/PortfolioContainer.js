import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.myPortfolio.map((company)=>{
              
              return <Stock name={company.name} price={company.price} id = {company.id}  sell = {this.props.sell}/>
            }) 
          }
      </div>
    );
  }

}

export default PortfolioContainer;
