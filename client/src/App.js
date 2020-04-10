import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./Components/Navbar.jsx"
import Cards from "./Components/Cards.js"



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
    console.log(response.data)
    this.setState({data: response.data})
  })
  .catch(error => {
    console.log("No data recieved", error)
});
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
