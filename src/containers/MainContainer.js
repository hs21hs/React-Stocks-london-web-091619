import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar arrange ={this.props.arrange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer companies = {this.props.companies} purchase = {this.props.purchase}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio = {this.props.myPortfolio} sell = {this.props.sell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
