import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import Cards from "./Components/Cards.js"

var arr=[]

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      data:[]
    } 
  }
componentDidMount(){
  axios.get(`http://localhost:5000/api/players`)
  .then( response => {
    this.setState({data: response.data})
  })
  .catch(error => {
    console.log("No data recieved", error)
});
}
componentDidUpdate(){
  arr=this.state.data
}
render(){
  return (
    <div className="App">
      <Navbar/>
      <Cards data={this.state.data} />
    </div>
  )
}
}


export default App;
