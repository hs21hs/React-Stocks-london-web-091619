import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const API = "http://localhost:3000/stocks"
class App extends Component {

state={companies: [],
myPortfolio: [],
sortType: "default",
filterType: "default"}

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

arrange = (type)=>{
  this.setState({sortType : type})
}

companiesToPass = ()=>{
  const comps = [...this.state.companies]
  
  if (this.state.sortType === "default"){
    return this.state.companies
  }
  if (this.state.sortType === "Alphabetically"){
    return comps.sort((a,b)=>{
      return a.ticker.localeCompare(b.ticker)
    })
  }
  if (this.state.sortType === "Price"){
    return comps.sort((a,b)=>{
      return (a.price - b.price)
    })
  }
}

  render() {
    return (
      <div>
        <Header/>
        <MainContainer arrange = {this.arrange} companies = {this.companiesToPass} purchase = {this.purchase} sell = {this.sell} myPortfolio = {this.state.myPortfolio}/>
      </div>
    );
  }
}

export default App;
