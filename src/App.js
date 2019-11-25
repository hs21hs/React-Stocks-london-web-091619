import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const API = "http://localhost:3000/stocks"
class App extends Component {

state={companies: [],
myPortfolio: []}

componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(json => this.setState({companies: json}))
}

purchase = (pid)=>{
  console.log("g")
  const chosenCompany = this.state.companies.find((company)=>{return company.id === pid})
  this.setState({myPortfolio: [...this.state.myPortfolio, chosenCompany]})
}

sell = (cid)=>{
  
console.log(cid)
const newPortfolio = this.state.myPortfolio.filter((company) => {
  return company.id !== cid
})
this.setState({myPortfolio: [...newPortfolio]})
}

  render() {
    return (
      <div>
        <Header/>
        <MainContainer companies = {this.state.companies} purchase = {this.purchase} sell = {this.sell} myPortfolio = {this.state.myPortfolio}/>
      </div>
    );
  }
}

export default App;
